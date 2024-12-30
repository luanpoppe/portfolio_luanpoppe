/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components"
import { widthLargeMonitor, widthTablet } from "../../utils/mediaQuery"

export const ProjetosSecaoStyled = styled.section<any>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	margin: 0 12px;
	margin-bottom: 64px;
	max-width: ${(props: any) => props.maxWidth};

	@media (max-width: ${widthTablet}) {
		display: block;
		margin: 0 0;
	}

	@media (min-width: ${widthLargeMonitor}) {
		margin: 0 auto;
	}
`
