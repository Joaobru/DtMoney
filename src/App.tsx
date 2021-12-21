import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsContextProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";
import Header from './components/Header';
import Dashboard from "./components/Dashboard";
import NewTransactionModal from './components/NewTransactionModal';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  /**
 * @function
 * @name handleOpenNewTransactionModal
 *
 * @description
 * Responsável por abrir a modal de nova transação.
 */
   function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  /**
   * @function
   * @name handleCloseNewTransactionModal
   *
   * @description
   * Responsável por fechar a modal de nova transação.
   */
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsContextProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      
    </TransactionsContextProvider>
  );
}

export default App;
