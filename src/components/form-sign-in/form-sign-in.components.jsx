import { useState } from "react";
import { signInWithGooglePopup, signTheUserIn } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./form-sign-in.styles.jsx";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { ButtonContainer, SignInContainer } from "./form-sign-in.styles.jsx";
import { useDispatch } from "react-redux";
import { signingInWitgGoogle, signingInWithEmailAndPassword, signInWithEmail } from "../../store/user/user.action";

const defaultFormsDetails = {
  email: "",
  password: "",
};

const FormSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormsDetails);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = (_) => setFormFields(defaultFormsDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signingInWithEmailAndPassword(email, password));
    resetFormFields();
  };

  const authenticatePopUp = (event) => {
    event.preventDefault();
    dispatch(signingInWitgGoogle());
  };

  const updateForms = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>SIGN IN</h2>
      <span>Already have an account? sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='email' required type='email' name='email' value={email} onChange={updateForms} />
        <FormInput label='password' required type='password' name='password' value={password} onChange={updateForms} />
        <ButtonContainer>
          <Button>Sign In</Button>
          <Button type='button' onClick={authenticatePopUp} buttontype={BUTTON_TYPES.google}>
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default FormSignIn;
