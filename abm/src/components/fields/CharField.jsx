import { useEffect, useState } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../utils/enums/statusType";
import InputCustom from "../elements/InputCustom";
import inputType from "../../utils/enums/inputType";

const CharField = ({ hook, status, required, settings: { maxLength, minLength, onlyLetters } }) => {
    const [condition, setCondition] = useState(inputType.ANY);

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

    // Sets condition if onlyLetters setting is provided.
    useEffect(() => {
        if (onlyLetters) {
            setCondition(inputType.LETTERS);
        } else {
            setCondition(inputType.ANY);
        }
    }, [onlyLetters]);

    return <InputCustom condition={condition} {...hook} />;
};

CharField.propTypes = CharFieldProps;
CharField.displayName = 'CharField';

export default CharField;
