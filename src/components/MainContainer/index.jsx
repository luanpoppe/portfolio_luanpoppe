import React from "react"
import { MainContainerStyled } from "./styles"

function MainContainer(props) {
	/* eslint-disable react/prop-types */
	return <MainContainerStyled>{props.children}</MainContainerStyled>
}

export default MainContainer
