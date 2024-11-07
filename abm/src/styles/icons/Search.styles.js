import styled, { keyframes } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const rotateLeftRight = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(-50deg); }
  100% { transform: rotate(0deg); }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const BounceSearchIcon = styled(FaSearch)`
  animation: ${rotateLeftRight} 1s ease-in-out forwards;
`;
