import { PropsWithChildren } from "react"
import styled from "styled-components"
import { fontNavBar, fontSmallText } from "../../utils/fontSizes"
import { corAzul } from "../../utils/colors"

export function Navbar(props: PropsWithChildren & { className?: string }) {
	return (
		<NavbarStyled className={props.className}>
			{props.children}
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	li {
		font-size: ${fontNavBar};

		&:hover {
			transition: all ease 0.5s;
			transform: scale(1.05);
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
`
