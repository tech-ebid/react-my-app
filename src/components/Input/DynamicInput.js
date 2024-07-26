import React, { useState } from 'react';

function DynamicInput({ label, type = "text", initialValue = "", validateInput }) {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (validateInput) {
      setIsValid(validateInput(newValue));
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Membuat kelas dinamis
  const inputClass = `input-field ${isFocused ? 'focused' : ''} ${isValid ? 'valid' : 'invalid'}`;

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputClass}
      />
      {!isValid && <span className="error-message">Input tidak valid</span>}
    </div>
  );
}

export default DynamicInput;