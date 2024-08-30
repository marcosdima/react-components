import { useEffect } from "react";
import { BasicShape } from "../PropTypes";
import statusType from "../../enums/statusType";

const ImageUrlField = ({ hook, status }) => {
    useEffect(() => {
        status(statusType.OK, `'${hook.name}' it's OK!`);
    }, [hook.name, status]);

    return (
        <>
            <div>
                <label>{hook.name}</label>
                <input {...hook} />
            </div>
            <img src={hook.value} alt="Not Found" />
        </>
    );
};

ImageUrlField.propTypes = BasicShape;

export default ImageUrlField;
