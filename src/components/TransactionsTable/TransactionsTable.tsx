import { useTransactionsContext } from '../../hooks/useTransactions';

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
  const { transactions } = useTransactionsContext()

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
          { transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td>{ transaction.title }</td>
                <td className={ transaction.type }>
                  { new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount) }
                </td>
                <td>{ transaction.category }</td>
                <td>
                { new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)) }
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </ContainerStyled>
  )
}