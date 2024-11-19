import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #9A7E6F;
    color: white;
    border: 2px solid #54473F;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
    padding: 0.68rem;

    &:hover {
        background-color: #54473F;
    }

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
    }
`;

export default StyledButton;
