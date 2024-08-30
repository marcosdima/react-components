const isAlphaNumeric = (string) => {
    return /^[a-zA-Z0-9]+$/.test(string);
};

const isNumeric = (string) =>  {
  return /^[0-9]+$/.test(string);
};

const isAlpha = (string) => {
    return /^[a-zA-Z]+$/.test(string);
};

export default {
    isAlpha,
    isNumeric,
    isAlphaNumeric,
};
