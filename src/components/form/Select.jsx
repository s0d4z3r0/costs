const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className="select_control">
      <label htmlFor={name}>
        <span>{text}: </span>
        <select name={name} id={name} onChange={handleOnChange} value={value}>
          <option>Selecione uma opção</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
