import StyledLabel from "../../styles/Label.styles";
import { LabelCustomProps } from "../PropTypes";

const LabelCustom = ({ text, ...props }) => {
    return (
        <StyledLabel {...props}>
            {text}
        </StyledLabel>
    );
};

LabelCustom.propTypes = LabelCustomProps;

export default LabelCustom;
