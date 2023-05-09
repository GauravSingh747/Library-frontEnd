import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  horizontal,
  placeholder,
  labelText,
}) => {
  return (
    <div className="form-row">
      {!horizontal && (
        <label htmlFor={name} className="form-label">
          {/* {name || labelText} */}
          {labelText || name}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
