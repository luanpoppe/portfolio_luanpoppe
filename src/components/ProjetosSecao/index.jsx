import { useState } from "react"
import { objetoProjetos } from "../../utils/objetoProjetos"
import ConteudoProjetos from "../ConteudoProjetos"
import TituloSecao from "../TituloSecao"
import { ModalStyled, ProjetosSecaoStyled } from "./styles"

function ProjetosSecao() {
	let listaIndexProjetos = []
	objetoProjetos.map(() => {
		listaIndexProjetos.push({
			isOpen: false
		})
	})
	const [projetosModal, setProjetosModal] = useState(listaIndexProjetos)

	const resetarModais = () => {
		// let resetaProjetos = []
		// objetoProjetos.map(() => {
		// 	resetaProjetos.push({
		// 		isOpen: false
		// 	})
		// })
		// setProjetosModal(resetaProjetos)
		setProjetosModal(listaIndexProjetos)
	}

	const conteudoProjetos = (
		<ConteudoProjetos
			projetosModal={projetosModal}
			setProjetosModal={setProjetosModal}
			resetarModais={resetarModais}
		/>
	)

	return (
		<>
			<TituloSecao>Projetos</TituloSecao>
			<ProjetosSecaoStyled>
				{conteudoProjetos}
				{projetosModal.map(
					(projeto) =>
						projeto.isOpen === true && (
							<ModalStyled key={projeto}>
								{conteudoProjetos}
							</ModalStyled>
						)
				)}
			</ProjetosSecaoStyled>
		</>
	)
}

export default ProjetosSecao
