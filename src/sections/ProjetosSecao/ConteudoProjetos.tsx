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
import { closeModal, defineProjectsIndexes } from "./utils"

type Props = PropActiveLanguage & {
	stateModalIsOpen: boolean[]
	updateObject: (paramIndex: number) => void
	setStateModalIsOpen: SetState<boolean[]>
}

export function ConteudoProjetos(props: Props) {
	const {
		activeLanguage,
		stateModalIsOpen,
		setStateModalIsOpen,
		updateObject
	} = props

	const projetosComIndex = defineProjectsIndexes(activeLanguage)

	const indexAtivoModal = stateModalIsOpen.findIndex(
		(state) => state === true
	)

	const projetoAtivoModal: Projeto = projetosComIndex.filter(
		(state) => state.indexNumber === indexAtivoModal
	)[0]

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
	updateObject: (paramIndex: number) => void
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
	stateModalIsOpen: boolean[]
	projetoAtivoModal: Projeto
	setStateModalIsOpen: SetState<boolean[]>
}

function ModalAberta(props: ModalAbertaProps) {
	const { stateModalIsOpen, projetoAtivoModal, setStateModalIsOpen } = props

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
						<CloseButtonStyled
							onClick={() =>
								closeModal(
									stateModalIsOpen,
									setStateModalIsOpen
								)
							}
						>
							<img src={closeButton} alt="Botão de fechar" />
						</CloseButtonStyled>
					</ModalStyled>
					<BackgroundStyled
						onClick={() =>
							closeModal(stateModalIsOpen, setStateModalIsOpen)
						}
					/>
				</>
			) : (
				""
			)}
		</>
	)
}
