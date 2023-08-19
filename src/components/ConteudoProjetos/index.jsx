/* eslint-disable no-unused-vars */
import { closeButton } from "../../utils/images"
import { objetoProjetos } from "../../utils/objetoProjetos"
import {
	BackgroundStyled,
	CloseButtonStyled,
	ModalStyled,
	TagsModalStyled
} from "./ModalStyled"
import {
	CadaProjetoStyled,
	RedirecionamentoStyled,
	TagsHabilidadesStyled
} from "./styles"

const ConteudoProjetos = (props) => {
	const conteudoDosProjetos = (projeto, index = 0) => {
		return (
			<>
				<a href={projeto.link}>
					<img src={projeto.imagem} alt={projeto.nome} />
				</a>
				<div>
					<h2>
						<a href={projeto.link}>{projeto.nome}</a>
					</h2>
					<TagsHabilidadesStyled>
						{projeto.habilidades.map((tag) => (
							<p key={tag}>{tag}</p>
						))}
					</TagsHabilidadesStyled>
					<p className="paragrafo-descricao">
						{projeto.descricao.split(" ").slice(0, 15).join(" ")}
						{"..."}
					</p>

					<RedirecionamentoStyled>
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
							}}
						>
							Ver mais
						</button>
					</RedirecionamentoStyled>
				</div>
			</>
		)
	}

	const projetosComIndex = objetoProjetos.map((state, index) => {
		return { ...state, indexNumber: index }
	})

	const indexAtivoModal = props.stateModalIsOpen.findIndex(
		(state) => state === true
	)

	let projetoAtivoModal = projetosComIndex.filter(
		(state) => state.indexNumber === indexAtivoModal
	)
	projetoAtivoModal = projetoAtivoModal[0]

	function fecharModal() {
		document.body.classList.remove("stop-scroll")
		props.setStateModalIsOpen(
			props.stateModalIsOpen.map((state) => {
				return (state = false)
			})
		)
	}

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
				<>
					<ModalStyled>
						<h2>{projetoAtivoModal.nome}</h2>
						<TagsModalStyled>
							{projetoAtivoModal.habilidades.map((tag) => (
								<p key={tag}>{tag}</p>
							))}
						</TagsModalStyled>
						<img
							src={projetoAtivoModal.imagem}
							alt={projetoAtivoModal.nome}
						/>
						<p>{projetoAtivoModal.descricao}</p>
						<CloseButtonStyled onClick={() => fecharModal()}>
							<img src={closeButton} alt="Botão de fechar" />
						</CloseButtonStyled>
					</ModalStyled>
					<BackgroundStyled onClick={() => fecharModal()} />
				</>
			) : (
				""
			)}
		</>
	)
}

export default ConteudoProjetos
