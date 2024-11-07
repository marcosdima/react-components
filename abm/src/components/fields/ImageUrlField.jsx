import { useEffect, useState } from "react";
import { BasicShape } from "../PropTypes";
import statusType from "../../enums/statusType";
import InputCustom from "../elements/InputCustom";
import { Container, TopSection } from "../../styles/general/TopSectionDisplay.styled";
import ButtonCustom from "../elements/ButtonCustom";

const ImageUrlField = ({ hook, status }) => {
    const [image, setImage] = useState(<></>);

    useEffect(() => {
        status(statusType.OK);
    }, [hook.name, status]);

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
                <ButtonCustom onClick={() => render()}>Search</ButtonCustom>/
            </TopSection>  
            {image}
        </Container>
    );
};

ImageUrlField.propTypes = BasicShape;

export default ImageUrlField;
