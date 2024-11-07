import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  color: #4C4B16;
  font-size: 2em;
`;

export const SpinnerIcon = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;
