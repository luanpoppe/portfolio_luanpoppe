import styled from "styled-components"
import { subtitleMobile } from "../../utils/fontSizes"
import { blue, white } from "../../utils/colors"

export const HeaderStyle = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 80px;
	margin-top: 12px;
	margin-bottom: 32px;

	@media (max-width: 480px) {
		display: block;
		margin-top: 0;
	}

`
export const ButtonHeader = styled.button`
	border: 2px ${blue} solid;
	/* border: none; */
	border-radius: 16px;
	background-color: transparent;
	cursor: pointer;
	padding: 16px 24px;
	font-size: 24px;
	transition: all ease 0.5s;

	&:hover {
  	transform: scale(1.1);
	}


	@media (max-width: 480px) {
		font-size: ${subtitleMobile};
		display: none;
	}
`

export const HeaderMobile = styled.div`
	position: fixed;
	z-index: 3;

	.hamburguer {
		height: 40px;
		width: 52px;
		/* display: block; */
		padding: 12px;
		position: absolute;
		top: 0;
		left: 0;


		span {
			display: block;
			/* margin-bottom: 4px; */
			height: 2px;
			width: 36px;
			border: ${blue} 1px solid;
			margin: 8px auto;

		}
	}

	@media (min-width: 480px) {
		display: none;
	}
`
