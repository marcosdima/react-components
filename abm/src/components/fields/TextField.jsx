import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import TextAreaCustom from "../elements/TextAreaCustom";

const TextField = ({ hook, status, required, settings: { maxLength, minLength } }) => {
    useEffect(() => {
        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else if (maxLength && hook.value.length > maxLength) {
            status(statusType.ERROR, 'maxLength', { name: hook.name, maxLength });
        } else if (minLength && hook.value.length < minLength) {
            status(statusType.ERROR, 'minLength', { name: hook.name, minLength });
        } else {
            status(statusType.OK);
        }
    }, [status, hook.value, hook.name, maxLength, minLength, required]);

    return <TextAreaCustom {...hook} />;
};

TextField.propTypes = CharFieldProps;

export default TextField;
