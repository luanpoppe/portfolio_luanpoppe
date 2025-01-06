import { useState } from "react"
import {
	objetoProjetos,
	objetoProjetosIngles
} from "../../utils/objetoProjetos"
import { OpenModal } from "./OpenModal"
import { UmProjeto } from "./UmProjeto"
import { defineProjectsIndexes } from "./utils"
import { TituloSecao } from "../../components/TituloSecao"
import { getTextLang } from "../../utils/textos/funcs"
import { projetoTexto } from "../../utils/textos/titles"
import { useAppContext } from "../../utils/useContext"

export function ProjetosSecao() {
	const context = useAppContext()
	const { activeLanguage } = context

	const [indexProjetoAtivo, setIndexProjetoAtivo] = useState<number>(null)

	const projetosComIndex = defineProjectsIndexes(activeLanguage)
	const objetoProjetosFinal =
		activeLanguage === "english"
			? objetoProjetosIngles
			: activeLanguage === "portuguese"
			? objetoProjetos
			: objetoProjetos

	return (
		<section className="main-padding">
			<TituloSecao id="projetos" className="mb-4 hidden">
				{getTextLang(projetoTexto, activeLanguage)}
			</TituloSecao>

			<div className="d-flex flex-column flex-lg-row flex-wrap justify-content-lg-center w-100 gap-4 gap-lg-5">
				{objetoProjetosFinal.map((projeto, index) => {
					return (
						<UmProjeto
							key={projeto.nome}
							index={index}
							activeLanguage={activeLanguage}
							projeto={projeto}
							setIndexProjetoAtivo={setIndexProjetoAtivo}
						/>
					)
				})}
			</div>

			<OpenModal
				setIndexProjetoAtivo={setIndexProjetoAtivo}
				indexProjetoAtivo={indexProjetoAtivo}
				projetosComIndex={projetosComIndex}
				activeLanguage={activeLanguage}
			/>
		</section>
	)
}
