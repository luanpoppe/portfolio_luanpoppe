import React from "react"
import { AboutMeContentStyled, AboutMeStyled } from "./styles"
import TituloSecao from "../TituloSecao"
import ImagemSecao from "../ImagemSecao"
import { imagemSecaoSobreMim } from "../../utils/images"
import { aboutMeTexts } from "../../utils/textos/aboutMe"
import { sobreMimTexto } from "../../utils/textos/titles"

function AboutMe(props) {
	return (
		<AboutMeStyled maxWidth={props.maxWidth}>
			<TituloSecao id="sobre-mim">
				{props.activeLanguage === "english"
					? sobreMimTexto.en
					: props.activeLanguage === "portuguese"
					? sobreMimTexto.ptbr
					: ""}
			</TituloSecao>
			<AboutMeContentStyled>
				<div className="imagem-sobre-mim-mobile">
					<ImagemSecao src={imagemSecaoSobreMim} />
				</div>
				<div>
					<p>
						{props.activeLanguage === "english"
							? aboutMeTexts.paragraph1.en
							: props.activeLanguage === "portuguese"
							? aboutMeTexts.paragraph1.ptbr
							: ""}
					</p>
					<p>
						{props.activeLanguage === "english"
							? aboutMeTexts.paragraph2.en
							: props.activeLanguage === "portuguese"
							? aboutMeTexts.paragraph2.ptbr
							: ""}
						{/* Atualmente atuo como desenvolvedor front-end, enquanto
						realizo curso da plataforma da EBAC para me tornar
						Desenvolvedor Fullstack, com previsão de término para o
						fim de 2023. Possuo como pilares de meu trabalho:
						comprometimento, inspirar confiança, bom trabalho em
						equipe, busca por soluções eficazes, aprendizado
						contínuo. */}
					</p>
				</div>
				<ImagemSecao
					src={imagemSecaoSobreMim}
					className="imagem-sobre-mim-pc"
				/>
			</AboutMeContentStyled>
		</AboutMeStyled>
	)
}

export default AboutMe
