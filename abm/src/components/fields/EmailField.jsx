import { CharFieldProps } from "../PropTypes";

const EmailField = ({ hook }) => {
    return (
        <>
            <label>{hook.name}</label>
            <input {...hook} />
        </>
    );
};

EmailField.propTypes = CharFieldProps;

export default EmailField;

