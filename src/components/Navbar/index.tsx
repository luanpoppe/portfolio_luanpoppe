import React from "react"
import { NavbarStyled } from "./styles"

function Navbar(props) {
	/* eslint-disable react/prop-types */
	return <NavbarStyled>{props.children}</NavbarStyled>
}

export default Navbar
