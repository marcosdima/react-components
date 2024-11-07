import { useEffect, useState } from "react";

import { Container, TopSection } from "../../styles/general/TopSectionDisplay.styled";
import { BasicShape } from "../PropTypes";

import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";
import ButtonCustom from "../elements/ButtonCustom";
import SearchIcon from "../icons/SearchIcon";

const ImageUrlField = ({ hook, status, required }) => {
    const [image, setImage] = useState(<></>);

    useEffect(() => {
        if (required && hook.value === '') {
            status(statusType.ERROR, 'required', { name: hook.name });
        } else {
            status(statusType.OK);
        }
    }, [hook.name, hook.value, required, status]);

    const render = () => {
        return setImage(
            <img
                src={hook.value}
                alt="Not Found"
                style={{ maxWidth: '100%', maxHeight: '400px' }}
            />,
        );
    };

    return (
        <Container>
            <TopSection>
                <InputCustom {...hook} />
                <ButtonCustom onClick={() => render()}>
                    <SearchIcon />
                </ButtonCustom>
            </TopSection>  
            {image}
        </Container>
    );
};

ImageUrlField.propTypes = BasicShape;

export default ImageUrlField;
