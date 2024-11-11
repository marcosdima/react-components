import styled, { keyframes } from 'styled-components';

const inclination = 15;

const rotate = keyframes`
    0% {
        transform: rotate(-${inclination}deg);
    }
    50% {
        transform: rotate(${inclination}deg);
    }
    100% {
        transform: rotate(-${inclination}deg);
    }
`;

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NotFoundWrapper = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
`;

export const Text = styled.p`
    font-size: 1.2em;
    color: #555;
    text-align: center;
`;
