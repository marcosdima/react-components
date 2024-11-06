import { Container } from "../../styles/Input.styles";
import StyledTextArea from "../../styles/TextArea.styles";
import { TextAreaCustomProps } from "../PropTypes";
import LabelCustom from "./LabelCustom";

const TextAreaCustom = ({ label, ...props }) => {
    return (
        <Container>
            <LabelCustom {...label}/>
            <StyledTextArea {...props} />
        </Container>
    );
};

TextAreaCustom.propTypes = TextAreaCustomProps;

export default TextAreaCustom;
