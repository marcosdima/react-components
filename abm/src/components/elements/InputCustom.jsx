import inputType from "../../utils/enums/inputType";
import StyledInput, { Container } from "../../styles/Input.styles";
import { InputCustomProps } from "../PropTypes";
import LabelCustom from "./LabelCustom";

const handleKeyDown = (event, condition) => {
    if (!event) {
        return;
    }

    if (condition === inputType.NUMBERS) {
        const isNumberKey = event.key >= '0' && event.key <= '9';
        const isControlKey = ['Backspace', 'Delete'].includes(event.key);
    
        if (!isNumberKey && !isControlKey) {
            event.preventDefault();
        }
    } else if (condition === inputType.LETTERS) {
        const isNavigationKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace'].includes(event.key);
        const isLetterKey = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]$/.test(event.key);

        if (!isNavigationKey && !isLetterKey) {
            event.preventDefault();
        }
    }
};

// eslint-disable-next-line no-unused-vars
const InputCustom = ({ label, condition=inputType.ANY, defaultValue, ...props }) => {
    return (
        <Container>
            <LabelCustom text={label} />
            <StyledInput onKeyDown={(event) => handleKeyDown(event, condition)}  {...props} />
        </Container>
    );
};

InputCustom.propTypes = InputCustomProps;

export default InputCustom;
