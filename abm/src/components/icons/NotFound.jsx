import { NotFoundContainer, NotFoundWrapper, Text } from '../../styles/icons/NotFound.styles';
import { translateGenericStatus } from '../../utils/functions/translate';
import lang from '../../utils/enums/lang';
import { NotFoundProps } from '../PropTypes';
import icons from '../../utils/enums/icons';

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
