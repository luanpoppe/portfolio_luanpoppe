import React from "react"
import TituloSecao from "../TituloSecao"
import { HabilidadesSecaoStyled } from "./styles"
import ImagensHabilidades from "../ImagensHabilidades"

function HabilidadesSecao(props) {
	return (
		<>
			<TituloSecao id="habilidades">Habilidades</TituloSecao>
			<HabilidadesSecaoStyled maxWidth={props.maxWidth}>
				<ImagensHabilidades />
			</HabilidadesSecaoStyled>
		</>
	)
}

export default HabilidadesSecao
