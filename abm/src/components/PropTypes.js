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

// ---- // Elements // ---- //
export const InputCustomProps = {
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

export const LabelCustomProps = {
    capitalFirst: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export const ButtonCustomProps = {
    text: PropTypes.string.isRequired,
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
