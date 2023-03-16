import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signTheUserIn } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./form-sign-in.styles.scss";
import Button from "../button/button.component";

const defaultFormsDetails = {
  email: "",
  password: "",
};

const FormSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormsDetails);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signTheUserIn(email, password);
      if (response) {
        console.log(response.user);
        createUserDocumentFromAuth(response.user);
      }
    } catch (err) {
      console.log("Error on sign in", err);
    }
  };

  const authenticatePopUp = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    createUserDocumentFromAuth(user);
  };

  const test = () => console.log("Heyyy");

  const updateForms = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h1>SIGN IN</h1>
      <span>Already have an account? sign in</span>
      <div className='buttons-container'>
        <form onSubmit={handleSubmit}>
          <FormInput label='email' required type='email' name='email' value={email} onChange={updateForms} />
          <FormInput label='password' required type='password' name='password' value={password} onChange={updateForms} />

          <Button name='Sign in with email' />
        </form>
        <Button onClick={test} name='Sign in with Google' type='google' />
      </div>
    </div>
  );
};

export default FormSignIn;
