import { useEffect } from "react";
import { PasswordFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import strings from "../../functions/strings";

const checkPassword = (pass, constraints) => {
    const { minLength, alphaNumeric, signs } = constraints;

    if (minLength && pass.length < minLength) {
        return [statusType.ERROR, `password must be at least ${minLength} characters long`];
    }
    
    if (alphaNumeric && (strings.isAlpha(pass) || strings.isNumeric(pass))) {
        return [statusType.ERROR, `password must has letters and numbers`];    
    }

    if (signs && strings.isAlphaNumeric(pass)) {
        return [statusType.ERROR, `password must has sings`];
    }

    return [statusType.OK, `Password is OK!`];    
};

const PasswordField = ({ hook, status, settings }) => {
    useEffect(() => {
        status(...checkPassword(hook.value, settings));
    }, [hook.name, hook.value, settings, status]);

    return (
        <>
            <label>{hook.name}</label>
            <input type="password" {...hook} />
        </>
    );
};

PasswordField.propTypes = PasswordFieldProps;

export default PasswordField;
