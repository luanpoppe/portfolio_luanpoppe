import React from "react"

import {
	AcessarCurriculoStyled,
	ContactIconsStyled,
	EntreEmContatoStyled,
	HeroStyled,
	HeroTextStyled,
	ContainerEntreEmContatoStyled
} from "./styles"
import {
	fotoPerfilLuan,
	githubIcon,
	gmailIcon,
	linkedinIcon
} from "../../utils/images"
import { heroTexts } from "../../utils/textos/hero"
import { getTextLang } from "../../utils/textos/funcs"

function Hero(props) {
	return (
		<HeroStyled maxWidth={props.maxWidth} id="hero">
			<img src={fotoPerfilLuan} alt="Foto de Perfil" />
			<HeroTextStyled>
				<h1>
					{getTextLang(heroTexts.mainText[0], props.activeLanguage)}
					<span>Poppe</span>
					{getTextLang(heroTexts.mainText[1], props.activeLanguage)}
					<span> front-end</span>
					{getTextLang(heroTexts.mainText[2], props.activeLanguage)}
				</h1>
				<p>
					{getTextLang(heroTexts.secondaryText, props.activeLanguage)}
				</p>
				<div className="container-acessar-curriculo">
					<AcessarCurriculoStyled
						href="https://drive.google.com/file/d/1fd20PJj6w6JqNqwimLdGh7stiu9Q2yRR/view?usp=sharing"
						target="_blank"
					>
						<p>
							{props.activeLanguage === "english"
								? heroTexts.menores.curriculo.en
								: props.activeLanguage === "portuguese"
								? heroTexts.menores.curriculo.ptbr
								: ""}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="w-full h-auto ml-1 !w-6 md:!w-4"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
								></path>
							</svg>
						</p>{" "}
					</AcessarCurriculoStyled>
					<ContainerEntreEmContatoStyled>
						<EntreEmContatoStyled>
							{props.activeLanguage === "english"
								? heroTexts.menores.contato.en
								: props.activeLanguage === "portuguese"
								? heroTexts.menores.contato.ptbr
								: ""}
						</EntreEmContatoStyled>
						<div className="container-icones">
							<a
								target="_blank"
								href="https://github.com/luanpoppe"
								title="GitHub"
								rel="noreferrer"
							>
								<ContactIconsStyled
									src={githubIcon}
									alt="GitHub"
								/>
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/luan-poppe/"
								title="LinkedIn"
								rel="noreferrer"
							>
								<ContactIconsStyled
									src={linkedinIcon}
									alt="LinkedIn"
								/>
							</a>
							<a
								href="mailto:luanpoppe@gmail.com"
								title="Entre em Contato"
							>
								<ContactIconsStyled
									src={gmailIcon}
									alt="Gmail"
								/>
							</a>
						</div>
					</ContainerEntreEmContatoStyled>
				</div>
			</HeroTextStyled>
		</HeroStyled>
	)
}

export default Hero
