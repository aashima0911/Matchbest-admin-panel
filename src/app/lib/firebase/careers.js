import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const getAllCareers = async () => {
    try {
        const q = query(collection(db, "careers"), orderBy("timestamp", "desc"));
        const snaps = await getDocs(q);
        return snaps.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching careers", error);
        throw new Error("Failed to fetch careers.");
    }
};

export const getCareerBySlug = async (slug) => {
    try {
        const q = query(collection(db, "careers"), where("jobSlug", "==", slug));
        const snaps = await getDocs(q);
        if (snaps.empty) return null;
        return { id: snaps.docs[0].id, ...snaps.docs[0].data() };
    } catch (error) {
        console.error("Error fetching career", error);
        throw new Error("Failed to fetch career.");
    }
}; 