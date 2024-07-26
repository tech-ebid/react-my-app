import React from 'react';
import DynamicInput from '../Input/DynamicInput';


function Form() {
  const validateEmail = (email) => {
    // Validasi email sederhana
    return email.includes('@');
  };

  return (
    <form>
      <DynamicInput 
        label="Nama" 
        type="text" 
      />
      <DynamicInput 
        label="Email" 
        type="email" 
        validateInput={validateEmail}
      />
    </form>
  );
}

export default Form;