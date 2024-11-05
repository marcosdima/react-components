import InputCustom from "../elements/InputCustom";

const InputNumberCustom = ({ ...props }) => {
    const handleKeyDown = (event) => {
        if (
            event.key !== 'Backspace' &&
            event.key !== 'Delete' &&
            (event.key < '0' || event.key > '9')
        ) {
            event.preventDefault();
        }
    };

    return (<InputCustom onKeyDown={handleKeyDown} {...props} />);
};

export default InputNumberCustom;
