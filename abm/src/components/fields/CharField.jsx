import { useEffect } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";
import LabelCustom from "../elements/LabelCustom";

const CharField = ({ hook, status, settings: { maxLength, minLength } }) => {
    useEffect(() => {
        if (maxLength && hook.value.length > maxLength) {
            status(statusType.ERROR, 'maxLength', { name: hook.name, maxLength });
        } else if (minLength && hook.value.length < minLength) {
            status(statusType.ERROR, 'minLength', { name: hook.name, minLength });
        } else {
            status(statusType.OK);
        }
    }, [status, hook.value, hook.name, maxLength, minLength]);

    return (
        <>
            <LabelCustom text={hook.name} capitalFirst={true}/>
            <InputCustom {...hook} />
        </>
    );
};

CharField.propTypes = CharFieldProps;

export default CharField;
