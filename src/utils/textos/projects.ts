type ProjectCardMeta = {
	colSpan: string
	featured?: boolean
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
	"https://github.com/luanpoppe/landing-page-julia",
	"https://github.com/luanpoppe/M_35-eplay",
	"https://github.com/luanpoppe/portfolio_luanpoppe",
	"https://github.com/luanpoppe/M_29_portfolio_GitHub-react",
	"https://github.com/luanpoppe/M_22-ebac-tech-talks",
	"https://github.com/luanpoppe/M_21_Clone_Disney_Plus"
] as const

export const projectsCardMeta: Record<
	(typeof projectsDisplayOrder)[number],
	ProjectCardMeta
> = {
	"https://github.com/luanpoppe/landing-page-julia": {
		colSpan: "md:col-span-8",
		shortDescription: {
			ptbr: "Site desenvolvido a pedido de uma amiga em transição de carreira, com foco em apresentar seus projetos de design de interface e experiência.",
			en: "Website built for a friend transitioning careers, focused on showcasing her UI/UX design projects."
		}
	},
	"https://github.com/luanpoppe/M_35-eplay": {
		colSpan: "md:col-span-4",
		featured: true,
		shortDescription: {
			ptbr: "E-commerce de games construído durante os últimos módulos do curso da EBAC, com gerenciamento de estado global via Redux.",
			en: "Games e-commerce built during the final EBAC course modules, with global state management via Redux."
		}
	},
	"https://github.com/luanpoppe/portfolio_luanpoppe": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Versão anterior deste portfólio, criada para apresentar minhas habilidades e trabalhos como desenvolvedor.",
			en: "Previous version of this portfolio, created to showcase my skills and work as a developer."
		}
	},
	"https://github.com/luanpoppe/M_29_portfolio_GitHub-react": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Site desenvolvido durante o curso de front-end da EBAC consumindo a API pública do GitHub.",
			en: "Website built during the EBAC front-end course using GitHub's public API."
		}
	},
	"https://github.com/luanpoppe/M_22-ebac-tech-talks": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Plataforma de divulgação de palestras técnicas, construída como projeto integrador do curso.",
			en: "Technical talks platform built as the course capstone project."
		}
	},
	"https://github.com/luanpoppe/M_21_Clone_Disney_Plus": {
		colSpan: "md:col-span-6",
		shortDescription: {
			ptbr: "Recriação fiel da interface da Disney+ com foco em layout responsivo, animações suaves e componentização.",
			en: "Faithful Disney+ interface recreation focused on responsive layout, smooth animations, and componentization."
		}
	}
}
