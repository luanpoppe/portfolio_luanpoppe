import React from "react"
import styled from "styled-components"
import * as I from "../../utils/images"
import { fontMobileTitleIcons, fontTitleIcons } from "../../utils/fontSizes"
import { widthTablet } from "../../utils/mediaQuery"

const objetoHabilidades = [
	{ nome: "HTML", imagem: I.htmlIcon },
	{ nome: "CSS", imagem: I.cssIcon },
	{ nome: "JavaScript", imagem: I.javascriptIcon },
	{ nome: "React", imagem: I.reactIcon },
	{ nome: "TypeScript", imagem: I.typescriptIcon },
	{ nome: "Redux", imagem: I.reduxIcon },
	{ nome: "SASS", imagem: I.sassIcon },
	{ nome: "LESS", imagem: I.lessIcon },
	{ nome: "Bootstrap", imagem: I.bootstrapIcon },
	{ nome: "NodeJS", imagem: I.nodejsIcon },
	{ nome: "Git", imagem: I.gitIcon },
	{ nome: "Python", imagem: I.pythonIcon }
]

const ImgIcons = styled.img`
	width: 100%;

	@media (max-width: ${widthTablet}) {
		max-width: 50%;
		display: block;
		margin: 0 auto;
	}
`

const TituloHabilidade = styled.div`
	text-align: center;
	font-size: ${fontTitleIcons};
	font-weight: bold;

	@media (max-width: ${widthTablet}) {
		font-size: ${fontMobileTitleIcons};
	}
`

const ContainerHabilidades = styled.div`
	border: 2px solid white;
	padding: 16px;
	border-radius: 8px;
	box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;

	&:hover {
		box-shadow: rgba(255, 255, 255, 0.5) 0px 6px 16px;
		transform: scale(1.05);
		transition: all ease 350ms;
	}

	@media (max-width: ${widthTablet}) {
		width: 100%;
		padding: 8px;
	}
`

function ImagensHabilidades() {
	return (
		<>
			{objetoHabilidades.map((h) => (
				<ContainerHabilidades key={h.nome}>
					<TituloHabilidade>{h.nome}</TituloHabilidade>
					<ImgIcons src={h.imagem} alt={h.nome} />
				</ContainerHabilidades>
			))}
		</>
	)
}

export default ImagensHabilidades
