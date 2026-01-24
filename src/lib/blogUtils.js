'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Blogs folder ka raasta
const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');

// 1. SAARI POSTS LAANE KE LIYE (List Page ke liye)
export async function getBlogPosts() {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. EK SINGLE POST LAANE KE LIYE (Detail Page ke liye)
export async function getPostBySlug(slug) {
  // File ka naam slug se match karo
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  
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