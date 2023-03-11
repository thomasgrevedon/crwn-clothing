import { auth, signInWithFirebaseRedirect, signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const authenticatePopUp = async () => {
  const { user } = await signInWithGooglePopup();
  // console.log(response);
  const documentRef = createUserDocumentFromAuth(user);
};

const SignIn = () => {
  useEffect(() => {
    const checkLogIn = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const documentRef = createUserDocumentFromAuth(response.user);
      }
    };
    checkLogIn();
  }, []);

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={authenticatePopUp}>Sign in with Google</button>
      <button onClick={signInWithFirebaseRedirect}>Sign in with redirect</button>
    </div>
  );
};

export default SignIn;
