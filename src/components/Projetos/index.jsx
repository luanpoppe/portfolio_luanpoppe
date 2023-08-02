import {
	ContainerStyled,
	DescricaoProjeto,
	EachProjectStyled,
	ProjectImage,
	ProjectTitle,
} from "./styles";

import "../../globalStyles.css";
import infoProjetos from "../../utils/infosProjetos";
import OldProjects from "../OldProjects";

const Projetos = (props) => {
	return (
		<>
			<ContainerStyled
				className={props.fadeIn ? "fadeIn" : ""}
				onAnimationEnd={() => {
					props.setFadeIn(false);
				}}
			>
				{infoProjetos.map((projeto, indexProjeto) => {
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
			<OldProjects />
		</>
	);
};

export default Projetos;
