const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="input_control">
      <label htmlFor={name}>
        <span>{text}: </span>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
