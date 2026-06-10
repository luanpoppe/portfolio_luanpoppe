import type { StaticImageData } from "next/image"
import {
	typescriptIcon,
	nodejsIcon,
	nestjsIcon,
	langchainIcon,
	langgraphIcon,
	cursorIcon,
	claudeCodeIcon,
	dockerIcon,
	pythonIcon,
	zodIcon,
	fastifyIcon,
	redisIcon,
	postgresIcon,
	bullmqIcon,
	expressIcon,
	reactIcon,
	nextjsIcon,
	reduxIcon,
	tailwindIcon,
	shadcnIcon,
	ollamaIcon,
	djangoIcon,
	vitestIcon,
	jestIcon,
	angualrIcon,
	javascriptIcon,
	gitIcon
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
		ptbr: "Do front-end ao back-end, da inteligência artificial à infraestrutura. Um conjunto versátil para construir soluções escaláveis e resilientes.",
		en: "From front-end to back-end, from artificial intelligence to infrastructure. A versatile stack to build scalable and resilient solutions."
	}
}

export type SkillItem = {
	name: string
	image: string | StaticImageData
}

export const skillsList: SkillItem[] = [
	{ name: "TypeScript", image: typescriptIcon },
	{ name: "Node.js", image: nodejsIcon },
	{ name: "NestJS", image: nestjsIcon },
	{ name: "LangChain", image: langchainIcon },
	{ name: "LangGraph", image: langgraphIcon },
	{ name: "Cursor", image: cursorIcon },
	{ name: "Claude Code", image: claudeCodeIcon },
	{ name: "Docker", image: dockerIcon },
	{ name: "Python", image: pythonIcon },
	{ name: "Zod", image: zodIcon },
	{ name: "Fastify", image: fastifyIcon },
	{ name: "Redis", image: redisIcon },
	{ name: "Postgres", image: postgresIcon },
	{ name: "BullMQ", image: bullmqIcon },
	{ name: "Express", image: expressIcon },
	{ name: "React", image: reactIcon },
	{ name: "Next.js", image: nextjsIcon },
	{ name: "Redux", image: reduxIcon },
	{ name: "Tailwind CSS", image: tailwindIcon },
	{ name: "shadcn/ui", image: shadcnIcon },
	{ name: "Ollama", image: ollamaIcon },
	{ name: "Django", image: djangoIcon },
	{ name: "Vitest", image: vitestIcon },
	{ name: "Jest", image: jestIcon },
	{ name: "Angular", image: angualrIcon },
	{ name: "JavaScript", image: javascriptIcon },
	{ name: "Git", image: gitIcon }
]
