import StyledTextArea from "../../styles/TextArea.styles";
import { TextAreaCustomProps } from "../PropTypes";

const TextAreaCustom = ({ ...props }) => {
    return (<StyledTextArea {...props} />);
};

TextAreaCustom.propTypes = TextAreaCustomProps;

export default TextAreaCustom;
