import { BaseButton, GoogleSignIn, Inverted } from "./button.styles.jsx";

export const BUTTON_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonComponent = (buttontype = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignIn,
    [BUTTON_TYPES.inverted]: Inverted,
  }[buttontype]);

const Button = ({ children, name, ...otherProps }) => {
  const ButtonComponent = getButtonComponent(otherProps.buttontype);
  return <ButtonComponent {...otherProps}>{children}</ButtonComponent>;
};

export default Button;
