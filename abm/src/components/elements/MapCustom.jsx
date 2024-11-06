import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

const MapCustom = ({ coordinates }) => {
    // If no coordinates were provided, then retunrs empty obj.
    if (!coordinates || coordinates.length === 0){
        return <></>;
    }

    const center = [coordinates[0].lat, coordinates[0].lon];
  
    return (
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "50vh", width: "100%", borderRadius: '8px', border: 'solid #4C4B16' }}
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
