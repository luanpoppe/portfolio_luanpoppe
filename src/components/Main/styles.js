import styled from "styled-components"
import { blue, lightPink, white } from "../../utils/colors"
import { paragraph, paragraphMobile, title, titleMobile } from "../../utils/fontSizes"

export const MainStyled = styled.main`
	display: flex;
	gap: 32px;
	margin-bottom: 64px;
	padding: 16px;
	border: 1px ${lightPink} solid;

	p {
		font-size: ${paragraph};

		@media (max-width: 480px) {
		font-size: ${paragraphMobile};
	}
	}

	h1 {
		font-size: ${title};

		@media (max-width: 480px) {
		font-size: ${titleMobile};
	}
	}

	@media (max-width: 480px) {
		display: block;
		border: none;
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
	column-gap: 60px;
	justify-content: center;

	animation: fadeIn 1s forwards;
	opacity: 0;
	li {
		padding-bottom: 4px;
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
		background-color: ${lightPink};
		color: black;
	}
`

export const bioContainerStyled = styled.div`
	display: block;
	z-index: 1;
`
