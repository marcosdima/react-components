import { CharFieldProps } from "../PropTypes";

const CharField = ({ hook }) => {
    return (
        <>
            <label>{hook.name}</label>
            <input {...hook} />
        </>
    );
};

CharField.propTypes = CharFieldProps;

export default CharField;
