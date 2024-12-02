import { useState } from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const useField = (name, placeholder, label, defaultValue='') => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    const value = event?.target?.value ?? event; // If event has no 'target' attribute, then means that the value was provided directly.
    return setValue(`${value}`);
  };

  return {
    name,
    value,
    onChange,
    placeholder,
    label: label ?? capitalizeFirstLetter(name),
  };
};

export default useField;
