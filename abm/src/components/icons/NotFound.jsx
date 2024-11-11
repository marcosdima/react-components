import { NotFoundContainer, NotFoundWrapper, Text } from '../../styles/icons/NotFound.styles';
import { translateGenericStatus } from '../../functions/translate';
import lang from '../../enums/lang';
import { NotFoundProps } from '../PropTypes';
import icons from '../../enums/icons';

const NotFound = ({ icon }) => {
  const text = translateGenericStatus('notFound', {}, lang.ES);
  const IconComponent = icons[icon];

  return (
    <NotFoundContainer>
        <Text>{text}</Text>
        <NotFoundWrapper>
            <IconComponent />
        </NotFoundWrapper>
    </NotFoundContainer>
  );
};

NotFound.propTypes = NotFoundProps;

export default NotFound;
