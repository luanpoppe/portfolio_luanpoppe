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
			<OldProjects />

			{/* <EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<DescricaoProjeto>
					<DescricaoProjeto>
						Descrição do projeto. Este projeto foi desenvolvido utilizando o
						React
					</DescricaoProjeto>
				</DescricaoProjeto>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<DescricaoProjeto>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</DescricaoProjeto>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<DescricaoProjeto>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</DescricaoProjeto>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<DescricaoProjeto>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</DescricaoProjeto>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<DescricaoProjeto>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</DescricaoProjeto>
			</EachProjectStyled> */}
		</ContainerStyled>
	);
};

export default Projetos;
