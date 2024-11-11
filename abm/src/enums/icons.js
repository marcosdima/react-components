import { FaMapMarkerAlt } from 'react-icons/fa';

const icons = {
    ubiMarker: FaMapMarkerAlt, 
};

export const keys = {};
for (const icon of Object.keys(icons)) {
    keys[icon] = icon;
}
Object.freeze(keys);

export default icons;

