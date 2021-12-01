import logoImg from '../../assets/logo.svg'
import { ContainerStyled, ContentStyled } from './styled';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Responsável por conter o componente Header
 */
export function Header() {
  return (
    <ContainerStyled>
      <ContentStyled>
        <img src={logoImg} alt="dt money" />
        
        <button>Nova transação</button>
      </ContentStyled>
    </ContainerStyled>
  )
}