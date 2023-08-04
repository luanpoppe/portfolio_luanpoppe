import styled from "styled-components"
import { black } from "../../utils/colors"

export const ContainerStyled = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 48px;

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		margin: 12px;
	}
`

export const EachProjectStyled = styled.div`
	padding: 24px;
	/* border: 1px solid black; */
	background-color: ${black};
	border-radius: 12px;

	&:hover {
		transition: all ease 0.5s;
		transform: scale(1.05) ;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
		height: 140px;
		border-radius: 4px;
	}
	`

export const ProjectTitle = styled.h2`
	text-align: center;
`

export const ProjectImage = styled.div`
	display: flex;
	justify-content: center;
	padding: 8px;
`

export const DescricaoProjeto = styled.div`
	text-align: center;
`
