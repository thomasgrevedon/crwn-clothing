import "./button.styles.scss";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ name, ...otherProps }) => {
  return <button className={`${BUTTON_TYPES[otherProps.type]} button-container`}>{name}</button>;
};

export default Button;
