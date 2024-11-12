import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";

function EmailField({ hook, status, required, settings: { validDomains } }) {
    useEffect(() => {
        const email = hook.value;
        const [, emailDomain] = email.split('@');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else if (!regex.test(email)) {
            status(statusType.ERROR, 'wrongFormat', { name: hook.name });
        } else if (validDomains && !validDomains.find((domain) => emailDomain.startsWith(domain))) {
            status(statusType.ERROR, 'invalidDomain', { name: hook.name });
        } else {
            status(statusType.OK);
        }
    }, [hook.name, hook.value, hook.value.length, required, status, validDomains]);

    return <InputCustom {...hook} />;
};

EmailField.propTypes = CharFieldProps;
EmailField.displayName = 'EmailField';

export default EmailField;

