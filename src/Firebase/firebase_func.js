import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  orderBy, getDoc, where, setDoc
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
  console.log("uid", uid)

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
        // UID가 이미 존재하는 경우 - 문서 업데이트
        const existingDoc = querySnapshot.docs[0];
        await setDoc(existingDoc.ref, data, { merge: true }); // 기존 문서에 데이터를 병합하여 업데이트
        return existingDoc.id; // 업데이트된 문서의 ID 반환
      }
    }

    // UID가 존재하지 않거나, 새로운 문서 추가
    const newDocRef = doc(collectionRef);
    await setDoc(newDocRef, data);

    return newDocRef.id; // 새로 추가된 문서의 ID 반환
  } catch (error) {
    console.error("Error adding or updating document: ", error);
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

export const reauthenticateAnonymously = async () => {
  try {
    await signInAnonymously(auth);
    console.log("Reauthenticated anonymously");
  } catch (error) {
    console.error("Error reauthenticating anonymously:", error);
    throw error;
  }
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
  const storageRef = ref(storage, dir + "/" + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};
