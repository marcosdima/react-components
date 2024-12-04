import { Container } from "../../styles/Input.styles";
import StyledTextArea from "../../styles/TextArea.styles";
import { TextAreaCustomProps } from "../PropTypes";
import LabelCustom from "./LabelCustom";

// TODO: Fix this!
// eslint-disable-next-line no-unused-vars
const TextAreaCustom = ({ label, defaultValue, ...props }) => {
    return (
        <Container>
            <LabelCustom text={label}/>
            <StyledTextArea {...props} />
        </Container>
    );
};

TextAreaCustom.propTypes = TextAreaCustomProps;

export default TextAreaCustom;
