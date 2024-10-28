import lang from "../enums/lang";
import { json } from "../static/lang";

/*
    ATTENTION!!!

        Is a must that the keys form 'variables' parameter match JSON message parameters!

        Example: "'%name%' has a limit of %maxLength% characters.",

        This is a string from EN.json. The variables object must have the keys 'name' and 'maxLength' to match it later
        in its respective function. If the keys of 'variables' does not match the message parameters, then the message
        displayed will has the base message. 
        
        For example: 
            - With 'variables' = { name: 'firstname'maxLength: 3 }. 
            - The message displayed will be: '%name%' has a limit of 3 characters.

        A valid 'variables' could be: { name: 'firstname', maxLength: 3 }. Then the message displayed will be:
            - 'firstname' has a limit of 3 characters.
*/

const translate = (language, routes, variables) => { 
    // Set the keys with the format expected for the JSON message.
    const values = Object.keys(variables).map((key) => ({ key, keyFormatted: `%${key}%`}))

    // Set the JSON path.
    const path = routes.reduce(
        (acc, curr) => acc[curr],
        json[language],
    );

    // Replace the message parameters.
    const result = values.reduce(
        (acc, { key, keyFormatted }) => acc.replace(keyFormatted, variables[key]),
        path,
    );

    return result;
};

const translateFieldStatus = (fieldName, fieldStatusMessage, variables, language=lang.EN) => {
    return translate(language, ['status', 'fields', fieldName, fieldStatusMessage], variables);
};

const translateGenericStatus = (genericState, variables, language=lang.EN) => {
    return translate(language, ['status', 'generic', genericState], variables);
};

export {
    translateFieldStatus,
    translateGenericStatus,
};
