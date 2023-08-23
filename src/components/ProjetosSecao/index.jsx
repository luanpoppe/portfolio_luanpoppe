/* eslint-disable no-unused-vars */
import TituloSecao from "../TituloSecao"
import { ModalStyled, ProjetosSecaoStyled } from "./styles"
import { objetoProjetos } from "../../utils/objetoProjetos"
import ConteudoProjetos from "../ConteudoProjetos"
import { useState } from "react"

function ProjetosSecao(props) {
	const objetoProjetosIsOpen = objetoProjetos.filter(
		(projeto) => projeto.isModalOpen === true
	)

	let modalIsOpen = objetoProjetos.map((projeto) => projeto.isModalOpen)

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
			<TituloSecao id="projetos">Projetos</TituloSecao>
			<ProjetosSecaoStyled maxWidth={props.maxWidth}>
				<ConteudoProjetos
					stateModalIsOpen={stateModalIsOpen}
					updateObject={updateObject}
					setStateModalIsOpen={setStateModalIsOpen}
				/>
			</ProjetosSecaoStyled>
		</>
	)
}

export default ProjetosSecao
