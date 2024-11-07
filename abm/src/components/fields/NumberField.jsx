import { useEffect } from "react";
import { NumberFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputNumberCustom from "../elements/InputNumberCustom";

const NumberField = ({ hook, status, required, settings: { max, min } }) => {
    useEffect(() => {
        const num = parseInt(hook.value);
        const name = hook.name;

        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else if (max && num > max) {
            status(statusType.ERROR, 'max', { name, max: max });
        } else if (min && num < min) {
            status(statusType.ERROR, 'min', { name, min: min });
        } else {
            status(statusType.OK);
        }
    }, [hook.name, hook.value, max, min, required, status]);

    return <InputNumberCustom {...hook} />;
};

NumberField.propTypes = NumberFieldProps;

export default NumberField;
