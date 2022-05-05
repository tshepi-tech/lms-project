// NPM packages
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { firestore } from "./firebase";

//Methods

// --Create
export async function createDocumentWithId(path, id, data) {
  let payload = { data: undefined, error: false };

  try {
    const documentReference = doc(firestore, path, id);
    await setDoc(documentReference, data);

    payload = { data: `Document with id ${id} created!`, error: false };
  } catch (error) {
    payload = { data: error, error: true };
  }

  return payload;
}

export async function addDocument(path, data) {
  const documentPath = collection(firestore, path);
  const document = await addDoc(documentPath, data);

  return document.id;
}

//--read

export async function getDocument(path, id) {
  const documentPath = doc(firestore, path, id);
  const document = await getDoc(documentPath);
  console.log(document.data);
  return document.data();
}

export async function getCollection(path) {
  const collectionPath = collection(firestore, path); // firebase-fe2/firestore/drivers
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}

// -- Delete
export async function deleteDocument(path, id) {
  const documentPath = doc(firestore, path, id);

  await deleteDoc(documentPath);
  console.log("Deleted document successfully", id);
}
