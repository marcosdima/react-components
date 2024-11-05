import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.fontFamily};
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background-color: #0056b3;
    border: 2px solid #0056b3;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

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
