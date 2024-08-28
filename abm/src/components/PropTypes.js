import PropTypes from 'prop-types';
import fieldType from '../enums/fieldType';

export const FieldProps =  {
    type: PropTypes.oneOf(Object.values(fieldType)).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};

export const BaseFormProps = {
    fields: PropTypes.arrayOf((PropTypes.shape(FieldProps)).isRequired),
};

export const HookShape = PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}).isRequired;

export const CharFieldProps = {
    hook: HookShape,
};
