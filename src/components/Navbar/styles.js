import styled from "styled-components"
import { fontNavBar } from "../../utils/fontSizes"
import { corAzul } from "../../utils/colors"

export const NavbarStyled = styled.nav`
	ul {
		display: flex;
		justify-content: center;

		li {
			margin-right: 24px;
			font-size: ${fontNavBar};

			&:hover {
				transition: all ease 0.75s;
				transform: scale(1.15);
			}
		}

		.navbarSublinhado {
			border: none;
			border-bottom: 3px ${corAzul} solid;
		}
	}
`
