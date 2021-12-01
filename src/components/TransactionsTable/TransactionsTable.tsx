import { useEffect } from 'react';

import TransactionService from '../../services/transactions';
import { ContainerStyled } from './styled';

/**
 * @export
 * @component
 * @name TransactionsTable
 *
 * @description
 * Responsável pela tabela de transações.
 */
export function TransactionsTable() {
  /**
   * @function
   * @name handleGetTransaction
   *
   * @description
   * Responsável por pegar as transações
   */
  async function handleGetTransaction() {
    const transactions = await TransactionService.get();
    console.log(transactions, 'dados');
  }
  
  useEffect(() => {
    handleGetTransaction()
  },[])

  return (
    <ContainerStyled>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </ContainerStyled>
  )
}