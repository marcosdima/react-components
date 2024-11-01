import CharField from "./CharField";
import EmailField from "./EmailField";
import NumberField from "./NumberField";
import fieldType from "../../enums/fieldType";
import ImageUrlField from "./ImageUrlField";
import PasswordField from "./PasswordField";
import SelectorField from "./SelectorField";

const fields = {
    [fieldType.CHAR]: CharField,
    [fieldType.EMAIL]: EmailField,
    [fieldType.NUMBER]: NumberField,
    [fieldType.IMAGE]: ImageUrlField,
    [fieldType.PASSWORD]: PasswordField,
    [fieldType.SELECTOR]: SelectorField,
};

export default fields;
