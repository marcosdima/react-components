import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem
`;

const TopSection = styled.div`
  display: inline-flex;
  align-items: flex-end;
  width: 100%;
  gap: 0.1rem;
`;

const Item = styled.div`
  flex-grow: ${({ $priority=1 }) => ($priority)};
  flex-shrink: 0;
  flex-basis: auto;
`;

export { Container, TopSection, Item };
