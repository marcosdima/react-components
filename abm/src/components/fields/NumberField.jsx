import { useEffect } from "react";
import { NumberFieldProps } from "../PropTypes";
import statusType from "../../utils/enums/statusType";
import InputCustom from "../elements/InputCustom";
import inputType from "../../utils/enums/inputType";

const NumberField = ({ hook, status, required, settings: { minValue, maxValue } }) => {
    useEffect(() => {
        const num = parseInt(hook.value);
        const name = hook.label;

        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name });
        } else if (maxValue && num > maxValue) {
            status(statusType.ERROR, 'max', { name, max: maxValue });
        } else if (minValue && num < minValue) {
            status(statusType.ERROR, 'min', { name, min: minValue });
        } else {
            status(statusType.OK);
        }
    }, [hook.label, hook.value, maxValue, minValue, required, status]);

    return <InputCustom condition={inputType.NUMBERS} {...hook} />;
};

NumberField.propTypes = NumberFieldProps;
NumberField.displayName = 'NumberField';

export default NumberField;
