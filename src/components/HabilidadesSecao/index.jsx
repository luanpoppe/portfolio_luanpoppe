import React from "react"
import TituloSecao from "../TituloSecao"
import { HabilidadesSecaoStyled } from "./styles"
import ImagensHabilidades from "../ImagensHabilidades"

function HabilidadesSecao() {
	return (
		<>
			<TituloSecao id="habilidades">Habilidades</TituloSecao>
			<HabilidadesSecaoStyled>
				<ImagensHabilidades />
			</HabilidadesSecaoStyled>
		</>
	)
}

export default HabilidadesSecao
