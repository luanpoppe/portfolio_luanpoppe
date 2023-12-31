import styled from "styled-components"
import { widthTablet } from "../../utils/mediaQuery"

export const HabilidadesSecaoStyled = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	column-gap: 32px;
	row-gap: 24px;
	margin: 0 auto;
	margin-top: 64px;
	margin-bottom: 64px;
	max-width: ${(props) => props.maxWidth};

	@media (max-width: ${widthTablet}) {
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
`
