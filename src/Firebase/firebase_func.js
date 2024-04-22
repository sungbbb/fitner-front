import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase_conf";
export const getAllDoc = async (collectionName) => {
  const q = query(collection(db, collectionName), orderBy("index", "asc"));
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), docId: doc.id });
  });
  return docs;
};

export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};
