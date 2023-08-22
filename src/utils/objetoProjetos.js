import {
	cloneDisneyPlus,
	ebacTechTalks,
	eplayImagem,
	gameShop,
	gamesBootstrap,
	portfolioGithub,
	todoListReact
} from "./images"

const objetoProjetos = [
	{
		nome: "EPLAY",
		imagem: eplayImagem,
		descricao:
			"Realizei o desenvolvimento deste site ao longo dos últimos módulos do curso da EBAC. Neste projeto, utilizei os conhecimentos adquiridos ao longo do curso em HTML, CSS, Javascript, utilizando o React para auxiliar no desenvolvimento do projeto, o Styled Components para criação de componentes já estilizados por CSS, e o Redux para gestão de estados do mesmo.",
		link: "https://eplay-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_35-eplay",
		habilidades: [
			"React",
			"Javascript",
			"Typescript",
			"Styled Components",
			"Redux"
		],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "To-Do List",
		imagem: todoListReact,
		descricao:
			"Desenvolvi este site seguindo as aulas do curso de front-end da EBAC. O site funciona como uma lista de tarefas dinâmica, onde pode ser realizada a edição de tarefas, assim como adição, exclusão, bem como é possível filtrar as mesmas.",
		link: "https://to-do-list-react-lac.vercel.app/",
		github: "https://github.com/luanpoppe/M_31-To-Do_List_React",
		habilidades: ["React", "Javascript", "Typescript", "Styled Components"],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "Portfólio GitHub",
		imagem: portfolioGithub,
		descricao:
			"Desenvolvi este site seguindo o curso do curso de front-end da EBAC. Nele, pude treinar a criação de componentes utilizando o React, bem como utilizei protocolos AJAX para realizar a integralçai do site com uma API pública que o github disponibiliza sobre meu próprio perfil. O site também conta com a opção de você escolher entre o tema claro e escuro, o que personaliza ainda mais a experiência do usuário.",
		link: "https://portfolio-git-hub-react.vercel.app/",
		github: "https://github.com/luanpoppe/M_29_portfolio_GitHub-react",
		habilidades: ["React", "Javascript", "Ajax", "Styled Components"],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "Ebac Tech Talks",
		imagem: ebacTechTalks,
		descricao:
			"Esta landing page foi desenvolvida utilizando apenas HTML, CSS e Javascript. Para o CSS, utilizei a linguagem de pré-processamento SASS para facilitar a estilização dos elementos. Também desenvolvi habilidades de trabalhar com datas e horários na linguagem do Javascript. Trago também como destaque a animação dos componentes do site conforme o usuário vai utilizando o scroll para ver todas as áreas do site.",
		link: "https://ebac-tech-talks-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_22-ebac-tech-talks",
		habilidades: ["HTML", "CSS", "Javascript", "SASS"],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "Clone da Disney Plus",
		imagem: cloneDisneyPlus,
		descricao:
			"Neste projeto, realizado durante o curso de front-end da EBAC, desenvolvi um clone do site inicial do serviço de streaming Disney Plus. Para isto, utilizei os conhecimentos adquiridos em HTML e CSS, além de ter desenvolvido experiência utilizando o Bootstrap para auxiliar na estilização do site. Desta forma, é possível navegar de forma agradável através das seções do site. Como destaque, também realizei a criação de um seção de perguntas frequentes utilizando o Bootstrap como auxílio.",
		link: "https://disney-plus-clone-weld.vercel.app/",
		github: "https://github.com/luanpoppe/M_21_Clone_Disney_Plus",
		habilidades: ["HTML", "CSS", "Bootstrap", "SASS", "Javascript"],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "Luan Pope Games",
		imagem: gamesBootstrap,
		descricao:
			"Este site foi desenvolvido utilizando os conceitos básicos de HTML e CSS, bem como utilizando o Bootstrap para auxiliar durtante a estilização dos elementos. Use tamém o pré-processador SASS para também auxiliar e agilizar a estilização do site. O site também foi feito de forma a ser devidamente responsivo a dispositivos de diferentes tamanhos.",
		link: "https://loja-games-bootstrap.vercel.app/",
		github: "https://github.com/luanpoppe/E_14-Loja_Games_bootstrap",
		habilidades: ["HTML", "CSS", "Bootstrap", "SASS"],
		isModalOpen: false,
		indexNumber: ""
	},
	{
		nome: "Games Shop",
		imagem: gameShop,
		descricao:
			"Meu primeiro site desenvolvido logo no começo do curso de front-end que estou realizando pela plataforma da EBAC. Este site foi desenvolvido utilizando apenas HTML e CSS, mostrando como mesmo utilizando apenas o conceitos básicos e iniciais do front-end, ainda é possível o desenvolvimento de páginas web bonitas e funcionais.",
		link: "https://game-shop-ebac-gamma.vercel.app/",
		github: "https://github.com/luanpoppe/M_05-game-shop",
		habilidades: ["HTML", "CSS"],
		isModalOpen: false,
		indexNumber: ""
	}
]

export { objetoProjetos }
