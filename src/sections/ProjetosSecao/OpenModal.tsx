import { Modal } from "react-bootstrap"
import styled from "styled-components"
import { corPadraoDeFundo } from "../../utils/colors"
import { ImagemProjeto } from "./ImagemProjeto"
import { TagsHabilidades } from "./TagsHabilidades"
import { BotaoAcesseOProjeto, BotaoGitHub } from "./RedirecionamentoProjeto"
import { IoCloseSharp } from "react-icons/io5"

type ModalAbertaProps = PropActiveLanguage & {
	setIndexProjetoAtivo: SetState<number>
	indexProjetoAtivo: number
	projetosComIndex: Projeto[]
}

export function OpenModal(props: ModalAbertaProps) {
	const {
		setIndexProjetoAtivo,
		indexProjetoAtivo,
		projetosComIndex,
		activeLanguage
	} = props
	const projetoAtivo =
		indexProjetoAtivo || indexProjetoAtivo == 0
			? projetosComIndex[indexProjetoAtivo]
			: null

	function handleClose() {
		setIndexProjetoAtivo(null)
	}

	const isModalOpen =
		indexProjetoAtivo == 0 || indexProjetoAtivo ? true : false
	return (
		<ProjectModalStyled
			show={isModalOpen}
			onHide={handleClose}
			className="m-0 p-3 p-md-0"
		>
			<Modal.Dialog size="lg" className="m-0">
				<Modal.Body className="d-flex flex-column jcc aic gap-2 mb-4">
					<div className="w-100 d-flex justify-content-end mb-3">
						<IoCloseSharp
							size={28}
							className="cursor-pointer"
							onClick={handleClose}
						/>
					</div>
					<ImagemProjeto projeto={projetoAtivo} />
					<h2 className="mt-3 mb-0">{projetoAtivo?.nome}</h2>

					<TagsHabilidades projeto={projetoAtivo} />

					<p className="text-justify">{projetoAtivo?.descricao}</p>

					<div className="d-flex flex-column flex-sm-row jcc aic column-gap-4 row-gap-3">
						<BotaoAcesseOProjeto
							activeLanguage={activeLanguage}
							projeto={projetoAtivo}
						/>
						<BotaoGitHub
							projeto={projetoAtivo}
							isInModal={true}
							activeLanguage={activeLanguage}
						/>
					</div>
				</Modal.Body>
			</Modal.Dialog>
		</ProjectModalStyled>
	)
}

const ProjectModalStyled = styled(Modal)`
	--bs-modal-border-radius: 6px;

	.modal-content {
		background-color: ${corPadraoDeFundo};
	}
`
