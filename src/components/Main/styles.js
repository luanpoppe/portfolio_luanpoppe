import styled from "styled-components"
import { blue, white } from "../../utils/colors"
import { paragraph, paragraphMobile, smallParagraph, smallParagraphMobile, title, titleMobile } from "../../utils/fontSizes"

export const MainStyled = styled.main`
	display: flex;
	gap: 32px;
	margin-bottom: 64px;
	padding: 16px;
	border: 4px ${white} solid;
	border-radius: 4px;

	p {
		font-size: ${paragraph};

		@media (max-width: 480px) {
			font-size: ${paragraphMobile};
		}
	}

	@media (max-width: 480px) {
		display: block;
		border: none;
		padding: 24px;
		margin-bottom: 28px;
	}

	@media (min-width: 480px) and (max-width: 768px) {
		display: block;
		padding: 32px;
	}
`

export const ProfileImageStyled = styled.img`
	max-width: 160px;
	max-height: 240px;
	border-radius: 12px;
	object-fit: cover;

	@media (max-width: 480px) {
		display: block;
		margin: 0 auto;
		margin-bottom: 16px;
	}

	@media (min-width: 481px) and (max-width: 768px) {
		display: block;
		margin: 0 auto;
		margin-bottom: 16px;
	}
`

export const SubContainerStyled = styled.div`
	display: block;
	max-width: 680px;
`

export const TitleStyled = styled.h1`
	margin-bottom: 16px;
	color: ${blue};
	text-align: center;
	animation: fadeIn 1s forwards;
	opacity: 0;

	border-bottom: ${props => props.titleBorder ? `2px solid ${blue}` : "none"};
	font-size: ${(props => {
		if (props.fontSize) {
			return `${props.fontSize}px`
		} else {
			return title
		}
	})};

	@media (max-width: 480px) {
		font-size: ${props => props.fontSizeMobile ? `${props.fontSizeMobile}px` : titleMobile};
	}
`

export const PStyled = styled.p`
	margin-bottom: 12px;
	text-align: justify;
	color: ${white};
	animation: fadeIn 1s forwards;
	opacity: 0;
`

export const listaStyled = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	column-gap: 60px;
	justify-content: center;
	animation: fadeIn 1s forwards;
	opacity: 0;
	margin-top: 32px;

	@media (max-width: 480px) {
		div {
			min-width: 80px;
		}
		text-align: center;
	}

	li {
		padding-bottom: 4px;
		font-size: ${smallParagraph};

		@media (max-width: 480px) {
			font-size: ${smallParagraphMobile};
		}
	}
`

export const botaoStyled = styled.button`
	color: ${white};
	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${white};
	cursor: pointer;
	font-size: 1em;

	&:hover {
		transition: 0.5s ease-in;
		background-color: ${blue};
		color: black;
		border-radius: 4px;
		padding: 0 4px;
	}
`

export const bioContainerStyled = styled.div`
	display: block;
	z-index: 1;
`
