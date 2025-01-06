import React from "react"
import styled from "styled-components"
import * as I from "../../utils/images"
import { fontMobileTitleIcons, fontTitleIcons } from "../../utils/fontSizes"
import { widthTablet } from "../../utils/mediaQuery"

const objetoHabilidades = [
	{ nome: "HTML", imagem: I.htmlIcon },
	{ nome: "CSS", imagem: I.cssIcon },
	{ nome: "JavaScript", imagem: I.javascriptIcon },
	{ nome: "TypeScript", imagem: I.typescriptIcon },
	{ nome: "Angular", imagem: I.angualrIcon },
	{ nome: "Django", imagem: I.djangoIcon },
	{ nome: "Django REST", imagem: I.djangoRestIcon },
	{ nome: "React", imagem: I.reactIcon },
	{ nome: "Redux", imagem: I.reduxIcon },
	{ nome: "Jest", imagem: I.jestIcon },
	{ nome: "Bootstrap", imagem: I.bootstrapIcon },
	{ nome: "SASS", imagem: I.sassIcon },
	{ nome: "LESS", imagem: I.lessIcon },
	{ nome: "NodeJS", imagem: I.nodejsIcon },
	{ nome: "Git", imagem: I.gitIcon },
	{ nome: "Python", imagem: I.pythonIcon }
]

const ImgIcons = styled.img`
	max-height: 130px;
	max-width: 130px;
`

const TituloHabilidade = styled.div`
	font-size: ${fontTitleIcons};

	@media (max-width: ${widthTablet}) {
		font-size: ${fontMobileTitleIcons};
	}
`

const ContainerHabilidades = styled.div`
	border: 2px solid white;
	padding: 16px;
	border-radius: 8px;
	box-shadow: rgba(255, 255, 255, 0.3) 0px 3px 8px;
	min-width: 120px;

	&:hover {
		box-shadow: rgba(255, 255, 255, 0.5) 0px 6px 16px;
		transform: scale(1.05);
		transition: all ease 350ms;
	}
`

export function ImagensHabilidades() {
	return (
		<>
			{objetoHabilidades.map((h) => (
				<ContainerHabilidades key={h.nome} className="d-flex flex-column-aic gap-2 col-4 col-sm-5 col-lg-3 hidden">
					<TituloHabilidade className="text-center fw-bold fs-4">
						{h.nome}
					</TituloHabilidade>
					<ImgIcons src={h.imagem} alt={h.nome} className="w-100" />
				</ContainerHabilidades>
			))}
		</>
	)
}
