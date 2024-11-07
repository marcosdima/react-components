import { useCallback, useEffect, useState } from 'react';
import { FieldProps } from './PropTypes';
import fields from './fields';
import useField from '../hooks/useField';
import statusType from '../enums/statusType';
import lang from '../enums/lang';
import { translateFieldStatus, translateGenericStatus } from '../functions/translate';

const Field = ({ type, name, onChange, placeholder='', label, required = false, settings={}, language=lang.EN }) => {
    const input = useField(name, placeholder, label);
    const [status, setStatus] = useState({
        status: '',
        statusMessage: '',
    });

    // Every time field is modified, sends the data to form using the onChange function.
    useEffect(() => {
        onChange(name, input.value, status);
    }, [onChange, input.value, name, status]);

    const FieldComponent = fields[type];

    const updateStatus = useCallback((status, fieldStatusMessage='generic', variables={}) => {
        // Validates that FieldComponent exists.
        if (!FieldComponent) {
            return;
        }

        // Updates 'status'.
        if (required && (!input.value || input.value === '')) {
            // If required was settes as true and the user does not send an input.
            setStatus({
                status: statusType.ERROR, 
                statusMessage: translateGenericStatus('required', {name: input.name}, language),
            });
        } else if (status === statusType.OK) {
            // If the status is OK, then sends a generic message. (This may change in the future).
            setStatus({
                status, 
                statusMessage: translateGenericStatus('OK', variables, language),
            });
        } else {
            setStatus({ 
                status, 
                statusMessage: translateFieldStatus(FieldComponent.name, fieldStatusMessage, variables, language),
            });
        }
    }, [FieldComponent, input.name, input.value, required, language]);

    if (!FieldComponent) {
        return <p>Error: component {type} does not exists</p>;
    }

    return <FieldComponent hook={input} status={updateStatus} settings={settings} />;
};

Field.propTypes = FieldProps;

export default Field;
