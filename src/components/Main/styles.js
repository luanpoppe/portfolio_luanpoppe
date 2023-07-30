import styled from "styled-components"
import { lightPink, white } from "../../utils/colors"

export const MainStyled = styled.main`
	display: flex;
	gap: 32px;
	margin-bottom: 64px;
`

export const ProfileImageStyled = styled.img`
	max-width: 160px;
	border-radius: 12px;
	object-fit: cover;
`

export const SubContainerStyled = styled.div`
	display: block;
	max-width: 680px;
`

export const TitleStyled = styled.h1`
	margin-bottom: 16px;
	color: ${white};
`

export const PStyled = styled.p`
	margin-bottom: 12px;
	text-align: justify;
	color: ${white};
`

export const listaStyled = styled.ul`
	list-style: none;

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
		transition: 1s;
		background-color: ${lightPink};
		color: black;
	}
`

export const bioContainerStyled = styled.div`
	display: block;
	z-index: 1;
`
