import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const authenticatePopUp = async () => {
  const { user } = await signInWithGooglePopup();
  // console.log(response);
  const documentRef = createUserDocumentFromAuth(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={authenticatePopUp}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
