import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../utils/enums/statusType";
import InputCustom from "../elements/InputCustom";

function EmailField({ hook, status, required, settings: { validDomains, countryCodes } }) {
    useEffect(() => {
        const email = hook.value;
        const [, emailDomain] = email.split('@');
        const [, end] = email.split('.com');

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.label });
        } else if (!regex.test(email)) {
            status(statusType.ERROR, 'wrongFormat', { name: hook.label });
        } else if (validDomains && (!validDomains.find((domain) => emailDomain.startsWith(domain)))) {
            status(statusType.ERROR, 'invalidDomain', { name: hook.label });
        } else if (countryCodes && end !== '' && (!countryCodes.some((code) => code === end))) {
            status(statusType.ERROR, 'invalidCountryCode', { name: hook.label, countryCode: countryCodes.join(', ') });
        } else {
            status(statusType.OK);
        }
    }, [countryCodes, hook.label, hook.value, hook.value.length, required, status, validDomains]);

    return <InputCustom {...hook} />;
};

EmailField.propTypes = CharFieldProps;
EmailField.displayName = 'EmailField';

export default EmailField;

