import "./form-input.styles.jsx";
import { Group, FormInputStyled, FormInputLabel } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyled required type='text' {...otherProps}></FormInputStyled>
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
