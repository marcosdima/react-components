import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
    }
`;