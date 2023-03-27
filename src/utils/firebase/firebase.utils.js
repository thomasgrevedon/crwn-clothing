import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUwjl5y1ES_UPn8RpSl4TWnB6W5j5Lz60",
  authDomain: "crwn-clothing-db-f2cd9.firebaseapp.com",
  projectId: "crwn-clothing-db-f2cd9",
  storageBucket: "crwn-clothing-db-f2cd9.appspot.com",
  messagingSenderId: "505910871738",
  appId: "1:505910871738:web:7b9906e5d2aeac4a572483",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithFirebaseRedirect = () => signInWithRedirect(auth, provider);

const db = getFirestore();

export const adCollectionAndDocument = async (collectionKey, dataToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  dataToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((docSnapShot) => docSnapShot.data());
  
};


export const createUserDocumentFromAuth = async (user, additionalInformation) => {
  const documentRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(documentRef);

  if (!snapshot.exists()) {
    // first time registry
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(documentRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (err) {
      console.log("Something went wrong when registring the user" + err);
    }
  }

  return documentRef;
};

export const createNewUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signTheUserIn = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutFromFireBase = async () => await signOut(auth);

export const trackAuthStateChange = (callback) => onAuthStateChanged(auth, callback);