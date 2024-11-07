import PropTypes from 'prop-types';
import fieldType from '../enums/fieldType';
import emailDomain from '../enums/emailDomain';
import statusType from '../enums/statusType';
import lang from '../enums/lang';

export const FieldProps =  {
    type: PropTypes.oneOf(Object.values(fieldType)).isRequired,
    name: PropTypes.string.isRequired,
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
};

export const CharFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        maxLength: PropTypes.number,
        minLength: PropTypes.number,
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
        min: PropTypes.number,
        max: PropTypes.number,
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
    capitalFirst: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export const InputCustomProps = {
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.shape(LabelCustomProps),
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
};
