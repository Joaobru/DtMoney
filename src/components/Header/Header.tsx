
import logoImg from '../../assets/logo.svg'
import { ContainerStyled, ContentStyled } from './styled';

type Props = {
  handleOpenNewTransactionModal: () => void;
}

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsável por conter o componente Header
 */
export function Header({ handleOpenNewTransactionModal }: Props) {

  return (
    <ContainerStyled>
      <ContentStyled>
        <img src={logoImg} alt="dt money" />
        
        <button 
          type="button" 
          onClick={handleOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </ContentStyled>
    </ContainerStyled>
  )
}