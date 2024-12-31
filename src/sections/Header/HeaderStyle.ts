import styled from "styled-components"
import { fontTitleHeader } from "../../utils/fontSizes"
import { corAzul, corPadraoDeFundo } from "../../utils/colors"

export const HeaderStyled = styled.header`
	background-color: ${corPadraoDeFundo};
	min-height: 120px;
	font-size: ${fontTitleHeader};
	margin-bottom: 2rem;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1;

	span {
		color: ${corAzul};
	}
`
