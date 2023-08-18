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
	const [mostrarModal, setMostrarModal] = useState({})

	const resetarModais = () => {
		let resetaProjetos = []
		objetoProjetos.map(() => {
			resetaProjetos.push({
				isOpen: false
			})
		})
		setProjetosModal(resetaProjetos)
		console.log(projetosModal)
	}

	const conteudoProjetos = (
		<ConteudoProjetos
			projetosModal={projetosModal}
			setProjetosModal={setProjetosModal}
			resetarModais={resetarModais}
			mostrarModal={mostrarModal}
			setMostrarModal={setMostrarModal}
		/>
	)

	objetoProjetos.map((projeto, indexProjeto) => <></>)

	return (
		<>
			<TituloSecao>Projetos</TituloSecao>
			<ProjetosSecaoStyled>
				{conteudoProjetos}
				{mostrarModal && <ModalStyled>{conteudoProjetos}</ModalStyled>}
			</ProjetosSecaoStyled>
		</>
	)
}

export default ProjetosSecao
