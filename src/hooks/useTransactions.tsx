import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import TransactionService from '../services/transactions';


type Props = {
  children: ReactNode;
}

type Transactions = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionForm = Omit<Transactions, 'id' | 'createdAt'>

type TransactionsContextData = {
  transactions: Transactions[],
  createTransaction(transaction: TransactionForm): Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as any);

/**
 * @export
 * @component
 * @name TransactionsContextProvider
 *
 * @description
 * Responsável pelo contexto de transação.
 */
export function TransactionsContextProvider ({ children }: Props) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  /**
   * @function
   * @name handleGetTransaction
   *
   * @description
   * Responsável por pegar as transações
   */
  async function handleGetTransaction() {
    const { data } = await TransactionService.get();
    setTransactions(data.transactions);
  }

  /**
   * @function
   * @name createTransaction
   *
   * @description
   * Responsável por criar a transação
   */
  async function createTransaction(transaction: TransactionForm) {
    const { data } = await TransactionService.post({
      ...transaction,
      createdAt: new Date(),
    });
    setTransactions([...transactions, data.transaction]);
  }
  
  useEffect(() => {
    handleGetTransaction()
  },[])

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

/**
 * @export
 * @function
 * @name useTransactionsContext
 *
 * @description
 * Responsável por exportar os contextos.
 */
export function useTransactionsContext() {
  return useContext(TransactionsContext);
}