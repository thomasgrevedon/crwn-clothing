import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormSignUp from "../../form-sign-up/form-sign-up.components";

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
      <FormSignUp />
    </div>
  );
};

export default SignIn;
