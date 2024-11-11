import styled, { keyframes } from 'styled-components';

const bounceIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(76, 75, 22, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(76, 75, 22, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(76, 75, 22, 0.5);
  }
`;

export default styled.div`
  width: 40px;
  height: 40px;
  background-color: #9a7e6f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  animation: ${pulse} 1.5s ease-in-out infinite;
  cursor: pointer;
`;
