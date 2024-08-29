import PropTypes from 'prop-types';
import fieldType from '../enums/fieldType';
import emailDomain from '../enums/emailDomain';

export const FieldProps =  {
    type: PropTypes.oneOf(Object.values(fieldType)).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};

export const BaseFormProps = {
    fields: PropTypes.arrayOf((PropTypes.shape(FieldProps)).isRequired),
    onSubmit: PropTypes.func.isRequired,
};

export const HookShape = PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}).isRequired;

export const CharFieldProps = {
    hook: HookShape,
    status: PropTypes.func.isRequired,
    settings: PropTypes.shape({
        maxLength: PropTypes.number,
        minLength: PropTypes.number,
    }),
};

export const EmailFieldProps = {
    hook: HookShape,
    status: PropTypes.func.isRequired,
    settings: PropTypes.shape({
        validDomains: PropTypes.oneOf(Object.values(emailDomain)),
    }),
};
