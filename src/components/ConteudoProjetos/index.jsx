/* eslint-disable no-unused-vars */
import { objetoProjetos } from "../../utils/objetoProjetos"
import { ModalStyled } from "../ProjetosSecao/styles"
import { CadaProjetoStyled, TagsHabilidadesStyled } from "./styles"

const ConteudoProjetos = (props) => {
	const conteudoDosProjetos = (projeto, index = 0) => {
		return (
			<>
				<img src={projeto.imagem} alt={projeto.nome} />
				<div>
					<h2>{projeto.nome}</h2>
					<TagsHabilidadesStyled>
						{projeto.habilidades.map((tag) => (
							<p key={tag}>{tag}</p>
						))}
					</TagsHabilidadesStyled>
					<p>{projeto.descricao.split(" ").slice(0, 15).join(" ")}</p>

					<button
						onClick={() => {
							props.updateObject(index)
							console.log(props.stateModalIsOpen)
							console.log(
								props.stateModalIsOpen.findIndex(
									(state) => state === true
								)
							)
							console.log(projetoAtivoModal)
							// console.log(
							// 	objetoProjetos.map((state, index) => {
							// 		return { ...state, indexNumber: index }
							// 	})
							// )
						}}
					>
						Ver mais
					</button>
				</div>
			</>
		)
	}

	// console.log(
	// 	// props.stateModalIsOpen.filter((state) => state === false).length == 2,
	// 	props.stateModalIsOpen
	// 		.filter((state) => state === true)
	// 		.map((projeto, index) => (
	// 			<div key={projeto.nome}>{projeto.nome}</div>
	// 		))
	// )

	const projetosComIndex = objetoProjetos.map((state, index) => {
		return { ...state, indexNumber: index }
	})

	// const indexAtivoModal = projetosComIndex.filter((state) => {
	// 	return props.stateModalIsOpen.findIndex((state) => state === true)
	// })
	const indexAtivoModal = props.stateModalIsOpen.findIndex(
		(state) => state === true
	)

	const projetoAtivoModal = projetosComIndex.filter(
		(state) => state.indexNumber === indexAtivoModal
	)

	return (
		<>
			{objetoProjetos.map((projeto, index) => {
				return (
					<CadaProjetoStyled key={projeto.nome}>
						{conteudoDosProjetos(projeto, index)}
					</CadaProjetoStyled>
				)
			})}
			{props.stateModalIsOpen.filter((state) => state === true).length ==
			1 ? (
				<ModalStyled>
					<div>cadê carai</div>
					<div>{projetoAtivoModal[0].descricao}</div>
				</ModalStyled>
			) : (
				// 	props.stateModalIsOpen.map((projeto, index) => (
				// 		<ModalStyled key={index}>jejejeje</ModalStyled>
				//   ))
				"hue"
			)}
		</>
	)
}

export default ConteudoProjetos
