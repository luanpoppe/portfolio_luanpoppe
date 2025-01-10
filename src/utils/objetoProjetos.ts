import {
	cloneDisneyPlus,
	ebacTechTalks,
	eplayImagem,
	// gameShop,
	// gamesBootstrap,
	portfolioGithub,
	// todoListReact,
	sitePessoalPortfolio,
	sitePortfolioJulia
} from "./images"

const objetoProjetos: Projeto[] = [
	{
		nome: "Portfólio de UI/UX",
		imagem: sitePortfolioJulia,
		descricao:
			"Este projeto foi desenvolvido a pedido de uma amiga que está em transição de carreira para a área de UX/UI. O objetivo foi aprimorar o site que ela criou utilizando uma plataforma de criação sem código, a qual, embora útil, apresenta diversas limitações. Com isso, recriei o site, oferecendo mais flexibilidade e recursos.",
		link: "https://landing-page-julia-sigma.vercel.app/",
		github: "https://github.com/luanpoppe/landing-page-julia",
		habilidades: [
			"React",
			"Typescript",
			"React Router DOM",
			"Styled Components",
			"Bootstrap",
			"Context API"
		],
		isModalOpen: false,
		indexNumber: null
	},
	{
		nome: "Portfólio Pessoal",
		imagem: sitePessoalPortfolio,
		descricao:
			"Este projeto foi desenvolvido por mim com o objetivo de apresentar minhas habilidades e trabalhos no mundo da programação, em um site com design elegante e navegação intuitiva. A primeira versão foi criada em agosto de 2023, antes de eu adquirir minha primeira experiência profissional na área. Agora, cerca de um ano e meio depois, decidi revisitar o projeto para aprimorá-lo com os conhecimentos que adquiri ao longo desse tempo. ",
		link: "https://portfolio-luanpoppe-frontend.vercel.app/",
		github: "https://github.com/luanpoppe/portfolio_luanpoppe",
		habilidades: [
			"React",
			"Typescript",
			"Styled Components",
			"Bootstrap",
			"Context API"
		],
		isModalOpen: false,
		indexNumber: null
	},
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
		indexNumber: null
	},
	// {
	// 	nome: "To-Do List",
	// 	imagem: todoListReact,
	// 	descricao:
	// 		"Desenvolvi este site seguindo as aulas do curso de front-end da EBAC. O site funciona como uma lista de tarefas dinâmica, onde pode ser realizada a edição de tarefas, assim como adição, exclusão, bem como é possível filtrar as mesmas.",
	// 	link: "https://to-do-list-react-lac.vercel.app/",
	// 	github: "https://github.com/luanpoppe/M_31-To-Do_List_React",
	// 	habilidades: ["React", "Javascript", "Typescript", "Styled Components"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// },
	{
		nome: "Portfólio GitHub",
		imagem: portfolioGithub,
		descricao:
			"Desenvolvi este site seguindo o curso do curso de front-end da EBAC. Nele, pude treinar a criação de componentes utilizando o React, bem como utilizei protocolos AJAX para realizar a integralçai do site com uma API pública que o github disponibiliza sobre meu próprio perfil. O site também conta com a opção de você escolher entre o tema claro e escuro, o que personaliza ainda mais a experiência do usuário.",
		link: "https://portfolio-git-hub-react.vercel.app/",
		github: "https://github.com/luanpoppe/M_29_portfolio_GitHub-react",
		habilidades: ["React", "Javascript", "Ajax", "Styled Components"],
		isModalOpen: false,
		indexNumber: null
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
		indexNumber: null
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
		indexNumber: null
	}
	// {
	// 	nome: "Luan Poppe Games",
	// 	imagem: gamesBootstrap,
	// 	descricao:
	// 		"Este site foi desenvolvido utilizando os conceitos básicos de HTML e CSS, bem como utilizando o Bootstrap para auxiliar durtante a estilização dos elementos. Use tamém o pré-processador SASS para também auxiliar e agilizar a estilização do site. O site também foi feito de forma a ser devidamente responsivo a dispositivos de diferentes tamanhos.",
	// 	link: "https://loja-games-bootstrap.vercel.app/",
	// 	github: "https://github.com/luanpoppe/E_14-Loja_Games_bootstrap",
	// 	habilidades: ["HTML", "CSS", "Bootstrap", "SASS"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// },
	// {
	// 	nome: "Games Shop",
	// 	imagem: gameShop,
	// 	descricao:
	// 		"Meu primeiro site desenvolvido logo no começo do curso de front-end que estou realizando pela plataforma da EBAC. Este site foi desenvolvido utilizando apenas HTML e CSS, mostrando como mesmo utilizando apenas o conceitos básicos e iniciais do front-end, ainda é possível o desenvolvimento de páginas web bonitas e funcionais.",
	// 	link: "https://game-shop-ebac-gamma.vercel.app/",
	// 	github: "https://github.com/luanpoppe/M_05-game-shop",
	// 	habilidades: ["HTML", "CSS"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// }
]

const objetoProjetosIngles: Projeto[] = [
	{
		nome: "UI/UX Portfolio",
		imagem: sitePortfolioJulia,
		descricao:
			"This project was developed at the request of a friend transitioning her career to the UX/UI field. The goal was to improve the website she created using a no-code platform, which, while helpful, has several limitations. Therefore, I rebuilt the site, providing more flexibility and features.",
		link: "https://landing-page-julia-sigma.vercel.app/",
		github: "https://github.com/luanpoppe/landing-page-julia",
		habilidades: [
			"React",
			"Typescript",
			"React Router DOM",
			"Styled Components",
			"Bootstrap",
			"Context API"
		],
		isModalOpen: false,
		indexNumber: null
	},
	{
		nome: "Personal Portfolio",
		imagem: sitePessoalPortfolio,
		descricao:
			"This project was developed by me with the goal of showcasing my skills and work in the programming world through a website with an elegant design and intuitive navigation. The first version was created in August 2023, before I gained my first professional experience in the field. Now, about a year and a half later, I decided to revisit the project to enhance it with the knowledge I’ve acquired during this time.",
		link: "https://portfolio-luanpoppe-frontend.vercel.app/",
		github: "https://github.com/luanpoppe/portfolio_luanpoppe",
		habilidades: [
			"React",
			"Typescript",
			"Styled Components",
			"Bootstrap",
			"Context API"
		],
		isModalOpen: false,
		indexNumber: null
	},
	{
		nome: "EPLAY",
		imagem: eplayImagem,
		descricao:
			"I worked on the development of this website throughout the last modules of the EBAC course. In this project, I applied the knowledge acquired during the course in HTML, CSS, and Javascript, using React to assist in the project's development. I utilized Styled Components for creating pre-styled CSS components, and Redux for managing its states.",
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
		indexNumber: null
	},
	// {
	// 	nome: "To-Do List",
	// 	imagem: todoListReact,
	// 	descricao:
	// 		"I developed this website following the lessons from the EBAC front-end course. The website works as a dynamic task list, where tasks can be edited, added, and deleted, and it's also possible to filter them.",
	// 	link: "https://to-do-list-react-lac.vercel.app/",
	// 	github: "https://github.com/luanpoppe/M_31-To-Do_List_React",
	// 	habilidades: ["React", "Javascript", "Typescript", "Styled Components"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// },
	{
		nome: "GitHub Portfolio",
		imagem: portfolioGithub,
		descricao:
			"I developed this website following the front-end course at EBAC. In it, I was able to practice creating components using React, and I also used AJAX protocols to integrate the website with a public API that GitHub provides about my own profile. The website also offers the option for you to choose between the light and dark themes, further personalizing the user experience.",
		link: "https://portfolio-git-hub-react.vercel.app/",
		github: "https://github.com/luanpoppe/M_29_portfolio_GitHub-react",
		habilidades: ["React", "Javascript", "Ajax", "Styled Components"],
		isModalOpen: false,
		indexNumber: null
	},
	{
		nome: "Ebac Tech Talks",
		imagem: ebacTechTalks,
		descricao:
			"This landing page was developed using only HTML, CSS, and Javascript. For CSS, I used the SASS pre-processing language to simplify the styling of elements. I also developed skills to work with dates and times in the Javascript language. Additionally, a highlight is the animation of the website's components as the user scrolls to view all areas of the site.",
		link: "https://ebac-tech-talks-luanpoppe.vercel.app/",
		github: "https://github.com/luanpoppe/M_22-ebac-tech-talks",
		habilidades: ["HTML", "CSS", "Javascript", "SASS"],
		isModalOpen: false,
		indexNumber: null
	},
	{
		nome: "Disney Plus Clone",
		imagem: cloneDisneyPlus,
		descricao:
			"In this project, completed during the EBAC front-end course, I developed a clone of the initial Disney Plus streaming service website. To achieve this, I used the knowledge acquired in HTML and CSS, and I also gained experience using Bootstrap to assist with the site's styling. This approach allows for a pleasant navigation experience through the different sections of the site. As a highlight, I also created a frequently asked questions (FAQ) section with the assistance of Bootstrap.",
		link: "https://disney-plus-clone-weld.vercel.app/",
		github: "https://github.com/luanpoppe/M_21_Clone_Disney_Plus",
		habilidades: ["HTML", "CSS", "Bootstrap", "SASS", "Javascript"],
		isModalOpen: false,
		indexNumber: null
	}
	// {
	// 	nome: "Luan Poppe Games",
	// 	imagem: gamesBootstrap,
	// 	descricao:
	// 		"This website was developed using the fundamental concepts of HTML and CSS, along with the assistance of Bootstrap to aid in styling the elements. Additionally, the SASS pre-processor was used to further facilitate and simplify the styling process. The site was also designed to be fully responsive across devices of various sizes.",
	// 	link: "https://loja-games-bootstrap.vercel.app/",
	// 	github: "https://github.com/luanpoppe/E_14-Loja_Games_bootstrap",
	// 	habilidades: ["HTML", "CSS", "Bootstrap", "SASS"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// },
	// {
	// 	nome: "Games Shop",
	// 	imagem: gameShop,
	// 	descricao:
	// 		"My first website, developed right at the beginning of the front-end course I'm taking on the EBAC platform. This site was created using only HTML and CSS, demonstrating how even with just the basic and initial front-end concepts, it's still possible to build beautiful and functional web pages.",
	// 	link: "https://game-shop-ebac-gamma.vercel.app/",
	// 	github: "https://github.com/luanpoppe/M_05-game-shop",
	// 	habilidades: ["HTML", "CSS"],
	// 	isModalOpen: false,
	// 	indexNumber: null
	// }
]

export { objetoProjetos, objetoProjetosIngles }
