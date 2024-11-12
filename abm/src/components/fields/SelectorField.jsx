import { useEffect } from "react";
import { SelectorFieldProps } from "../PropTypes"; 
import SelectCustom from "../elements/SelectCustom";
import statusType from "../../utils/enums/statusType";

const SelectorField = ({ hook, status, required, settings: { values } }) => {
    useEffect(() => {
        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else {
            status(statusType.OK);
        }
    }, [hook.name, hook.value, required, status]);

    const { onChange, ...restHook } = hook;

    const onChangeValue = ({ value }) => {
        onChange(value);
    };

    return (<SelectCustom onChange={onChangeValue} options={values} {...restHook} />);
};

SelectorField.propTypes = SelectorFieldProps;
SelectorField.displayName = 'SelectorField';

export default SelectorField;
