import styled from "styled-components"
import { widthTablet } from "../../utils/mediaQuery"
import { corAzul, corPadraoDeFundo } from "../../utils/colors"

export const NavbarMobileStyled = styled.div`
	display: none;
	height: 80px;
	width: 100%;
	background-color: ${corPadraoDeFundo};
	position: fixed;
	top: 0px;
	left: 0;
	z-index: 2;

	div {
		padding: 8px;
		span {
			display: block;
			height: 4px;
			width: 48px;
			margin-top: 8px;
			background-color: ${corAzul};
		}
	}

	h1 {
		margin-left: 40px;

		span {
			color: ${corAzul};
		}
	}

	@media (max-width: ${widthTablet}) {
		display: flex;
		align-items: center;
	}
`

export const NavbarOpenStyled = styled.nav`
	display: block;
	height: 100vh;
	width: 60vw;
	background-color: ${corAzul};
	position: fixed;
	left: 0;
	top: 60px;
	z-index: -1;

	li {
		text-align: center;
		padding: 16px;
		background-color: ${corPadraoDeFundo};
		border: none;
		border-bottom: 1px solid ${corAzul};
	}
`
