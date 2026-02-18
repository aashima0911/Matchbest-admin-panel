'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { db } from './firebase'; 
import { collection, getDocs, query, where, doc, getDoc, orderBy } from 'firebase/firestore';

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

// Blogs folder
const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');

// 1. IMPORT ALL POSTS
export const getBlogPosts = async () => {
  try {
    const blogRef = collection(db, "posts"); 
    
    const q = query(blogRef); 
    
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convert Firebase Timestamp to plain JavaScript object
      let timestamp = null;
      if (data.timestamp) {
        if (data.timestamp.toDate) {
          // It's a Firebase Timestamp object
          timestamp = {
            seconds: data.timestamp.seconds,
            nanoseconds: data.timestamp.nanoseconds
          };
        } else if (typeof data.timestamp === 'object' && data.timestamp.seconds !== undefined) {
          // It's already a plain object with seconds/nanoseconds
          timestamp = {
            seconds: data.timestamp.seconds,
            nanoseconds: data.timestamp.nanoseconds
          };
        } else {
          // It's already a plain value (string, number, etc.)
          timestamp = data.timestamp;
        }
      }
      
      // Construct Cloudinary URL for each post
      let imageUrl = "/assets/placeholder.jpg";
      
      // Check if we have an image URL
      if (data.imageURL) {
        if (typeof data.imageURL === 'string') {
          // If it's already a full Cloudinary URL, use it as is
          if (data.imageURL.includes('cloudinary.com')) {
            imageUrl = data.imageURL;
          } else {
            // If it's a Cloudinary public ID, construct the full URL
            imageUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${data.imageURL}`;
          }
        } else if (typeof data.imageURL === 'object' && data.imageURL.url) {
          // If it's an object with a url property (common in Firebase)
          imageUrl = data.imageURL.url;
        } else if (typeof data.imageURL === 'object' && data.imageURL.imageURL) {
          // If it's a nested object with imageURL property
          imageUrl = data.imageURL.imageURL;
        }
      } else if (data.image) {
        // Fallback to image field
        if (typeof data.image === 'string') {
          if (data.image.includes('cloudinary.com')) {
            imageUrl = data.image;
          } else {
            imageUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${data.image}`;
          }
        }
      }
      
      return {
        id: doc.id,
        ...data,
        timestamp: timestamp,
        image: imageUrl
      };
    });
  } catch (error) {
    console.error("Firebase fetch error:", error);
    return [];
  }
};

// 2. SINGLE POST VIEW
export async function getPostBySlug(slug) {
  try {
    const blogRef = collection(db, 'posts'); 
    const q = query(blogRef, where('slug', '==', slug));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const postData = snapshot.docs[0].data();
    
    // Construct Cloudinary URL for the post
    let imageUrl = "/assets/placeholder.jpg";
    
    // Check if we have an image URL
    if (postData.imageURL) {
      if (typeof postData.imageURL === 'string') {
        // If it's already a full Cloudinary URL, use it as is
        if (postData.imageURL.includes('cloudinary.com')) {
          imageUrl = postData.imageURL;
        } else {
          // If it's a Cloudinary public ID, construct the full URL
          imageUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${postData.imageURL}`;
        }
      } else if (typeof postData.imageURL === 'object' && postData.imageURL.url) {
        // If it's an object with a url property (common in Firebase)
        imageUrl = postData.imageURL.url;
      } else if (typeof postData.imageURL === 'object' && postData.imageURL.imageURL) {
        // If it's a nested object with imageURL property
        imageUrl = postData.imageURL.imageURL;
      }
    } else if (postData.image) {
      // Fallback to image field
      if (typeof postData.image === 'string') {
        if (postData.image.includes('cloudinary.com')) {
          imageUrl = postData.image;
        } else {
          imageUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${postData.image}`;
        }
      }
    }

    // Convert Firebase Timestamp to plain JavaScript object or ISO string
    let date = "";
    if (postData.timestamp) {
      if (postData.timestamp.toDate) {
        // It's a Firebase Timestamp object
        date = postData.timestamp.toDate().toISOString();
      } else if (typeof postData.timestamp === 'object' && postData.timestamp.seconds !== undefined) {
        // It's already a plain object with seconds/nanoseconds
        const dateObj = new Date(postData.timestamp.seconds * 1000 + postData.timestamp.nanoseconds / 1000000);
        date = dateObj.toISOString();
      } else {
        // It's already a plain value (string, number, etc.)
        date = postData.timestamp;
      }
    }

    return {
      slug,
      meta: {
        title: postData.title || "Untitled Post",
        date: date,
        category: postData.categoryId || postData.category || "General",
        image: imageUrl,
        description: postData.description || ""
      },
      content: postData.blogContent || postData.content || ""
    };
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}


const pressDirectory = path.join(process.cwd(), 'src/content/press-releases');

export async function getPressReleases() {
  if (!fs.existsSync(pressDirectory)) return [];
  const fileNames = fs.readdirSync(pressDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(pressDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, ...data };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 3. EK SINGLE PRESS RELEASE LAANE KE LIYE (Detail Page ke liye)
export async function getPressReleaseBySlug(slug) {
  // File ka naam slug se match karo
  const fullPath = path.join(pressDirectory, `${slug}.mdx`);
  
  // Agar file nahi mili to null return karo
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data,    
    content,       
  };
}