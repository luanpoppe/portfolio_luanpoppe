import { objetoProjetos } from "../../utils/objetoProjetos"
import { CadaProjetoStyled, TagsHabilidadesStyled } from "./styles"

const ConteudoProjetos = (props) => {
	return (
		<div>
			{objetoProjetos.map((projeto, indexProjeto) => (
				<CadaProjetoStyled key={projeto.nome}>
					<img src={projeto.imagem} alt={projeto.nome} />
					<div>
						<h2>{projeto.nome}</h2>
						<TagsHabilidadesStyled>
							{projeto.habilidades.map((tag) => (
								<p key={tag}>{tag}</p>
							))}
						</TagsHabilidadesStyled>
						<p>
							{projeto.descricao
								.split(" ")
								.slice(0, 15)
								.join(" ")}
						</p>

						<button
							onClick={() => {
								props.resetarModais()
								props.setProjetosModal([
									...props.projetosModal,
									(props.projetosModal[indexProjeto].isOpen =
										!props.projetosModal[indexProjeto]
											.isOpen)
								])
								// props.setProjetosModal(
								// 	props.projetosModal.pop()
								// )
								console.log(props.projetosModal)
							}}
						>
							{props.projetosModal[indexProjeto].isOpen
								? "Ver mais"
								: ""}
						</button>
					</div>
				</CadaProjetoStyled>
			))}
		</div>
	)
}

export default ConteudoProjetos
