import styled from "styled-components"
import { corAzul, corPadraoDeFundo } from "../../../utils/colors"

export const NavbarMobileStyled = styled.div`
	height: 80px;
	background-color: ${corPadraoDeFundo};
	z-index: 2;

	div.hamburguer-menu {
		padding: 8px;
		span {
			display: block;
			height: 4px;
			width: 48px;
			margin-top: 8px;
			background-color: ${corAzul};
		}
	}

	div.title-and-language {
		display: block;
		h1 {
			margin-left: 40px;

			span {
				color: ${corAzul};
			}
		}
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

export const NavbarBackgroundStyled = styled.div`
	background-color: ${corPadraoDeFundo};
	opacity: 0.7;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
`
