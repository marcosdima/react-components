import { useEffect } from "react";
import { NumberFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";

const NumberField = ({ hook, status, settings: { max, min } }) => {
    useEffect(() => {
        const num = parseInt(hook.value);
        if (max && num > max) {
            status(statusType.ERROR, `'${hook.name}' must be lower than ${max+1}.`);
        } else if (min && num < min) {
            status(statusType.ERROR, `'${hook.name}' must be higher than ${min-1}.`);
        } else {
            status(statusType.OK, `'${hook.name}' it's OK!`);
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
