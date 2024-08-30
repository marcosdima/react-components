import { useEffect } from "react";
import { BasicShape } from "../PropTypes";
import statusType from "../../enums/statusType";

const ImageUrlField = ({ hook, status }) => {
    useEffect(() => {
        status(statusType.OK);
    }, [hook.name, status]);

    return (
        <>
            <label>{hook.name}</label>
            <input {...hook} />
            <img src={hook.value} alt="Not Found" />
        </>
    );
};

ImageUrlField.propTypes = BasicShape;

export default ImageUrlField;
