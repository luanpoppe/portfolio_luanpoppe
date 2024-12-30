import styled from "styled-components"
import { widthTablet } from "../../utils/mediaQuery"

export const MainContainerStyled = styled.div`
	margin: 0 auto;
	position: relative;
	/* max-width: 1080px; */

	@media (max-width: ${widthTablet}) {
		width: 100%;
		padding: 24px;
	}
`
