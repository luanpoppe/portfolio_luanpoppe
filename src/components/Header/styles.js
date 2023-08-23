import styled from "styled-components"
import { fontTitleHeader } from "../../utils/fontSizes"
import { corAzul, corPadraoDeFundo } from "../../utils/colors"
import { widthTablet } from "../../utils/mediaQuery"

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	font-size: ${fontTitleHeader};
	margin-bottom: 16px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1;

	span {
		color: ${corAzul};
	}

	.header-background {
		height: 100px;
		width: 100%;
		background-color: ${corPadraoDeFundo};
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	@media (max-width: ${widthTablet}) {
		display: none;
	}
`
