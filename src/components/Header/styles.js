import styled from "styled-components"
import { fontTitleHeader } from "../../utils/fontSizes"
import { corAzul } from "../../utils/colors"

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	font-size: ${fontTitleHeader};
	margin-bottom: 16px;

	span {
		color: ${corAzul};
	}
`
