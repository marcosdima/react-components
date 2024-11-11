import { useEffect } from "react";
import { PasswordFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import strings from "../../functions/strings";
import InputCustom from "../elements/InputCustom";

const PasswordField = ({ hook, status, required, settings: { minLength, alphaNumeric, signs } }) => {
    useEffect(() => {
        const checkPassword = (pass) => {      
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

        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else {
            status(...checkPassword(hook.value));
        }
    }, [hook.name, hook.value, required, status, minLength, alphaNumeric, signs]);

    return <InputCustom type="password" {...hook} />;
};

PasswordField.propTypes = PasswordFieldProps;

export default PasswordField;
