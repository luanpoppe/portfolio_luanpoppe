import React from "react"

import styled from "styled-components"
import { widthTablet } from "../../utils/mediaQuery"
import { corAzul } from "../../utils/colors"

export const NavbarMobileStyled = styled.div`
	display: none;
	height: 44px;
	width: 100%;
	margin-left: 8px;
	margin-top: 8px;

	span {
		display: block;
		height: 4px;
		width: 48px;
		margin-top: 8px;
		background-color: ${corAzul};
	}

	@media (max-width: ${widthTablet}) {
		display: block;
	}
`

function NavbarMobile() {
	return (
		<NavbarMobileStyled>
			<span></span>
			<span></span>
			<span></span>
		</NavbarMobileStyled>
	)
}

export default NavbarMobile
