import styled from "styled-components";
import { subtitle, titleMobile } from "../../utils/fontSizes";
import { blue } from "../../utils/colors";

export const OldProjectsStyled = styled.section`
	margin-top: 60px;
`

export const SubtituloStyled = styled.h2`
	font-size: ${subtitle};
	text-align: center;
	color: ${blue};
	border-bottom: 1px solid ${blue};
	margin: 0 80px 32px;
	padding-bottom: 8px;

	@media (max-width: 480px) {
		font-size: ${titleMobile};
		margin: 0 20px 32px;
	}

	@media (min-width: 481px) and (max-width: 768px) {
		margin: 0 40px 32px;
	}
`
