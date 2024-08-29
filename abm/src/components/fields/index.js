import CharField from "./CharField";
import EmailField from "./EmailField";
import fieldType from "../../enums/fieldType";

const fields = {
    [fieldType.CHAR]: CharField,
    [fieldType.EMAIL]: EmailField,
};

export default fields;
