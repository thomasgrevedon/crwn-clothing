import { useState, useContext } from "react";
import { createNewUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./form-sign-up.styles.jsx";
import Button, { BUTTON_TYPES } from "../button/button.component";

import { UserContext } from "../contexts/user.context";
import { SignUpContainer } from "./form-sign-up.styles.jsx";

const defaultFormsDetails = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormSignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormsDetails);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = (_) => setFormFields(defaultFormsDetails);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    const createdUser = await createNewUserWithEmailAndPassword(email, password);
    if (createdUser) {
      setCurrentUser(UserContext);
      try {
        const documentRef = await createUserDocumentFromAuth(createdUser.user, { displayName });
        setFormFields(defaultFormsDetails);
      } catch (err) {
        console.log("Error on creating user", err);
      } finally {
        resetFormFields();
      }
    }
  };

  const updateForms = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>SIGN UP</h2>
      <span>Don't have an account? sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display name' required type='text' name='displayName' value={displayName} onChange={updateForms} />
        <FormInput label='email' required type='email' name='email' value={email} onChange={updateForms} />
        <FormInput label='password' required type='password' name='password' value={password} onChange={updateForms} />
        <FormInput label='confirm password' required type='password' name='confirmPassword' value={confirmPassword} onChange={updateForms} />
        <Button>Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default FormSignUp;
