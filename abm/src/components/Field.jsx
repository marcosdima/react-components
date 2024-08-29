import { useCallback, useEffect, useState } from 'react';
import { FieldProps } from './PropTypes';
import fields from './fields';
import useField from '../hooks/useField';
import statusType from '../enums/statusType';

const Field = ({ type, name, onChange, required = false, settings={} }) => {
    const input = useField(name);
    const [status, setStatus] = useState({
        status: '',
        statusMessage: '',
    });

    // Every time field is modified, sends the data to form using the onChange function.
    useEffect(() => {
        if (required && !input.value) {
            onChange(
                name, 
                input.value, 
                {
                    status: statusType.ERROR,
                    statusMessage: `${name} is required`,
                },
            );
        } else {
            onChange(name, input.value, status);
        }
    }, [onChange, input.value, name, status, required]);


    const updateStatus = useCallback((status, statusMessage) => {
        setStatus({ status, statusMessage });
    }, []);

    const FieldComponent = fields[type];
    
    if (!FieldComponent) {
        return <p>Error: component {type} does not exists</p>;
    }

    return <FieldComponent hook={input} status={updateStatus} settings={settings}/>;
};

Field.propTypes = FieldProps;

export default Field;
