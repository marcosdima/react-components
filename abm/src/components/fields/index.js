import CharField from "./CharField";
import EmailField from "./EmailField";
import NumberField from "./NumberField";
import fieldType from "../../utils/enums/fieldType";
import ImageUrlField from "./ImageUrlField";
import PasswordField from "./PasswordField";
import SelectorField from "./SelectorField";
import TextField from "./TextField";
import SearchLocationField from "./SearchLocationField";

const fields = {
    [fieldType.CHAR]: CharField,
    [fieldType.EMAIL]: EmailField,
    [fieldType.NUMBER]: NumberField,
    [fieldType.IMAGE]: ImageUrlField,
    [fieldType.PASSWORD]: PasswordField,
    [fieldType.SELECTOR]: SelectorField,
    [fieldType.TEXT_AREA]: TextField,
    [fieldType.SEARCH_LOCATION]: SearchLocationField,
};

export default fields;
