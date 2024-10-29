import StyledLabel from "../../styles/StyledLabel.styles";
import { LabelCustomProps } from "../PropTypes";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const LabelCustom = ({ capitalFirst, text, ...props }) => {
    const label = capitalFirst 
        ? capitalizeFirstLetter(text)
        : text;

    return (
        <StyledLabel {...props}>
            {label}
        </StyledLabel>
    );
};

LabelCustom.propTypes = LabelCustomProps;

export default LabelCustom;
