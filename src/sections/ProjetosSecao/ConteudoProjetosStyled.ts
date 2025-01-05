import styled from "styled-components"
import { corPadraoDeFundo, corPadraoTextos } from "../../utils/colors"
import { fontSmallText } from "../../utils/fontSizes"

export const ButtonProjetoStyled = styled.a`
	background-color: ${corPadraoTextos};
	color: ${corPadraoDeFundo};
	font-size: ${fontSmallText};
	border: none;
	border-radius: 6px;
	cursor: pointer;
	display: flex;
	font-size: 0.9rem;
	padding: 8px 16px;
	transition: all ease 500ms;
	max-height: 40px;

	&:hover {
		transform: scale(1.05);
		transition: all ease 500ms;
	}
`
