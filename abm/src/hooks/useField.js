import { useState } from "react";

const useField = (name, placeholder) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const value = event?.target?.value ?? event; // If event has no 'target' attribute, then means that the value was provided directly.
    return setValue(`${value}`);
  };

  return {
    name,
    value,
    onChange,
    placeholder,
  };
};

export default useField;
