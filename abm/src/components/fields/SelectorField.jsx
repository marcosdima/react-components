import { useEffect } from "react";
import { SelectorFieldProps } from "../PropTypes"; 
import Select from 'react-select';

const SelectorField = ({ hook, status, settings: { values } }) => {
    useEffect(() => {
        status();
    }, []);

    const onChangeValue = ({ value }) => {
        hook.onChange(value);
    }

    return (
        <Select
            options={values}
            onChange={onChangeValue}
            placeholder="Selecciona una opción"
        />
    );
};

SelectorField.propTypes = SelectorFieldProps;

export default SelectorField;
