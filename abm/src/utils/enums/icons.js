import { FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const icons = {
    UbiMarker: FaMapMarkerAlt,
    Check: FaCheckCircle,
    Warning: FaExclamationTriangle,
    Error: FaTimesCircle,
};

export const keys = {};
for (const icon of Object.keys(icons)) {
    keys[icon] = icon;
}
Object.freeze(keys);

export default icons;

