import FormSignIn from "../../form-sign-in/form-sign-in.components";
import FormSignUp from "../../form-sign-up/form-sign-up.components";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <FormSignIn />
      <FormSignUp />
    </div>
  );
};

export default Authentication;
