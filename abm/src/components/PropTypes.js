import PropTypes from 'prop-types';
import fieldType from '../enums/fieldType';
import emailDomain from '../enums/emailDomain';
import statusType from '../enums/statusType';

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
