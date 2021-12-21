import { useState, FormEvent, ChangeEvent } from 'react';
import Modal from 'react-modal';

import { useTransactionsContext } from '../../hooks/useTransactions';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { ContainerStyled, TransactionTypeContainerStyled, RadioBoxStyled } from './styled';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
}

/**
 * @export
 * @component
 * @name NewTransactionModal
 *
 * @description
 * Responsável pela modal de transação.
 */
export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const { createTransaction } =  useTransactionsContext();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  /**
   * @function
   * @name handleCreateNewTransaction
   *
   * @description
   * Responsável por criar uma nova transação
   */
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      title,
      amount, 
      category,
      type
    };

    await createTransaction(data);

    onRequestClose();
    resetForm();
  }


  /**
   * @function
   * @name resetForm
   *
   * @description
   * Responsável por mudar o valor do titulo
   */
   function resetForm() {
    setTitle('');
    setCategory('');
    setType('deposit')
    setAmount(0);
  }

  /**
   * @function
   * @name handleChangeTitle
   *
   * @description
   * Responsável por mudar o valor do titulo
   */
   function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  /**
   * @function
   * @name handleChangeValue
   *
   * @description
   * Responsável por mudar o valor do campo amount
   */
  function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
  }

   /**
   * @function
   * @name handleChangeCategory
   *
   * @description
   * Responsável por mudar o valor da categoria
   */
  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  /**
   * @function
   * @name handleSetTypeDeposit
   *
   * @description
   * Responsável por mudar o tipo de transação para Entrada
   */
  function handleSetTypeDeposit() {
    setType('deposit');
  }

  /**
   * @function
   * @name handleSetTypeWithDraw
   *
   * @description
   * Responsável por mudar o tipo de transação para Saída
   */
   function handleSetTypeWithDraw() {
    setType('withdraw');
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar" />
      </button>

      <ContainerStyled onSubmit={handleCreateNewTransaction}>
        <h2>
          Cadastrar transação
        </h2>

        <input
          placeholder="Título" 
          type="text" 
          value={title}
          onChange={handleChangeTitle}
        />

        <input
          placeholder="Valor" 
          type="number" 
          value={amount}
          onChange={handleChangeAmount}
        />

        <TransactionTypeContainerStyled>
          <RadioBoxStyled 
            type="button" 
            onClick={handleSetTypeDeposit}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBoxStyled>

          <RadioBoxStyled 
            type="button"
            onClick={handleSetTypeWithDraw}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBoxStyled>
        </TransactionTypeContainerStyled>

        <input
          placeholder="Categoria" 
          type="text" 
          value={category}
          onChange={handleChangeCategory}
        />

        <button type="submit">
          Cadastrar
        </button>
      </ContainerStyled>
    </Modal>
  )
}