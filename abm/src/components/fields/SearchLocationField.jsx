import { useEffect, useState } from "react";
import { SearchLocationFieldProps } from "../PropTypes";

import statusType from "../../enums/statusType";
import { Container, TopSection, Item } from "../../styles/general/TopSectionDisplay.styled";
import { getLocation } from "../../services/location";

import InputCustom from "../elements/InputCustom";
import ButtonCustom from "../elements/ButtonCustom";
import MapCustom from "../elements/MapCustom";
import SearchIcon from "../icons/SearchIcon";

const SearchLocationField = ({ hook, status, required, settings: { appendAtStart, appendAtEnd, defaultValue='' }}) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dir, setDir] = useState(defaultValue);
    const [render, setRender] = useState(false);

    useEffect(() => {
        const { length } = places;

        if (length === 0 && required) {
            status(statusType.ERROR, 'required', { name: hook.name });
        }
        else if (places.length > 1) {
            status(statusType.ERROR, 'multiplePlaces', { name: hook.name, dir });
        } else if (hook.value === '') {
            status(required ? statusType.ERROR : statusType.WARNING, 'noSelected', { name: hook.name });
        } else {
            status(statusType.OK);
        }
    }, [places, status, hook.value, hook.name, dir, required]);

    const search = async () => {
        // Just set render as true with the first search.
        if (!render) {
            setRender(true);
        }

        // Set loading as true, to show the loading icon.
        setLoading(true);

        // Try to fetch dir coordinates.
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

        // In any case, set loading as false.
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
                {/* Priority equal to 2 means more space for the component */}
                <Item priority={2}>
                    <InputCustom label={label} onChange={onChangeDir} value={dir}/>
                </Item>
                <Item>
                    <ButtonCustom onClick={search}>
                        <SearchIcon />
                    </ButtonCustom>
                </Item>  
            </TopSection>  
            <MapCustom coordinates={places} loading={loading} updateCoordinates={updateCoordinates} render={render}/>
        </Container>
    );
};

SearchLocationField.propTypes = SearchLocationFieldProps;

export default SearchLocationField;
