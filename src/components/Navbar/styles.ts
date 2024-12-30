import styled from "styled-components"
import { fontNavBar, fontSmallText } from "../../utils/fontSizes"
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

		.escolher-lingua {
			font-size: ${fontSmallText};
			margin: auto 0;
			height: 34px;

			img {
				width: 24px;
				height: 16px;
				object-fit: cover;
				cursor: pointer;
				transition: none;
				margin: auto 8px;
			}
			img:last-child {
				margin-right: 48px;
			}
		}
	}
`
