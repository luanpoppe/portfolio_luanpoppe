import {
	ContainerStyled,
	EachProjectStyled,
	ProjectImage,
	ProjectTitle,
} from "./styles";

import "../../globalStyles.css";

const Projetos = (props) => {
	return (
		<ContainerStyled
			className={props.fadeIn ? "fadeIn" : ""}
			onAnimationEnd={() => {
				props.setFadeIn(false);
			}}
		>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<p>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</p>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<p>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</p>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<p>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</p>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<p>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</p>
			</EachProjectStyled>
			<EachProjectStyled>
				<ProjectTitle>Nome do Projeto</ProjectTitle>
				<ProjectImage>
					<img src="https://via.placeholder.com/120x120" alt="" />
				</ProjectImage>
				<p>
					Descrição do projeto. Este projeto foi desenvolvido utilizando o React
				</p>
			</EachProjectStyled>
		</ContainerStyled>
	);
};

export default Projetos;
