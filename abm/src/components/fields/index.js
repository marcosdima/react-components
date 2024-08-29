import CharField from "./CharField";
import EmailField from "./EmailField";
import NumberField from "./NumberField";
import fieldType from "../../enums/fieldType";

const fields = {
    [fieldType.CHAR]: CharField,
    [fieldType.EMAIL]: EmailField,
    [fieldType.NUMBER]: NumberField,
};

export default fields;
