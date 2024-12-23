import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../utils/enums/statusType";
import TextAreaCustom from "../elements/TextAreaCustom";

const TextField = ({ hook, status, required, settings: { maxLength, minLength } }) => {
    useEffect(() => {
        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.label });
        } else if (maxLength && hook.value.length > maxLength) {
            status(statusType.ERROR, 'maxLength', { name: hook.label, maxLength });
        } else if (minLength && hook.value.length < minLength) {
            status(statusType.ERROR, 'minLength', { name: hook.label, minLength });
        } else {
            status(statusType.OK);
        }
    }, [status, hook.value, hook.label, maxLength, minLength, required]);

    return <TextAreaCustom {...hook} />;
};

TextField.propTypes = CharFieldProps;
TextField.displayName = 'TextField';

export default TextField;
