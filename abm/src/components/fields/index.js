import CharField from "./CharField";
import { fieldType } from "../../enums";

const fields = {
    [fieldType.CHAR]: CharField,
};

export default fields;
