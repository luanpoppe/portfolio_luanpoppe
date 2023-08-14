import React from "react"
import { AboutMeContentStyled, AboutMeStyled } from "./styles"
import TituloSecao from "../TituloSecao"
import ImagemSecao from "../ImagemSecao"
import { imagemSecaoSobreMim } from "../../utils/images"

function AboutMe() {
	return (
		<AboutMeStyled>
			<TituloSecao id="sobre-mim">Sobre Mim</TituloSecao>
			<AboutMeContentStyled>
				<div>
					<p>
						Iniciei minha jornada profissional como médico, e me
						encantei pela área de programação ao buscar soluções
						para o dia a dia de meu antigo trabalho. Após iniciar o
						estudo na área de tecnologia de forma autodidata,
						continuo sempre buscando e adquirindo novos
						conhecimentos e aptidões.
					</p>
					<p>
						Atualmente atuo como desenvolvedor front-end, enquanto
						realizo curso da plataforma da EBAC para me tornar
						Desenvolvedor Fullstack, com previsão de término para o
						fim de 2023. Possuo como pilares de meu trabalho:
						comprometimento, inspirar confiança, bom trabalho em
						equipe, busca por soluções eficazes, aprendizado
						contínuo.
					</p>
				</div>
				<ImagemSecao src={imagemSecaoSobreMim} />
			</AboutMeContentStyled>
		</AboutMeStyled>
	)
}

export default AboutMe
