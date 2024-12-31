import React from "react"
import TituloSecao from "../TituloSecao"
import { HabilidadesSecaoStyled } from "./styles"
import ImagensHabilidades from "../ImagensHabilidades"
import { habilidadesTexto } from "../../utils/textos/titles"

function HabilidadesSecao(props) {
	return (
		<div className="w-50">
			<TituloSecao id="habilidades">
				{props.activeLanguage === "english"
					? habilidadesTexto.en
					: props.activeLanguage === "portuguese"
					? habilidadesTexto.ptbr
					: ""}
			</TituloSecao>
			<HabilidadesSecaoStyled maxWidth={props.maxWidth}>
				<ImagensHabilidades />
			</HabilidadesSecaoStyled>
		</div>
	)
}

export default HabilidadesSecao
