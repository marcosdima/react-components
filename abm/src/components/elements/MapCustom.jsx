import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapCustomProps } from '../PropTypes';
import { useEffect } from 'react';
import LoadingIcon from '../icons/LoadingIcon';


// eslint-disable-next-line react/prop-types
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
};

// eslint-disable-next-line react/prop-types
const Markers = ({ coordinates }) => {
  return (
    <>
      {
        // eslint-disable-next-line react/prop-types
        coordinates.map(
          (coord, index) => (
            <Marker key={index} position={[coord.lat, coord.lon]} />
          ),
        )
      }
    </>
  );
};

const MapCustom = ({ coordinates, loading }) => {
    // If no coordinates were provided, then returns empty obj.
    if (!coordinates || coordinates.length === 0){
        return <></>;
    }

    // If is loading, then shows an icon.
    if (loading) {
      return <LoadingIcon />;
    }

    const center = [coordinates[0].lat, coordinates[0].lon];

    return (
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "50vh", width: "100%", borderRadius: '8px', border: 'solid #4C4B16' }}
        >
        <ChangeView center={center} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        <Markers coordinates={coordinates}/>
      </MapContainer>
    );
};
  
MapCustom.propTypes = MapCustomProps;
  
export default MapCustom;
