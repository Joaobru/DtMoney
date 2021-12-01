import { ContainerStyled, ItemSummaryStyled } from './styled';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

/**
 * @export
 * @component
 * @name Summary
 *
 * @description
 * Responsável pelo componente de resumo(Summary).
 */
export function Summary() {
  return (
    <ContainerStyled>
      <ItemSummaryStyled>
        <header>
          <p>
            Entradas
          </p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </ItemSummaryStyled>

      <ItemSummaryStyled>
        <header>
          <p>
            Saídas
          </p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </ItemSummaryStyled>

      <ItemSummaryStyled isHighLight>
        <header>
          <p>
            Total
          </p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </ItemSummaryStyled>
    </ContainerStyled>
  )
}