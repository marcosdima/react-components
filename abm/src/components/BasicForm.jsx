import { useCallback, useEffect, useState } from 'react';
import Field from './Field';
import { BaseFormProps, StatusDisplayProps, StatusProps } from './PropTypes';
import statusType from '../utils/enums/statusType';

import ButtonCustom from './elements/ButtonCustom';
import ToggleCustom from './elements/ToggleCustom';
import GridContainer from './elements/GridContainer';
import { translateGenericStatus } from '../utils/functions/translate';

import lang from '../utils/enums/lang';
import icons from '../utils/enums/icons';

let currLanguage;

const Status = ({ status, statusMessage }) => {
    const {
        Error,
        Warning,
        Check,
    } = icons;
    const iconData = {
        [statusType.ERROR]: {
            icon: <Error />,
            color: 'red',
        },
        [statusType.WARNING]: {
            icon: <Warning />,
            color: '#DC6B19',
        },
        [statusType.OK]: {
            icon: <Check />,
            color: 'green',
        },
    };

    const { icon, color } = iconData[status] || {};

    return (
        <div style={{ color: color || 'black', display: 'flex', alignItems: 'center' }}>
            {icon} <span style={{ marginLeft: '8px' }}>{statusMessage}</span>
        </div>
    );
};

const StatusDisplay = ({ status }) => {
    const display = () => status.map((data, index) => <Status key={index} {...data}/>);
    const show = translateGenericStatus('show', {}, currLanguage);
    const ocult = translateGenericStatus('ocult', {}, currLanguage);

    return (
        <>
            {
                status.length === 0
                ?   <></> 
                :   <ToggleCustom showMessage={show} closeMessage={ocult} >{display()}</ToggleCustom>
            }  
        </>
    );
};

const BasicForm = ({ style, fields, onSubmit, language=lang.ES }) => {
    const [fieldsValues, setFieldsValues] = useState({});
    const [status, setStatus] = useState({});

    // Checks language changes.
    useEffect(() => {
        currLanguage = language;
    }, [language]);

    // Filter errors and warnings.
    const filter = (arr, type) => (
        Object.keys(arr)
            .filter((key) => (
                status[key].status === type
            ))
            .map((name) => status[name])
    );
    const errors = filter(status, statusType.ERROR);
    const warnings = filter(status, statusType.WARNING);

    // To Prevent an infinite loop of updates.
    const fieldsChange = useCallback((name, value, statusUpdate) => {
        setFieldsValues((prevFieldsValues) => ({
            ...prevFieldsValues,
            [name]: value,
        }));
        setStatus((prevStatus) => ({
            ...prevStatus,
            [name]: statusUpdate,
        }));
    }, []);

    /**
     * Get fields.
     *
     * This function iterates 'fields' prop and creates a Field component for each item.
     *
     * @returns {Array<Field>} A collection of fields.
     */
    const getFields = () => {
        return (
            fields.map(({ row, col, ...field }, index) => (
                {
                    row,
                    col,
                    content: (<Field key={index} onChange={fieldsChange} language={language} {...field}/>),
                }
            ))
        );
    };

    /**
     * Handle submit event.
     *
     * Handle this form submit. If there is no error, then sends the data.
     * 
     * @param {SubmitEvent} event
     * @returns {void}
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(fieldsValues);
    };

    const gap = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    };

    const submit = translateGenericStatus('submit', {}, language);

    return (
        <div style={style}>
            <form onSubmit={handleSubmit}>
                <div style={gap}>
                    <GridContainer items={getFields()}/>
                    <ButtonCustom type="submit" disabled={errors.length > 1}>{submit}</ButtonCustom>
                </div>
            </form>
            <StatusDisplay status={[...errors, ...warnings]}/>
        </div>  
    );
};

BasicForm.propTypes = BaseFormProps;
StatusDisplay.propTypes = StatusDisplayProps;
Status.propTypes = StatusProps;
  
export default BasicForm;
