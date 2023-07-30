import * as S from "./styles";

import fotoPerfil from "../../images/foto_perfil.jpg";
import { useState } from "react";

const Main = () => {
	const [mostrarBio, setMostrarBio] = useState(false);
	if (mostrarBio) {
		return (
			<S.bioContainerStyled>
				<S.TitleStyled>Minha trajetória</S.TitleStyled>
				<S.PStyled>
					Iniciei minha jornada profissional como médico, e me encantei pela
					área de programação ao buscar soluções para o dia a dia de meu antigo
					trabalho. Após iniciar o estudo na área de tecnologia de forma
					autodidata, continuo sempre buscando e adquirindo novos conhecimentos
					e aptidões.
				</S.PStyled>
				<S.PStyled>
					Atualmente atuo como desenvolvedor front-end, enquanto realizo curso
					da plataforma da EBAC para me tornar Desenvolvedor Fullstack, com
					previsão de término para o fim de 2023.
				</S.PStyled>
				<S.PStyled>
					Possuo como pilares de meu trabalho: comprometimento, inspirar
					confiança, bom trabalho em equipe, busca por soluções eficazes,
					aprendizado contínuo.
				</S.PStyled>
			</S.bioContainerStyled>
		);
	} else if (!mostrarBio) {
		return (
			<S.MainStyled>
				<>
					<S.ProfileImageStyled src={fotoPerfil} />
					<S.SubContainerStyled>
						<S.TitleStyled>Luan Poppe - Desenvolvedor Front-end</S.TitleStyled>
						<S.PStyled>
							Possuo experiência na criação de projetos utilizando as
							tecnologias descritas abaixo. Para saber mais sobre minha
							trajetória na programação,{" "}
							<S.botaoStyled
								onClick={() => {
									setMostrarBio(!mostrarBio);
								}}
							>
								clique aqui
							</S.botaoStyled>
						</S.PStyled>
						<S.listaStyled>
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>React</li>
							<li>Bootstrap</li>
							<li>NodeJS</li>
						</S.listaStyled>
					</S.SubContainerStyled>
				</>
			</S.MainStyled>
		);
	}
};

export default Main;
