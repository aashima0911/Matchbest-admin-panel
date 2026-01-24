import { getPostBySlug } from "../../lib/blogUtils";
import { getBlogPosts } from '../../lib/blogUtils';
import BlogsClient from "../../components/BlogsClient";

// === MOCK DATA ===
// const blogPosts = [
//   {
//     id: 1,
//     title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
//     categories: ["News"],
//     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 2,
//     title: "The Best AI Chatbots for Customer Service",
//     categories: ["Tech", "Learn"],
//     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 3,
//     title: "Leading Healthcare Software Development Company in India",
//     categories: ["Learn"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 4,
//     title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
//     categories: ["News"],
//     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 5,
//     title: "The Best AI Chatbots for Customer Service",
//     categories: ["Tech"],
//     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 6,
//     title: "Leading Healthcare Software Development Company in India",
//     categories: ["News", "Learn"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 7,
//     title: "The Best AI Chatbots for Customer Service",
//     categories: ["Inspiration"],
//     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 8,
//     title: "Leading Healthcare Software Development Company in India",
//     categories: ["Learn"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 9,
//     title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
//     categories: ["News"],
//     image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 10,
//     title: "The Best AI Chatbots for Customer Service",
//     categories: ["Tech", "Inspiration"],
//     image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 11,
//     title: "Leading Healthcare Software Development Company in India",
//     categories: ["News"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
//     author: "Varsha Mishra",
//     date: "12 Jan 2026",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   }
// ];

const filters = ["All","Learn", "Tech", "News"];

export default async function BlogsPage() {
    const blogs = await getBlogPosts();
  console.log("BLOGS FROM SERVER", blogs);

  return <BlogsClient blogs={blogs} />;
 
}

