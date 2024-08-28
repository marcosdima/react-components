import CharField from "./CharField";
import fieldType from "../../enums/fieldType";

const fields = {
    [fieldType.CHAR]: CharField,
};

export default fields;
