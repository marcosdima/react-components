import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import PropTypes from 'prop-types';

// Soluciona problemas de icono de marcador en Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

const MapCustom = ({ coordinates }) => {
    // If no coordinates were provided, then retunrs empty obj.
    if (!coordinates){
        return <></>;
    }

    const center = [coordinates[0].lat, coordinates[0].lon];
  
    return (
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coordinates.map((coord, index) => (
          <Marker key={index} position={[coord.lat, coord.lon]} />
        ))}
      </MapContainer>
    );
  };
  
  MapCustom.propTypes = {
    coordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
      }),
    ),
  };
  
  export default MapCustom;
