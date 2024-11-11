import icons from '../../enums/icons';
import UbiStyles, { UbiWrapper } from '../../styles/icons/Ubi.styles';


const UbiIcon = () => {
    const { UbiMarker } = icons;

    return (
        <UbiWrapper>
            <UbiStyles>
                <UbiMarker />
            </UbiStyles>
        </UbiWrapper>
    );
};

export default UbiIcon;
