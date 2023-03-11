import { useState } from "react";
import { createNewUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input required type='text' name='displayName' value={displayName} onChange={updateForms}></input>
        <label>email</label>
        <input required type='email' name='email' value={email} onChange={updateForms}></input>
        <label>password</label>
        <input required type='password' name='password' value={password} onChange={updateForms}></input>
        <label>confirm password</label>
        <input required type='password' name='confirmPassword' value={confirmPassword} onChange={updateForms}></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormSignUp;
