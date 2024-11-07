import { useEffect, useState } from "react";
import { SearchLocationFieldProps } from "../PropTypes";

import statusType from "../../enums/statusType";
import { Container, TopSection } from "../../styles/general/TopSectionDisplay.styled";
import { getLocation } from "../../services/location";

import InputCustom from "../elements/InputCustom";
import ButtonCustom from "../elements/ButtonCustom";
import MapCustom from "../elements/MapCustom";
import SearchIcon from "../icons/SearchIcon";

const SearchLocation = ({ hook, status, settings: { appendAtStart, appendAtEnd, defaultValue='' }}) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dir, setDir] = useState(defaultValue);

    useEffect(() => {
        status(statusType.OK);
    }, [places, status]);

    const search = async () => {
        setLoading(true);
        try {
            // Fetch the places which matched dir.
            const start = appendAtStart ? (appendAtStart + ', ') : '';
            const end = appendAtEnd ? (', ' + appendAtEnd) : '';
            const getPlaces = await getLocation(`${start}${dir}${end}`);

            // Cast string coordinates as float.
            const floatCoordinates = getPlaces.map(
                ({ lon, lat }) => (
                    {
                        lon: Number.parseFloat(lon),
                        lat: Number.parseFloat(lat),
                    }
                ),
            );

            // Set the hook.
            setPlaces(floatCoordinates);
        } catch(err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
        setLoading(false);
    };

    const label = { text: hook.name, capitalFirst: true };
    const onChangeDir = (event) => setDir(event.target.value); 
    const updateCoordinates = ([{ lat, lon }]) => {
        setPlaces([{ lat, lon }]);
        hook.onChange(`${lat},${lon}`);
    };

    return (
        <Container>
            <TopSection>
                <InputCustom label={label} onChange={onChangeDir} value={dir}/>
                <ButtonCustom onClick={search}>
                    <SearchIcon />
                </ButtonCustom>
            </TopSection>  
            <MapCustom coordinates={places} loading={loading} updateCoordinates={updateCoordinates}/>
        </Container>
    );
};

SearchLocation.propTypes = SearchLocationFieldProps;

export default SearchLocation;
