import { useState, useEffect, useRef } from 'react';
import { ToggleCustomProps } from '../PropTypes';
import StyledToggle, { StyledContent } from '../../styles/StyledToggle.styles';
import PropTypes from 'prop-types';
import LabelCustom from './LabelCustom';

const Content = ({ isOpen, children, contentHeight }) => (
    <StyledContent isopen={isOpen.toString()} maxheight={contentHeight}>
      {children}
    </StyledContent>
);

Content.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    contentHeight: PropTypes.number.isRequired,
};

const ToggleCustom = ({ showMessage, closeMessage, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        // Set the content height for the animation
        setContentHeight(isOpen ? contentRef.current?.scrollHeight : 0);
    }, [isOpen]);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <StyledToggle>
        <StyledContent $isOpen={isOpen} $contentHeight={contentHeight} ref={contentRef}>
          {children}
        </StyledContent>
        <LabelCustom onClick={handleClick} text={isOpen ? closeMessage : showMessage} />
      </StyledToggle>
    );
};

ToggleCustom.propTypes = ToggleCustomProps;

export default ToggleCustom;
