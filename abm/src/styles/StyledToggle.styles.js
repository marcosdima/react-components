import styled from 'styled-components';

const StyledToggle = styled.div`
    background: #CBD2A4;
    padding: 10px;
    border-radius: 8px;
    border: solid #9A7E6F;
    overflow: hidden;
`;

export const StyledContent = styled.div`
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  height: ${({ $isOpen, $contentHeight }) => ($isOpen ? `${$contentHeight}px` : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

export default StyledToggle;
