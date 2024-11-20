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
            event.key !== 'Delete' &&
            !/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]$/.test(event.key)
        ) {
            event.preventDefault();
        }
    }
};

const InputCustom = ({ label, condition=inputType.ANY, ...props }) => {
    return (
        <Container>
            <LabelCustom text={label} />
            <StyledInput onKeyDown={(event) => handleKeyDown(event, condition)}  {...props} />
        </Container>
    );
};

InputCustom.propTypes = InputCustomProps;

export default InputCustom;
