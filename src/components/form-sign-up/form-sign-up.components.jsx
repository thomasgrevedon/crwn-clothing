import { useState } from "react";
import { createNewUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./form-sign-up.styles.scss";
import Button from "../button/button.component";

const defaultFormsDetails = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormSignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormsDetails);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    const createdUser = await createNewUserWithEmailAndPassword(email, password);
    if (createdUser) {
      try {
        const documentRef = await createUserDocumentFromAuth(createdUser.user, { displayName });
        setFormFields(defaultFormsDetails);
      } catch (err) {
        console.log("Error on creating user", err);
      }
    }
  };

  const updateForms = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Sign up</h2>
      <span>Don't have an account? sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display name' required type='text' name='displayName' value={displayName} onChange={updateForms} />
        <FormInput label='email' required type='email' name='email' value={email} onChange={updateForms} />
        <FormInput label='password' required type='password' name='password' value={password} onChange={updateForms} />
        <FormInput label='confirm password' required type='password' name='confirmPassword' value={confirmPassword} onChange={updateForms} />
        <Button name='submit' />
      </form>
    </div>
  );
};

export default FormSignUp;
