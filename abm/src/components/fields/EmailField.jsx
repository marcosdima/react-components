import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";

const EmailField = ({ hook, status, settings: { validDomains } }) => {
    useEffect(() => {
        const email = hook.value;
        const [, emailDomain] = email.split('@');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regex.test(email)) {
            status(statusType.ERROR, `'${hook.name}' does not have a valid format.`);
        } else if (validDomains && !validDomains.find((domain) => emailDomain.startsWith(domain))) {
            status(statusType.ERROR, `'${hook.name}' does not have a valid domain.`);
        } else {
            status(statusType.OK, `'${hook.name}' it's OK!`);
        }
    }, [hook.name, hook.value, hook.value.length, status, validDomains]);

    return (
        <>
            <label>{hook.name}</label>
            <input {...hook} />
        </>
    );
};

EmailField.propTypes = CharFieldProps;

export default EmailField;

