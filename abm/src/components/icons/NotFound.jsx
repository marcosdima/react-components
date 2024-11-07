import { FaMapMarkerAlt } from 'react-icons/fa';
import { NotFoundContainer, NotFoundWrapper, Text } from '../../styles/icons/NotFound.styles';
import { translateGenericStatus } from '../../functions/translate';
import lang from '../../enums/lang';

const NotFound = () => {
  const IconComponent = FaMapMarkerAlt;
  const text = translateGenericStatus('notFound', {}, lang.ES);
  return (
    <NotFoundContainer>
        <Text>{text}</Text>
        <NotFoundWrapper>
            <IconComponent />
        </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
