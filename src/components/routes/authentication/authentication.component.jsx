import FormSignIn from "../../form-sign-in/form-sign-in.components";
import FormSignUp from "../../form-sign-up/form-sign-up.components";
import "./authentication.styles.jsx";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <FormSignIn />
      <FormSignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
