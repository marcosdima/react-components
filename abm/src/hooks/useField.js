import { useState } from "react";

const useField = (name, placeholder, label={ capitalFirst: true }) => {
  const [value, setValue] = useState('');

  label.text = name;

  const onChange = (event) => {
    const value = event?.target?.value ?? event; // If event has no 'target' attribute, then means that the value was provided directly.
    return setValue(`${value}`);
  };

  return {
    name,
    value,
    onChange,
    placeholder,
    label,
  };
};

export default useField;
