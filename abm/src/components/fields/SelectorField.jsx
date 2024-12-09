import { useEffect, useState } from "react";
import { SelectorFieldProps } from "../PropTypes"; 
import SelectCustom from "../elements/SelectCustom";
import statusType from "../../utils/enums/statusType";

const SelectorField = ({ hook, status, required, settings: { values, setValue } }) => {
    const [firstRender, setFirstRender] = useState(false);

    useEffect(() => {
        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.label });
        } else {
            status(statusType.OK);
        }
    }, [hook.label, hook.value, required, status]);

    // Set 'setValue'
    useEffect(() => {
        if (setValue && !firstRender) {
            hook.onChange(setValue);
            setFirstRender(true);
        };
    }, [firstRender, hook, hook.onChange, setValue]);

    const { onChange, ...restHook } = hook;

    const onChangeValue = ({ value }) => {
        onChange(value);
    };

    return (<SelectCustom onChange={onChangeValue} options={values} setValue={setValue} {...restHook} />);
};

SelectorField.propTypes = SelectorFieldProps;
SelectorField.displayName = 'SelectorField';

export default SelectorField;
