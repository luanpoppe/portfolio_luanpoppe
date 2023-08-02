import { OldProjectsStyled, SubtituloStyled } from "./styles";
import infoOldProjects from "../../utils/infoOldProjects";
import {
	ContainerStyled,
	DescricaoProjeto,
	EachProjectStyled,
	ProjectImage,
	ProjectTitle,
} from "../Projetos/styles";

const OldProjects = (props) => {
	return (
		<OldProjectsStyled>
			<SubtituloStyled>Projetos Antigos/Simples</SubtituloStyled>
			<ContainerStyled
				className={props.fadeIn ? "fadeIn" : ""}
				onAnimationEnd={() => {
					props.setFadeIn(false);
				}}
			>
				{infoOldProjects.map((projeto, indexProjeto) => {
					return (
						<EachProjectStyled key={projeto.nome}>
							<a
								className="linkClicavel"
								href={projeto.linkProjeto}
								target="_blank"
							>
								<ProjectTitle>{projeto.nome}</ProjectTitle>
								<ProjectImage>
									<img src={projeto.imagem} alt={projeto.nome} />
								</ProjectImage>
							</a>
							<DescricaoProjeto>
								<DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
							</DescricaoProjeto>
						</EachProjectStyled>
					);
				})}
			</ContainerStyled>
		</OldProjectsStyled>
	);
};

export default OldProjects;
