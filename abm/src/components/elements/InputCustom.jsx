import inputType from "../../utils/enums/inputType";
import StyledInput, { Container } from "../../styles/Input.styles";
import { InputCustomProps } from "../PropTypes";
import LabelCustom from "./LabelCustom";

const handleKeyDown = (event, condition) => {
    if (!event) {
        return;
    }

    if (condition === inputType.NUMBERS) {
        if (
            event.key !== 'Backspace' &&
            event.key !== 'Delete' &&
            (event.key < '0' || event.key > '9')
        ) {
            event.preventDefault();
        }
    } else if (condition === inputType.LETTERS) {
        if (
            event.key !== 'Backspace' &&
            event.key !== 'Delete' &&
            (event.key < 'a' || event.key > 'z') &&
            (event.key < 'A' || event.key > 'Z')
        ) {
            event.preventDefault();
        }
    }
};

const InputCustom = ({ label, condition=inputType.ANY, ...props }) => {
    return (
        <Container>
            <LabelCustom {...label}/>
            <StyledInput onKeyDown={(event) => handleKeyDown(event, condition)}  {...props} />
        </Container>
    );
};

InputCustom.propTypes = InputCustomProps;

export default InputCustom;
