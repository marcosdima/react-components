import { useCallback, useEffect, useState } from 'react';
import { FieldProps } from './PropTypes';
import fields from './fields';
import useField from '../hooks/useField';
import statusType from '../utils/enums/statusType';
import lang from '../utils/enums/lang';
import { translateFieldStatus, translateGenericStatus } from '../utils/functions/translate';

const Field = ({ type, name, onChange, label, placeholder='', defaultValue='', required=false, settings={}, language=lang.EN, ...props }) => {
    const input = useField(name, placeholder, label, defaultValue);
    const [status, setStatus] = useState({
        status: '',
        statusMessage: '',
    });
    const [changeFlag, setChangeFlag] = useState(false);

    // Checks if a change was made. If it isn't happend, then sets the new defaultValue.
    useEffect(() => {
        if (!changeFlag) {
            input.onChange(defaultValue);
        }
    }, [changeFlag, defaultValue, input]);

    useEffect(() => {
        if (changeFlag && input.value === defaultValue) {
            setChangeFlag(false);
        }
    }, [changeFlag, defaultValue, input.value]);

    // Every time field is modified, sends the data to form using the onChange function.
    useEffect(() => {
        onChange(name, input.value, status);
    }, [onChange, input.value, name, status]);

    const FieldComponent = fields[type];

    // Checks that FieldComponent has displayName.
    if (!FieldComponent.displayName) {
        throw new Error(`Missing displayName of ${FieldComponent.name}`);
    }

    const updateStatus = useCallback((status, fieldStatusMessage='generic', variables={}) => {
        // Validates that FieldComponent exists.
        if (!FieldComponent) {
            return;
        }
        
        // If is required, then sends the generic message.
        if (fieldStatusMessage === 'required') {
            setStatus({
                status: statusType.ERROR, 
                statusMessage: translateGenericStatus('required', variables, language),
            });
        } 
        // If the status is OK, then sends a generic message. (This may change in the future).
        else if (status === statusType.OK) {     
            setStatus({
                status, 
                statusMessage: translateGenericStatus(status, variables, language),
            });
        }
        // Else, translate the field status provided.
        else {
            setStatus({ 
                status, 
                statusMessage: translateFieldStatus(FieldComponent.displayName, fieldStatusMessage, variables, language),
            });
        }

        if (input.value !== defaultValue) {
            setChangeFlag(true);
        }
    }, [FieldComponent, defaultValue, input.value, language]);

    // Checks that a component was found.
    if (!FieldComponent) {
        return <p>Error: component {type} does not exists</p>;
    }

    return (
        <div style={{ width: '100%', height: '100%' }} {...props}>
            <FieldComponent hook={input} status={updateStatus} settings={settings} required={required} />
        </div>
    );
};

Field.propTypes = FieldProps;

export default Field;
