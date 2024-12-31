import styled from "styled-components"
import { corPadraoDeFundo, corPadraoTextos, corTags } from "../../utils/colors"
import { fontMobileSmallText, fontSmallText } from "../../utils/fontSizes"
import { widthTablet } from "../../utils/mediaQuery"

export const CadaProjetoStyled = styled.div`
	/* display: flex;
	justify-content: center;
	border: 2px solid ${corPadraoTextos};
	border-radius: 8px;
	margin: 32px auto 0 auto;
	padding: 16px;
	column-gap: 32px;
	text-align: center;

	@media (max-width: ${widthTablet}) {
		display: block;
		padding: 8px;
		max-width: 100%;
	}

	h2 {
		margin-bottom: 24px;
		font-size: 28px;
	}

	a {
		max-width: 240px;
		max-height: 200px;

		@media (max-width: ${widthTablet}) {
			display: block;
			padding: 4px 8px;
			margin: 0 auto;
			max-width: 100%;
			max-height: 100%;
		}

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

	@media (max-width: ${widthTablet}) {
		max-width: 100%;
	} */
`

export const TagsHabilidadesStyled = styled.div`
	/* display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	gap: 8px;
	margin-bottom: 32px;

	@media (max-width: ${widthTablet}) {
		grid-template-columns: 1fr 1fr;
	}

	p {
		padding: 8px 16px;
		max-width: 256px;
		border-radius: 12px;
		color: ${corPadraoDeFundo};
		font-weight: bold;
		background-color: ${corTags};

		@media (max-width: ${widthTablet}) {
			margin-left: auto;
			margin-right: auto;
		}
	} */
`

export const RedirecionamentoStyled = styled.div`
	/* display: flex;
	gap: 16px;
	align-items: center;
	margin-top: 24px;

	@media (max-width: ${widthTablet}) {
		max-width: 100%;
		justify-content: center;
	}

	.acesso-ao-site,
	button {
		background-color: ${corPadraoTextos};
		color: ${corPadraoDeFundo};
		font-size: ${fontSmallText};
		padding: 16px;
		border: none;
		border-radius: 8px;
		cursor: pointer;

		@media (max-width: ${widthTablet}) {
			padding: 8px;
			font-size: ${fontMobileSmallText};
		}
	}

	.acesso-ao-site {
		display: flex;
		box-shadow: -4px 4px rgba(255, 255, 255, 0.3);
		svg {
			margin-left: 4px;
		}

		@media (max-width: ${widthTablet}) {
			margin-bottom: 0;
			height: 64px;
			align-items: center;
		}
	}

	a {
		@media (max-width: ${widthTablet}) {
			margin-right: 0;
			margin-left: 0;
			padding: 0;
		}
	}

	.acesso-ao-site:hover,
	button:hover {
		transform: scale(1.05);
		transition: all ease 350ms;
	}

	button {
		height: 64px;
	} */
`

export const ImagemGitHub = styled.img`
	/* max-width: 64px;
	max-height: 64px;
	padding: 0;
	border-radius: 8px;
	box-shadow: -4px 4px rgba(255, 255, 255, 0.3);

	&:hover {
		transform: scale(1.05);
		transition: all ease 350ms;
	} */
`
