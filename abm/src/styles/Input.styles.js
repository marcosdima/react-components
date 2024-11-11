import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  outline: none;
  &:focus {
      border-color: #4C4B16;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default StyledInput;
