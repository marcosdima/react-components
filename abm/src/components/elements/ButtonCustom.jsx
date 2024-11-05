
import StyledButton from '../../styles/Button.styles';
import { ButtonCustomProps } from '../PropTypes';

const ButtonCustom = ({ text, onClick, type = 'button', disabled = false }) => {
    return (
        <StyledButton onClick={onClick} type={type} disabled={disabled}>
            {text}
        </StyledButton>
    );
};

ButtonCustom.propTypes = ButtonCustomProps;

export default  ButtonCustom;
