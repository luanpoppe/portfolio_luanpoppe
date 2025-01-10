import { useEffect, useState } from "react"
import { OpenModal } from "./OpenModal"
import { UmProjeto } from "./UmProjeto"
import { defineProjectsIndexes } from "./utils"
import { TituloSecao } from "../../components/TituloSecao"
import { getTextLang } from "../../utils/textos/funcs"
import { projetoTexto } from "../../utils/textos/titles"
import { useAppContext } from "../../utils/useContext"
import { handleAnimation } from "../../utils/animation"

export function ProjetosSecao() {
	const context = useAppContext()
	const { activeLanguage, projectsObj } = context

	const [indexProjetoAtivo, setIndexProjetoAtivo] = useState<number>(null)

	const projetosComIndex = defineProjectsIndexes(activeLanguage)

	useEffect(() => handleAnimation(), [projectsObj])

	return (
		<section className="main-padding">
			<TituloSecao id="projetos" className="mb-4 hidden">
				{getTextLang(projetoTexto, activeLanguage)}
			</TituloSecao>

			<div className="d-flex flex-column flex-lg-row flex-wrap justify-content-lg-center w-100 gap-4 gap-lg-5">
				{projectsObj.map((projeto, index) => {
					const key = projeto.descricao
						.split(" ")
						.slice(0, 15)
						.join("")
					return (
						<UmProjeto
							key={key}
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
