import { ContainerStyled } from './styled';

import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';

/**
 * @export
 * @component
 * @name Dashboard
 *
 * @description
 * Responsável por conter a página do Dashboard
 */
export function Dashboard() {
  return (
    <ContainerStyled>
      <Summary />
      <TransactionsTable />
    </ContainerStyled>
  )
}