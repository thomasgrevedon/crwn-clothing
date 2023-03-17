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

  const authenticatePopUp = async (event) => {
    event.preventDefault();
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
    <div className='sign-in-container'>
      <h2>SIGN IN</h2>
      <span>Already have an account? sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='email' required type='email' name='email' value={email} onChange={updateForms} />
        <FormInput label='password' required type='password' name='password' value={password} onChange={updateForms} />
        <div className='buttons-container'>
          <Button>Sign In</Button>
          <Button type='button' onClick={signInWithGooglePopup} buttontype='google'>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
