import PropTypes from 'prop-types';
import fieldType from '../utils/enums/fieldType';
import emailDomain from '../utils/enums/emailDomain';
import statusType from '../utils/enums/statusType';
import lang from '../utils/enums/lang';
import { keys } from '../utils/enums/icons';
import inputType from '../utils/enums/inputType';

export const FieldProps =  {
    type: PropTypes.oneOf(Object.values(fieldType)).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    language: PropTypes.oneOf(Object.values(lang)),
};

export const BaseFormProps = {
    fields: PropTypes.arrayOf((PropTypes.shape(FieldProps)).isRequired),
    onSubmit: PropTypes.func.isRequired,
    language: PropTypes.oneOf(Object.values(lang)),
};

export const StatusProps = {
    type: PropTypes.arrayOf((PropTypes.shape(statusType)).isRequired),
    statusMessage: PropTypes.string.isRequired,
};

export const StatusDisplayProps = {
    status: PropTypes.arrayOf(PropTypes.shape(StatusProps)).isRequired,
};

// ---- // Specific Fields // ---- //
const HookShape = PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}).isRequired;

export const BasicShape = {
    hook: HookShape,
    status: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
};

export const CharFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        maxLength: PropTypes.number,
        minLength: PropTypes.number,
        onlyLetters: PropTypes.bool,
    }),
};

export const EmailFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        validDomains: PropTypes.oneOf(Object.values(emailDomain)),
    }),
};

export const NumberFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        minValue: PropTypes.number,
        maxValue: PropTypes.number,
    }),
};

export const PasswordFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        minLength: PropTypes.number,
        alphaNumeric: PropTypes.bool,
        signs: PropTypes.bool,
    }),
};

export const SelectorFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        values: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.any,
            }),
        ),
        setValue: PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.any,
        }),
    }),
};

export const SearchLocationFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        appendAtStart: PropTypes.string,
        appendAtEnd: PropTypes.string,
        default: PropTypes.string,
    }),
};

// ---- // Elements // ---- //
export const LabelCustomProps = {
    text: PropTypes.string.isRequired,
};

export const InputCustomProps = {
    condition: PropTypes.oneOf(Object.values(inputType)),
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};

export const ButtonCustomProps = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
};

export const SelectCustomProps = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.any,
        }),
    ),
    setValue: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any,
    }),
    onChange: PropTypes.func,
};

export const TextAreaCustomProps = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    disabled: PropTypes.bool,
};

export const ToggleCustomProps = {
    showMessage: PropTypes.string.isRequired,
    closeMessage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export const MapCustomProps = {
    coordinates: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lon: PropTypes.number.isRequired,
        }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    updateCoordinates: PropTypes.func,
    render: PropTypes.bool.isRequired,
};

// -- Icons -- //
export const NotFoundProps = {
    icon: PropTypes.oneOf(Object.values(keys)).isRequired,
};
