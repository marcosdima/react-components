import { useEffect } from "react";
import { NumberFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import LabelCustom from "../elements/LabelCustom";
import InputNumberCustom from "../elements/InputNumberCustom";

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

    return (
        <>
            <LabelCustom text={hook.name} capitalFirst={true}/>
            <InputNumberCustom {...hook} />
        </>
    );
};

NumberField.propTypes = NumberFieldProps;

export default NumberField;
