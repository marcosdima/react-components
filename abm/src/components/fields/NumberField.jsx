import { useEffect } from "react";
import { NumberFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";

const NumberField = ({ hook, status, settings: { max, min } }) => {
    useEffect(() => {
        const num = parseInt(hook.value);
        const name = hook.name;
        if (max && num > max) {
            status(statusType.ERROR, 'max', { name, max: max });
        } else if (min && num < min) {
            status(statusType.ERROR, 'min', { name, min: min });
        } else {
            status(statusType.OK);
        }
    }, [hook.name, hook.value, max, min, status]);

    const handleKeyDown = (event) => {
        if (
            event.key !== 'Backspace' &&
            event.key !== 'Delete' &&
            (event.key < '0' || event.key > '9')
        ) {
            event.preventDefault();
        }
    };

    return (
        <>
            <label>{hook.name}</label>
            <input onKeyDown={handleKeyDown} {...hook} />
        </>
    );
};

NumberField.propTypes = NumberFieldProps;

export default NumberField;
