import styled from "styled-components";
import { MainStyled, TitleStyled } from "../Main/styles";
import { blue } from "../../utils/colors";
import { paragraph, paragraphMobile } from "../../utils/fontSizes";

export const ContactsStyled = styled(MainStyled)`
	display: flex;
	justify-content: center;
	padding: 40px;
`

export const ContactContainerStyled = styled.div`
	display: block;

	li {
		list-style: none;
		font-size: ${paragraph};
		display: flex;
		/* align-items: center; */
		justify-content: center;
		margin-bottom: 8px;

		@media (max-width: 480px) {
			font-size: ${paragraphMobile};
			flex-wrap: wrap;
			margin-bottom: 24px;
		}
	}

	${TitleStyled} {
		width: 100%;
		border-bottom: 1px solid ${blue};
		margin-bottom: 28px;
	}

	img {
		border-radius: 33%;
		max-width: 32px;
		margin-right: 8px;
	}

	@media (max-width: 480px) {
		border: none;
		/* padding: 12px; */
		margin-bottom: 28px;
		width: 100%;
	}

	.liMobile {
		display: flex;
		align-items: center;
		margin-right: 8px;

			@media (max-width: 480px) {
			width: 100%;
			justify-content: center;
			margin-bottom: 4px;
			margin-right: 0;
		}
	}

	a {
		@media (max-width: 480px) {
			text-align: center;
		}
	}
`
