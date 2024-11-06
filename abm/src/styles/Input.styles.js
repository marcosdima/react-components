import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 8px;

  &:focus {
      border-color: #4C4B16;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 18px;
`;

export default StyledInput;
