import { useEffect } from "react";
import { PasswordFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import strings from "../../functions/strings";
import InputCustom from "../elements/InputCustom";

const checkPassword = (pass, constraints) => {
    const { minLength, alphaNumeric, signs } = constraints;

    if (minLength && pass.length < minLength) {
        return [statusType.ERROR, 'minLength', { minLength }];
    }
    
    if (alphaNumeric && (strings.isAlpha(pass) || strings.isNumeric(pass))) {
        return [statusType.ERROR, 'alphaNumeric'];    
    }

    if (signs && strings.isAlphaNumeric(pass)) {
        return [statusType.ERROR, 'signs'];
    }

    return [statusType.OK, `Password is OK!`];    
};

const PasswordField = ({ hook, status, settings }) => {
    useEffect(() => {
        status(...checkPassword(hook.value, settings));
    }, [hook.name, hook.value, settings, status]);

    return <InputCustom type="password" {...hook} />;
};

PasswordField.propTypes = PasswordFieldProps;

export default PasswordField;
