import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

type ItemSummaryProps = {
  isHighLight?: boolean;
}

export const ItemSummaryStyled = styled.div<ItemSummaryProps>`
  background: ${({ isHighLight }) => isHighLight ? '#33CC95': '#FFF'}; 
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${({ isHighLight }) => isHighLight ? '#FFF': '#363f5f'}; 


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`