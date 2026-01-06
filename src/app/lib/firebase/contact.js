import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";

export const submitContact = async (data) => {
  await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
