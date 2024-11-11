import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    margin-bottom: 8px;
    resize: none;
    height: 100%;

    &:focus {
        border-color: #4C4B16;
    }
`;

export default StyledTextArea;
