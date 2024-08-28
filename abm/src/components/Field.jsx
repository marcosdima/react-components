/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import useField from '../hooks/useField';
import { FieldProps } from './PropTypes';
import fields from './fields';

const Field = ({ type, name, onChange, required = false }) => {
    const field = useField(name);

    // Every time field is modified, sends the data to form using the onChange function.
    useEffect(() => {
        onChange(name, field.value);
    }, [onChange, field.value, name]);

    const FieldComponent = fields[type];
    
    if (!FieldComponent) {
        return <p>Error: component {type} does not exists</p>;
    }

    return <FieldComponent hook={field} />;
};

Field.propTypes = FieldProps;

export default Field;
