type ProjectCardMeta = {
	colSpan: string
	featured?: boolean
	showPreview?: boolean
	shortDescription: { ptbr: string; en: string }
}

export const projectsTexts = {
	sectionLabel: {
		ptbr: "03 — Projetos",
		en: "03 — Projects"
	},
	title: {
		ptbr: "Trabalhos selecionados.",
		en: "Selected work."
	},
	typeProject: {
		ptbr: "Projeto",
		en: "Project"
	},
	typeFeatured: {
		ptbr: "Destaque",
		en: "Featured"
	},
	access: {
		ptbr: "Acessar",
		en: "Visit"
	}
}

export const projectsDisplayOrder = [
	"https://github.com/luanpoppe/ai",
	"https://github.com/luanpoppe/the-right-movie-choice",
	"https://github.com/luanpoppe/portfolio_luanpoppe",
	"https://github.com/luanpoppe/M_35-eplay",
	"https://github.com/luanpoppe/landing-page-julia",
	"https://github.com/luanpoppe/M_22-ebac-tech-talks"
] as const

export const projectsCardMeta: Record<
	(typeof projectsDisplayOrder)[number],
	ProjectCardMeta
> = {
	"https://github.com/luanpoppe/ai": {
		colSpan: "md:col-span-8",
		featured: true,
		showPreview: false,
		shortDescription: {
			ptbr: "SDK open-source em TypeScript que atua como uma Facade unificada para LLMs e Agentes Autônomos.",
			en: "Open-source TypeScript SDK acting as a unified Facade for LLMs and Autonomous Agents."
		}
	},
	"https://github.com/luanpoppe/the-right-movie-choice": {
		colSpan: "md:col-span-4",
		showPreview: false,
		shortDescription: {
			ptbr: "API de recomendação de filmes com IA construída com Node.js, Fastify, Redis e Google Gemini.",
			en: "AI movie recommendation API built with Node.js, Fastify, Redis, and Google Gemini."
		}
	},
	"https://github.com/luanpoppe/portfolio_luanpoppe": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "SPA mobile-first desenvolvida com React, TypeScript e Tailwind CSS (migrando para Next.js).",
			en: "Mobile-first SPA developed with React, TypeScript, and Tailwind CSS (migrating to Next.js)."
		}
	},
	"https://github.com/luanpoppe/M_35-eplay": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Front-end SPA de um e-commerce de games com React e Redux Toolkit.",
			en: "Front-end SPA for a games e-commerce with React and Redux Toolkit."
		}
	},
	"https://github.com/luanpoppe/landing-page-julia": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Site de portfólio desenvolvido para uma profissional de UX/UI Design.",
			en: "Portfolio website developed for a UX/UI Design professional."
		}
	},
	"https://github.com/luanpoppe/M_22-ebac-tech-talks": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Landing page responsiva desenvolvida com HTML, SASS e JavaScript Vanilla.",
			en: "Responsive landing page developed with HTML, SASS, and Vanilla JavaScript."
		}
	}
}
