import StyledInput, { Container } from "../../styles/Input.styles";
import { InputCustomProps } from "../PropTypes";
import LabelCustom from "./LabelCustom";

const InputCustom = ({ label, ...props }) => {
    return (
        <Container>
            <LabelCustom {...label}/>
            <StyledInput {...props} />
        </Container>
    );
};

InputCustom.propTypes = InputCustomProps;

export default InputCustom;
