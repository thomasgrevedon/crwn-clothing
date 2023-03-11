import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input required type='text' {...otherProps} className='form-input'></input>
      {label && <label className={`${otherProps.value.length ? "shrink " : ""} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
