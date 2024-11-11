import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from 'react-leaflet';

import { MapCustomProps } from '../PropTypes';

import LoadingIcon from '../icons/LoadingIcon';
import NotFound from '../icons/NotFound';
import { keys } from '../../enums/icons';
import UbiIcon from '../icons/UbiIcon';

// eslint-disable-next-line react/prop-types
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
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

// eslint-disable-next-line react/prop-types
const SelectPosition = ({ onClick }) => {
  useMapEvent('click', ({ latlng }) => {
    const { lat, lng: lon } = latlng;
    onClick(lat, lon);
  });

  return null;
};

const MapCustom = ({ coordinates, loading, updateCoordinates, render }) => {
  // If no coordinates were provided and is not loading, then returns not found.
  if (coordinates?.length === 0 && !loading && render){
    const { UbiMarker } = keys;
    return <NotFound icon={UbiMarker}/>;
  }
  // If is loading, then shows an icon.
  else if (loading) {    
    return <LoadingIcon />;
  }

  const changeCoordinates = (lat, lon) => updateCoordinates && updateCoordinates([{ lat, lon }]);
  const center = render ? [coordinates[0].lat, coordinates[0].lon] : [0, 0];
  const zoom = 13;

  return (
    <>
      {
        render
        ? <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "50vh", width: "inherit", borderRadius: '8px', border: 'solid #4C4B16' }}
            >
            <ChangeView center={center} />
            <SelectPosition onClick={changeCoordinates} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            <Markers coordinates={coordinates ?? []}/>
          </MapContainer>
        : <UbiIcon></UbiIcon>
      } 
    </>
    
  );
};
  
MapCustom.propTypes = MapCustomProps;
  
export default MapCustom;
