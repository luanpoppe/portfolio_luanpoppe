import TituloSecao from "../TituloSecao"
import { ProjetosSecaoStyled } from "./styles"
import { objetoProjetos } from "../../utils/objetoProjetos"
import ConteudoProjetos from "../ConteudoProjetos"
import { useState } from "react"
import { projetoTexto } from "../../utils/textos/titles"

function ProjetosSecao(props) {
	// const objetoProjetosIsOpen = objetoProjetos.filter(
	// 	(projeto) => projeto.isModalOpen === true
	// )

	const modalIsOpen = objetoProjetos.map((projeto) => projeto.isModalOpen)

	const [stateModalIsOpen, setStateModalIsOpen] = useState(modalIsOpen)

	function updateObject(paramIndex) {
		const novoObjeto = stateModalIsOpen.map((state, index) => {
			if (paramIndex === index) {
				return !state
			} else {
				return state
			}
		})

		setStateModalIsOpen(novoObjeto)

		document.body.classList.add("stop-scroll")
	}

	return (
		<>
			<TituloSecao id="projetos">
				{props.activeLanguage === "english"
					? projetoTexto.en
					: props.activeLanguage === "portuguese"
					? projetoTexto.ptbr
					: ""}
			</TituloSecao>
			<ProjetosSecaoStyled className="flex-column flex-lg-row flex-wrap w-100"  maxWidth={props.maxWidth}>
				<ConteudoProjetos
					stateModalIsOpen={stateModalIsOpen}
					updateObject={updateObject}
					setStateModalIsOpen={setStateModalIsOpen}
					activeLanguage={props.activeLanguage}
				/>
			</ProjetosSecaoStyled>
		</>
	)
}

export default ProjetosSecao
