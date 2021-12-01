import styled from 'styled-components';

export const ContainerStyled = styled.header`
  background: var(--blue);
`;

export const ContentStyled = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;