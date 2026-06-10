import {
	cloneDisneyPlus,
	ebacTechTalks,
	eplayImagem,
	portfolioGithub,
	sitePessoalPortfolio,
	sitePortfolioJulia
} from "./images"

export const objetoProjetos: Projeto[] = [
	{
		nome: "@luanpoppe/ai (SDK NPM)",
		imagem: portfolioGithub, // Placeholder
		descricao:
			"SDK open-source em TypeScript que atua como uma Facade unificada para LLMs e Agentes Autônomos. Abstrai a complexidade do LangChain para Node.js, oferecendo padronização híbrida de provedores (OpenAI, Gemini, Ollama, OpenRouter), validação de JSON estruturado nativa com Zod e gestão de memória com checkpointers do LangGraph.",
		link: "https://www.npmjs.com/package/@luanpoppe/ai",
		github: "https://github.com/luanpoppe/ai",
		habilidades: ["TypeScript", "Node.js", "LangChain", "Zod", "LLMs"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "The Right Movie Choice API",
		imagem: portfolioGithub, // Placeholder
		descricao:
			"API de recomendação de filmes com Inteligência Artificial construída com Node.js, Fastify, Zod, Redis e Google Gemini. O sistema utiliza processamento de linguagem natural para sugerir filmes com base nas preferências do usuário, com cache em Redis para alta performance.",
		link: "https://github.com/luanpoppe/the-right-movie-choice",
		github: "https://github.com/luanpoppe/the-right-movie-choice",
		habilidades: ["Node.js", "Fastify", "Redis", "Gemini AI", "Zod"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Portfólio Pessoal",
		imagem: sitePessoalPortfolio,
		descricao:
			"SPA mobile-first desenvolvida com React, TypeScript e Tailwind CSS (migrando para Next.js). O projeto reflete minha evolução como desenvolvedor, focado em performance, acessibilidade e design responsivo, com CI/CD configurado via Vercel.",
		link: "https://portfolio-luanpoppe-frontend.vercel.app/",
		github: "https://github.com/luanpoppe/portfolio_luanpoppe",
		habilidades: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "E-commerce de Games (EPLAY)",
		imagem: eplayImagem,
		descricao:
			"Front-end SPA de um e-commerce de games construído com React e Redux Toolkit para gerenciamento global de estado (carrinho e autenticação). Integração com APIs RESTful e estilização componentizada.",
		link: "https://eplay-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_35-eplay",
		habilidades: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Portfólio de UI/UX",
		imagem: sitePortfolioJulia,
		descricao:
			"Site desenvolvido para uma profissional de UX/UI Design. O objetivo foi criar uma plataforma flexível e de alta performance para exibir seus estudos de caso, superando as limitações de ferramentas no-code.",
		link: "https://landing-page-julia-sigma.vercel.app/",
		github: "https://github.com/luanpoppe/landing-page-julia",
		habilidades: ["React", "TypeScript", "Styled Components", "Context API"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Ebac Tech Talks",
		imagem: ebacTechTalks,
		descricao:
			"Landing page responsiva desenvolvida com HTML, SASS e JavaScript Vanilla. Foco em animações de scroll, manipulação de datas/horários e otimização de performance sem uso de frameworks pesados.",
		link: "https://ebac-tech-talks-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_22-ebac-tech-talks",
		habilidades: ["HTML", "SASS", "JavaScript", "CSS Animations"],
		isModalOpen: false,
		indexNumber: null as any
	}
]

export const objetoProjetosIngles: Projeto[] = [
	{
		nome: "@luanpoppe/ai (NPM SDK)",
		imagem: portfolioGithub,
		descricao:
			"Open-source TypeScript SDK acting as a unified Facade for LLMs and Autonomous Agents. It abstracts LangChain complexity for Node.js, offering hybrid provider standardization (OpenAI, Gemini, Ollama, OpenRouter), native structured JSON validation with Zod, and memory management with LangGraph checkpointers.",
		link: "https://www.npmjs.com/package/@luanpoppe/ai",
		github: "https://github.com/luanpoppe/ai",
		habilidades: ["TypeScript", "Node.js", "LangChain", "Zod", "LLMs"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "The Right Movie Choice API",
		imagem: portfolioGithub,
		descricao:
			"AI-powered movie recommendation API built with Node.js, Fastify, Zod, Redis, and Google Gemini. The system uses natural language processing to suggest movies based on user preferences, with Redis caching for high performance.",
		link: "https://github.com/luanpoppe/the-right-movie-choice",
		github: "https://github.com/luanpoppe/the-right-movie-choice",
		habilidades: ["Node.js", "Fastify", "Redis", "Gemini AI", "Zod"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Personal Portfolio",
		imagem: sitePessoalPortfolio,
		descricao:
			"Mobile-first SPA developed with React, TypeScript, and Tailwind CSS (migrating to Next.js). The project reflects my evolution as a developer, focusing on performance, accessibility, and responsive design, with CI/CD configured via Vercel.",
		link: "https://portfolio-luanpoppe-frontend.vercel.app/",
		github: "https://github.com/luanpoppe/portfolio_luanpoppe",
		habilidades: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Games E-commerce (EPLAY)",
		imagem: eplayImagem,
		descricao:
			"Front-end SPA for a games e-commerce built with React and Redux Toolkit for global state management (cart and authentication). Integration with RESTful APIs and componentized styling.",
		link: "https://eplay-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_35-eplay",
		habilidades: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "UI/UX Portfolio",
		imagem: sitePortfolioJulia,
		descricao:
			"Website developed for a UX/UI Design professional. The goal was to create a flexible and high-performance platform to showcase her case studies, overcoming the limitations of no-code tools.",
		link: "https://landing-page-julia-sigma.vercel.app/",
		github: "https://github.com/luanpoppe/landing-page-julia",
		habilidades: ["React", "TypeScript", "Styled Components", "Context API"],
		isModalOpen: false,
		indexNumber: null as any
	},
	{
		nome: "Ebac Tech Talks",
		imagem: ebacTechTalks,
		descricao:
			"Responsive landing page developed with HTML, SASS, and Vanilla JavaScript. Focused on scroll animations, date/time manipulation, and performance optimization without using heavy frameworks.",
		link: "https://ebac-tech-talks-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_22-ebac-tech-talks",
		habilidades: ["HTML", "SASS", "JavaScript", "CSS Animations"],
		isModalOpen: false,
		indexNumber: null as any
	}
]
