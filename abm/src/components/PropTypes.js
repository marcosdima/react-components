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

const BasicShape = {
    hook: HookShape,
    status: PropTypes.func.isRequired,
};

const CharFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        maxLength: PropTypes.number,
        minLength: PropTypes.number,
    }),
};

const EmailFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        validDomains: PropTypes.oneOf(Object.values(emailDomain)),
    }),
};

const NumberFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }),
};

const PasswordFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        minLength: PropTypes.number,
        alphaNumeric: PropTypes.bool,
        signs: PropTypes.bool,
    }),
};

const SelectorFieldProps = {
    ...BasicShape,
    settings: PropTypes.shape({
        values: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.any
            })
        )
    }),
};

export {
    BasicShape,
    CharFieldProps,
    EmailFieldProps,
    NumberFieldProps,
    PasswordFieldProps,
    SelectorFieldProps
}
