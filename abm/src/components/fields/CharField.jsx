import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";

const CharField = ({ hook, status, settings: { maxLength, minLength } }) => {
    useEffect(() => {
        if (maxLength && hook.value.length > maxLength) {
            status(statusType.ERROR, 'maxLength', { names: hook.name, maxLength });
        } else if (minLength && hook.value.length < minLength) {
            status(statusType.ERROR, 'minLength', { name: hook.name, minLength });
        } else {
            status(statusType.OK);
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
