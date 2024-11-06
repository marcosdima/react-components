import { useEffect, useState } from "react";
import { CharFieldProps } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";
import ButtonCustom from "../elements/ButtonCustom";
import { getLocation } from "../../services/location";
import MapCustom from "../elements/MapCustom";
import { Container, TopSection } from "../../styles/general/TopSectionDisplay.styled";

const SearchLocation = ({ hook, status }) => {
    const [places, setPlaces] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        status(statusType.OK);
    }, [status, hook.value, hook.name]);

    const search = async () => {
        setLoading(true);
        try {
            const getPlaces = await getLocation(hook.value);
            const floatCoordinates = getPlaces.map(
                ({ lon, lat }) => (
                    {
                        lon: Number.parseFloat(lon),
                        lat: Number.parseFloat(lat),
                    }
                ),
            );
            setPlaces(floatCoordinates);
        } catch(err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
        setLoading(false);
    };

    const label = { text: hook.name, capitalFirst: true };

    return (
        <Container>
            <TopSection>
                <InputCustom label={label} {...hook}/>
                <ButtonCustom text='Search' onClick={() => search()}/>
            </TopSection>  
            <MapCustom coordinates={places} loading={loading}/>
        </Container>
    );
};

SearchLocation.propTypes = CharFieldProps;

export default SearchLocation;
