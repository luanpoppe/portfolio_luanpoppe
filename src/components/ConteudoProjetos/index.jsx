/* eslint-disable no-unused-vars */
import { corPadraoDeFundo, corPadraoTextos } from "../../utils/colors"
import { closeButton, githubIcon } from "../../utils/images"
import {
	objetoProjetos,
	objetoProjetosIngles
} from "../../utils/objetoProjetos"
import {
	BackgroundStyled,
	CloseButtonStyled,
	ModalStyled,
	TagsModalStyled
} from "./ModalStyled"
import {
	CadaProjetoStyled,
	ImagemGitHub,
	RedirecionamentoStyled,
	TagsHabilidadesStyled
} from "./styles"

const ConteudoProjetos = (props) => {
	const conteudoDosProjetos = (projeto, index = 0) => {
		return (
			<>
				<a href={projeto.link} target="_blank" rel="noreferrer">
					<img
						className="imagem-projeto"
						src={projeto.imagem}
						alt={projeto.nome}
					/>
				</a>
				<div>
					<h2>
						<a href={projeto.link} target="_blank" rel="noreferrer">
							{projeto.nome}
						</a>
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
							{props.activeLanguage === "english"
								? "Read more"
								: props.activeLanguage === "portuguese"
								? "Ver mais"
								: ""}
						</button>
						<a
							className="acesso-ao-site"
							href={projeto.link}
							target="_blank"
							rel="noreferrer"
						>
							{props.activeLanguage === "english"
								? "Access"
								: props.activeLanguage === "portuguese"
								? "Acesse"
								: ""}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="w-full h-auto ml-1 !w-6 md:!w-4"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path
									fill="none"
									stroke={corPadraoDeFundo}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
								></path>
							</svg>
						</a>
						<a
							href={projeto.github}
							target="_blank"
							rel="noreferrer"
						>
							<ImagemGitHub
								src={githubIcon}
								alt="Acesse o github"
							/>
						</a>
					</RedirecionamentoStyled>
				</div>
			</>
		)
	}

	const projetosComIndex =
		props.activeLanguage === "english"
			? objetoProjetosIngles.map((state, index) => {
					return { ...state, indexNumber: index }
			  })
			: props.activeLanguage === "portuguese"
			? objetoProjetos.map((state, index) => {
					return { ...state, indexNumber: index }
			  })
			: ""

	objetoProjetos.map((state, index) => {
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
			{props.activeLanguage === "english"
				? objetoProjetosIngles.map((projeto, index) => {
						return (
							<CadaProjetoStyled key={projeto.nome}>
								{conteudoDosProjetos(projeto, index)}
							</CadaProjetoStyled>
						)
				  })
				: props.activeLanguage === "portuguese"
				? objetoProjetos.map((projeto, index) => {
						return (
							<CadaProjetoStyled key={projeto.nome}>
								{conteudoDosProjetos(projeto, index)}
							</CadaProjetoStyled>
						)
				  })
				: ""}

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
