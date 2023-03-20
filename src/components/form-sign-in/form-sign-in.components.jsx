import { useState } from "react";
import { signInWithGooglePopup, signTheUserIn } from "../../utils/firebase/firebase.utils";
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

  const resetFormFields = (_) => setFormFields(defaultFormsDetails);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signTheUserIn(email, password);
    } catch (err) {
      console.log("Error on sign in", err);
    } finally {
      resetFormFields();
    }
  };

  const authenticatePopUp = async (event) => {
    event.preventDefault();
    await signInWithGooglePopup();
  };

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
          <Button type='button' onClick={authenticatePopUp} buttontype='google'>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
