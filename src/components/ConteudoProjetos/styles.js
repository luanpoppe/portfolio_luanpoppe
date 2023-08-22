import styled from "styled-components"
import { corPadraoDeFundo, corPadraoTextos, corTags } from "../../utils/colors"
import { fontSmallText } from "../../utils/fontSizes"

export const CadaProjetoStyled = styled.div`
	border: 2px solid ${corPadraoTextos};
	border-radius: 8px;
	padding: 16px;
	display: flex;
	justify-content: center;
	column-gap: 32px;
	text-align: center;
	margin: 32px auto 0 auto;

	h2 {
		margin-bottom: 24px;
		font-size: 28px;
	}

	a {
		max-width: 240px;
		max-height: 200px;

		.imagem-projeto {
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
		color: ${corPadraoDeFundo};
		font-weight: bold;
		background-color: ${corTags};
	}
`

export const RedirecionamentoStyled = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	margin-top: 24px;

	.acesso-ao-site,
	button {
		background-color: ${corPadraoTextos};
		color: ${corPadraoDeFundo};
		font-size: ${fontSmallText};
		padding: 16px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
	}

	.acesso-ao-site {
		display: flex;
		box-shadow: -4px 4px rgba(255, 255, 255, 0.3);
		svg {
			margin-left: 4px;
		}
	}

	.acesso-ao-site:hover,
	button:hover {
		transform: scale(1.05);
		transition: all ease 350ms;
	}
`

export const ImagemGitHub = styled.img`
	max-width: 64px;
	max-height: 64px;
	padding: 0;
	border-radius: 8px;
	box-shadow: -4px 4px rgba(255, 255, 255, 0.3);

	&:hover {
		transform: scale(1.05);
		transition: all ease 350ms;
	}
`
