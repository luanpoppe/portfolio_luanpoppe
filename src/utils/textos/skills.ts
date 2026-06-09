import type { StaticImageData } from "next/image"
import {
	angualrIcon,
	bootstrapIcon,
	cssIcon,
	djangoIcon,
	djangoRestIcon,
	gitIcon,
	htmlIcon,
	javascriptIcon,
	jestIcon,
	lessIcon,
	nodejsIcon,
	pythonIcon,
	reactIcon,
	reduxIcon,
	sassIcon,
	typescriptIcon
} from "@/utils/images"

export const skillsTexts = {
	sectionLabel: {
		ptbr: "02 — Habilidades",
		en: "02 — Skills"
	},
	title: {
		ptbr: "Tecnologias que uso",
		en: "Technologies I use"
	},
	titleMuted: {
		ptbr: "no dia a dia.",
		en: "day to day."
	},
	description: {
		ptbr: "Do front-end ao back-end, da automação à entrega — um conjunto versátil para resolver problemas reais.",
		en: "From front-end to back-end, from automation to delivery — a versatile set to solve real problems."
	}
}

export type SkillItem = {
	name: string
	image: string | StaticImageData
}

export const skillsList: SkillItem[] = [
	{ name: "HTML", image: htmlIcon },
	{ name: "CSS", image: cssIcon },
	{ name: "JavaScript", image: javascriptIcon },
	{ name: "TypeScript", image: typescriptIcon },
	{ name: "Angular", image: angualrIcon },
	{ name: "Django", image: djangoIcon },
	{ name: "Django REST", image: djangoRestIcon },
	{ name: "React", image: reactIcon },
	{ name: "Redux", image: reduxIcon },
	{ name: "Jest", image: jestIcon },
	{ name: "Bootstrap", image: bootstrapIcon },
	{ name: "SASS", image: sassIcon },
	{ name: "LESS", image: lessIcon },
	{ name: "NodeJS", image: nodejsIcon },
	{ name: "Git", image: gitIcon },
	{ name: "Python", image: pythonIcon }
]
