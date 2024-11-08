import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #0056b3;
    border: 2px solid #0056b3;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
    padding: 0.68rem;

    &:hover {
        background-color: #003f8c;
    }

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
    }
`;

export default StyledButton;
