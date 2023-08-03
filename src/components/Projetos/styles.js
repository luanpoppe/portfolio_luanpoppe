import styled from "styled-components"

export const ContainerStyled = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 16px;
	column-gap: 2px;

	@media (max-width: 480px) {
		grid-template-columns: 1fr 1fr;
	}
`

export const EachProjectStyled = styled.div`
	padding: 8px;

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
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
