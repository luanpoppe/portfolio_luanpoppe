import { closeButton } from "../../utils/images"
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
import { UmProjeto } from "./UmProjeto"

type Props = PropActiveLanguage & {
	stateModalIsOpen: any
	updateObject: any
	setStateModalIsOpen: any
}

export function ConteudoProjetos({
	activeLanguage,
	stateModalIsOpen,
	setStateModalIsOpen,
	updateObject
}: Props) {
	const projetosComIndex: any =
		activeLanguage === "english"
			? objetoProjetosIngles.map((state, index) => {
					return { ...state, indexNumber: index }
			  })
			: activeLanguage === "portuguese"
			? objetoProjetos.map((state, index) => {
					return { ...state, indexNumber: index }
			  })
			: ""

	objetoProjetos.map((state, index) => {
		return { ...state, indexNumber: index }
	})

	const indexAtivoModal = stateModalIsOpen.findIndex(
		(state) => state === true
	)

	let projetoAtivoModal: any = projetosComIndex.filter(
		(state) => state.indexNumber === indexAtivoModal
	)
	projetoAtivoModal = projetoAtivoModal[0]

	return (
		<>
			<SecaoProjetos
				activeLanguage={activeLanguage}
				updateObject={updateObject}
			/>

			<ModalAberta
				setStateModalIsOpen={setStateModalIsOpen}
				projetoAtivoModal={projetoAtivoModal}
				stateModalIsOpen={stateModalIsOpen}
			/>
		</>
	)
}

type SecaoProjetosProps = PropActiveLanguage & {
	updateObject: any
}

function SecaoProjetos({ activeLanguage, updateObject }: SecaoProjetosProps) {
	const objetoProjetosFinal =
		activeLanguage === "english"
			? objetoProjetosIngles
			: activeLanguage === "portuguese"
			? objetoProjetos
			: objetoProjetos

	return (
		<div className="d-flex flex-column flex-lg-row flex-wrap justify-content-lg-center w-100 gap-4 gap-lg-5">
			{objetoProjetosFinal.map((projeto, index) => {
				return (
					<UmProjeto
						index={index}
						activeLanguage={activeLanguage}
						projeto={projeto}
						updateObject={updateObject}
					/>
				)
			})}
		</div>
	)
}

type ModalAbertaProps = {
	stateModalIsOpen: any
	projetoAtivoModal: any
	setStateModalIsOpen: any
}

function ModalAberta({
	stateModalIsOpen,
	projetoAtivoModal,
	setStateModalIsOpen
}: ModalAbertaProps) {
	function fecharModal() {
		document.body.classList.remove("stop-scroll")
		setStateModalIsOpen(
			stateModalIsOpen.map((state) => {
				return (state = false)
			})
		)
	}

	return (
		<>
			{stateModalIsOpen.filter((state) => state === true).length == 1 ? (
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
