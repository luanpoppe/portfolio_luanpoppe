import React from "react"
import { TituloSecaoStyled } from "./styles"

function TituloSecao(props) {
	return <TituloSecaoStyled id={props.id}>{props.children}</TituloSecaoStyled>
}

export default TituloSecao
