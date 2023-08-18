import styled from "styled-components"
import { corPadraoDeFundo, corPadraoTextos } from "../../utils/colors"

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

	img {
		max-width: 320px;
		max-height: 240px;
		object-fit: cover;
		border-radius: 8px;
	}

	button {
		background-color: ${corPadraoTextos};
		color: ${corPadraoDeFundo};
		padding: 16px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 24px;
	}
`

export const TagsHabilidadesStyled = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 8px;
	margin-bottom: 32px;

	p {
		padding: 8px 16px;
		max-width: 256px;
		border-radius: 12px;
		background-color: green;
	}
`
