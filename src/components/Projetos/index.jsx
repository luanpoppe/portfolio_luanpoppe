import { ContainerStyled, EachProjectStyled } from "./styles";

const Projetos = () => {
	return (
		<ContainerStyled>
			<EachProjectStyled>
				<h2>Nome do Projeto</h2>
				<img src="https://via.placeholder.com/120x120" alt="" />
			</EachProjectStyled>
			<EachProjectStyled>Projeto 2</EachProjectStyled>
			<EachProjectStyled>Projeto 3</EachProjectStyled>
			<EachProjectStyled>Projeto 4</EachProjectStyled>
			<EachProjectStyled>Projeto 5</EachProjectStyled>
		</ContainerStyled>
	);
};

export default Projetos;
