import * as S from "./styles";
import "../../globalStyles.css";

import fotoPerfil from "../../images/foto_perfil.jpg";
import Projetos from "../Projetos";

const Main = (props) => {
	if (props.mostrarInicio) {
		return (
			<S.MainStyled
				className={props.fadeIn ? "fadeIn" : ""}
				onAnimationEnd={() => {
					props.setFadeIn(false);
				}}
			>
				<S.ProfileImageStyled src={fotoPerfil} />
				<S.SubContainerStyled>
					<S.TitleStyled style={{ animationDelay: "0s" }}>
						Luan Poppe
					</S.TitleStyled>
					<S.TitleStyled style={{ animationDelay: "0.5s" }}>
						Desenvolvedor Front-end
					</S.TitleStyled>
					<S.PStyled style={{ animationDelay: "1s" }}>
						Possuo experiência na criação de projetos utilizando as tecnologias
						descritas abaixo. Para saber mais sobre minha trajetória na
						programação,{" "}
						<S.botaoStyled
							onClick={() => {
								props.setFalseValues();
								props.setMostrarBio(true);
								props.setFadeIn(true);
							}}
						>
							clique aqui
						</S.botaoStyled>
						.
					</S.PStyled>
					<S.listaStyled style={{ animationDelay: "1s" }}>
						<div>
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript</li>
						</div>
						<div>
							<li>React</li>
							<li>Bootstrap</li>
							<li>NodeJS</li>
						</div>
					</S.listaStyled>
				</S.SubContainerStyled>
			</S.MainStyled>
		);
	} else if (props.mostrarBio) {
		return (
			<S.MainStyled
				className={props.fadeIn ? "fadeIn" : ""}
				onAnimationEnd={() => {
					props.setFadeIn(false);
				}}
			>
				<S.ProfileImageStyled src={fotoPerfil} />
				<S.SubContainerStyled>
					<S.bioContainerStyled>
						<S.TitleStyled>Minha trajetória</S.TitleStyled>
						<S.PStyled>
							Iniciei minha jornada profissional como médico, e me encantei pela
							área de programação ao buscar soluções para o dia a dia de meu
							antigo trabalho. Após iniciar o estudo na área de tecnologia de
							forma autodidata, continuo sempre buscando e adquirindo novos
							conhecimentos e aptidões.
						</S.PStyled>
						<S.PStyled>
							Atualmente atuo como desenvolvedor front-end, enquanto realizo
							curso da plataforma da EBAC para me tornar Desenvolvedor
							Fullstack, com previsão de término para o fim de 2023.
						</S.PStyled>
						<S.PStyled>
							Possuo como pilares de meu trabalho: comprometimento, inspirar
							confiança, bom trabalho em equipe, busca por soluções eficazes,
							aprendizado contínuo.
						</S.PStyled>
						<S.botaoStyled
							onClick={() => {
								props.setFalseValues();
								props.setMostrarInicio(true);
								props.setFadeIn(true);
							}}
						>
							Voltar
						</S.botaoStyled>
					</S.bioContainerStyled>
				</S.SubContainerStyled>
			</S.MainStyled>
		);
	} else if (props.varMostrarProjetos) {
		return <Projetos setFadeIn={props.setFadeIn} fadeIn={props.fadeIn} />;
	}
};

export default Main;
