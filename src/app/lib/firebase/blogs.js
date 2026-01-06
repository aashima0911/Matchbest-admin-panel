import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase.js";

export const getAllBlogs = async () => {
    try {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const snaps = await getDocs(q);
        return snaps.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching blogs", error);
        throw new Error("Failed to fetch blogs.");
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const blogs = await getAllBlogs();
        return blogs.find(blog => blog.slug === slug || blog.id === slug);
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return null;
    }
};
