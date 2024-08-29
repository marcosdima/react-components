import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";

const CharField = ({ hook, status, settings: { maxLength, minLength } }) => {
    useEffect(() => {
        if (maxLength && hook.value.length > maxLength) {
            status(statusType.ERROR, `'${hook.name}' has a limit of ${maxLength} characters.`);
        } else if (minLength && hook.value.length < minLength) {
            status(statusType.ERROR, `'${hook.name}' has a minimum of ${minLength} characters.`);
        } else {
            status(statusType.OK, `'${hook.name}' it's OK!`);
        }
    }, [status, hook.value, hook.name, maxLength, minLength]);

    return (
        <>
            <label>{hook.name}</label>
            <input {...hook} />
        </>
    );
};

CharField.propTypes = CharFieldProps;

export default CharField;
