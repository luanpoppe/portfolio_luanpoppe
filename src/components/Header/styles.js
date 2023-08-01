import styled from "styled-components"
import { subtitleMobile } from "../../utils/fontSizes"

export const HeaderStyle = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 80px;
	margin-top: 16px;
	margin-bottom: 32px;

	@media (max-width: 480px) {
		gap: 8px;
	}

`
export const ButtonHeader = styled.button`
	border: 1px #A5D8FF solid;
	/* border: none; */
	border-radius: 8px;
	background-color: transparent;
	cursor: pointer;
	padding: 8px;
	font-size: 24px;

	@media (max-width: 480px) {
		font-size: ${subtitleMobile};
	}
`
