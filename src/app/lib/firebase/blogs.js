import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

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
