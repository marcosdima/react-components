import { useEffect } from "react";
import { BasicShape } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";

const ImageUrlField = ({ hook, status }) => {
    useEffect(() => {
        status(statusType.OK);
    }, [hook.name, status]);

    return (
        <>
            <label>{hook.name}</label>
            <InputCustom {...hook} />
            <img src={hook.value} alt="Not Found" />
        </>
    );
};

ImageUrlField.propTypes = BasicShape;

export default ImageUrlField;
