import StyledInput from "../../styles/Input.styles";
import { InputCustomProps } from "../PropTypes";

const InputCustom = ({ ...props }) => {
    return (<StyledInput {...props}/>);
};

InputCustom.propTypes = InputCustomProps;

export default InputCustom;
