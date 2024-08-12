import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  orderBy, getDoc, where
} from "firebase/firestore";
import { auth, db, storage } from "./firebase_conf";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const getAllDoc = async (collectionName) => {
  const q = query(collection(db, collectionName), orderBy("index", "asc"));
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), docId: doc.id });
  });
  return docs;
};

export const getAllDoc2 = async (collectionName, uid) => {
  let q;

  if (uid) {
    // uid가 제공된 경우 해당 uid와 일치하는 문서만 쿼리
    q = query(collection(db, collectionName), where("uid", "==", uid));
  } else {
    // uid가 제공되지 않은 경우 전체 문서를 쿼리
    q = query(collection(db, collectionName));
  }
  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), docId: doc.id });
  });
  return docs;
};

export const addDocument = async (collectionName, data) => {
  const collectionRef = collection(db, collectionName);

  try {
    // 중복 UID 검사
    if (data.uid) {
      const q = query(collectionRef, where("uid", "==", data.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error(`UID ${data.uid} already exists in the collection.`);
      }
    }

    // 문서 추가
    const docRef = await addDoc(collectionRef, data);

    // 방금 추가된 문서의 ID
    const documentId = docRef.id;

    await new Promise(resolve => setTimeout(resolve, 200));

    // 방금 추가된 문서 조회
    const addedDocRef = doc(collectionRef, documentId);
    const docSnap = await getDoc(addedDocRef);

    if (!docSnap.exists()) {
      console.warn(`Document with ID ${documentId} does not exist.`);
      return null; // 문서가 존재하지 않는 경우
    }

    // 문서가 존재하는 경우, ID 반환
    return documentId;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // 오류를 상위로 전달
  }
};

export const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, data);
};

export const signAuth = async () => {
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
    signAuth();
  }
});

export const uploadFile = async (dir, file) => {
  console.log(file);
  const storageRef = ref(storage, dir + "/" + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};
