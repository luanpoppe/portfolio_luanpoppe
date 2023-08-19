import styled from "styled-components"
import { corPadraoDeFundo, corPadraoTextos } from "../../utils/colors"
import { fontSmallText } from "../../utils/fontSizes"

export const CadaProjetoStyled = styled.div`
	border: 1px solid ${corPadraoTextos};
	border-radius: 8px;
	padding: 16px;
	display: flex;
	justify-content: center;
	column-gap: 32px;
	text-align: center;
	margin: 64px auto 0 auto;

	h2 {
		margin-bottom: 16px;
	}

	a {
		max-width: 240px;
		max-height: 200px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 0 0;
			border-radius: 8px;
		}
	}

	.paragrafo-descricao {
		font-size: ${fontSmallText};
	}
`

export const TagsHabilidadesStyled = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	gap: 8px;
	margin-bottom: 32px;

	p {
		padding: 8px 16px;
		max-width: 256px;
		border-radius: 12px;
		background-color: green;
	}
`

export const RedirecionamentoStyled = styled.div`
	button {
		background-color: ${corPadraoTextos};
		color: ${corPadraoDeFundo};
		font-size: ${fontSmallText};
		padding: 16px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 24px;
	}
`
