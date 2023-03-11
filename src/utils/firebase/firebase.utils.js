import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const createUserDocumentFromAuth = async (user) => {
  const documentRef = doc(db, "users", user.uid);
  console.log(documentRef);
  const snapshot = await getDoc(documentRef);
  console.log(snapshot.exists());

  if (!snapshot.exists()) {
    // first time registry
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(documentRef, { displayName, email, createdAt });
    } catch (err) {
      console.log("Something went wrong when registring the user" + err);
    }
  }

  return documentRef;
};
