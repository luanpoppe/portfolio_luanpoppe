import TituloSecao from "../../components/TituloSecao"
import { objetoProjetos } from "../../utils/objetoProjetos"
import { ConteudoProjetos } from "./ConteudoProjetos"
import { useState } from "react"
import { projetoTexto } from "../../utils/textos/titles"
import { getTextLang } from "../../utils/textos/funcs"

export function ProjetosSecao({ activeLanguage }: PropActiveLanguage) {
	// const objetoProjetosIsOpen = objetoProjetos.filter(
	// 	(projeto) => projeto.isModalOpen === true
	// )

	const modalIsOpen = objetoProjetos.map((projeto) => projeto.isModalOpen)

	const [stateModalIsOpen, setStateModalIsOpen] = useState(modalIsOpen)

	function updateObject(paramIndex: number) {
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
		<section className="main-padding">
			<TituloSecao id="projetos" className="mb-4">
				{getTextLang(projetoTexto, activeLanguage)}
			</TituloSecao>

				<ConteudoProjetos
					stateModalIsOpen={stateModalIsOpen}
					updateObject={updateObject}
					setStateModalIsOpen={setStateModalIsOpen}
					activeLanguage={activeLanguage}
				/>
		</section>
	)
}
