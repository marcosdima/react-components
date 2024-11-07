
import StyledButton from '../../styles/Button.styles';
import { ButtonCustomProps } from '../PropTypes';

const ButtonCustom = ({ children, onClick, type = 'button', disabled = false }) => {
    return (
        <StyledButton onClick={onClick} type={type} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

ButtonCustom.propTypes = ButtonCustomProps;

export default  ButtonCustom;
