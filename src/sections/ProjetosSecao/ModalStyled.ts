import { corPadraoTextos, corDeFundoModal } from "./../../utils/colors"
import { titleModal, fontSmallText } from "./../../utils/fontSizes"
import styled from "styled-components"

import { widthTablet } from "../../utils/mediaQuery"

export const ModalStyled = styled.div`
	display: block;
	margin: 0 auto;
	padding: 32px;
	max-height: 90vh;
	border: 1px solid ${corPadraoTextos};
	border-radius: 8px;
	background-color: ${corDeFundoModal};
	position: relative;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	overflow-y: scroll;

	@media (max-width: ${widthTablet}) {
		width: 100%;
		max-height: 80vh;
	}

	h2 {
		text-align: center;
		margin-bottom: 16px;
		font-size: ${titleModal};
	}

	img {
		max-width: 100%;
		margin-bottom: 16px;
		border-radius: 8px;
	}

	& > p {
		font-size: ${fontSmallText};
		text-align: justify;
	}
`

export const BackgroundStyled = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1;
`

// export const TagsModalStyled = styled(TagsHabilidadesStyled)`
// 	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
// 	text-align: center;

// 	p {
// 		max-width: 132px;
// 	}

// 	@media (max-width: ${widthTablet}) {
// 		grid-template-columns: 1fr 1fr;
// 	}
// `
export const TagsModalStyled = styled.div`
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	text-align: center;

	p {
		max-width: 132px;
	}

	@media (max-width: ${widthTablet}) {
		grid-template-columns: 1fr 1fr;
	}
`

export const CloseButtonStyled = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	background-color: ${corDeFundoModal};
	border: none;

	img {
		width: 48px;
		cursor: pointer;
	}
`
