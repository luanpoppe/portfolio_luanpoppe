import { eplayImagem, todoListReact } from "./images"

const objetoProjetos = [
	{
		nome: "EPLAY",
		imagem: eplayImagem,
		descricao:
			"Realizei o desenvolvimento deste site ao longo dos últimos módulos do curso da EBAC. Neste projeto, utilizei os conhecimentos adquiridos ao longo do curso em HTML, CSS, Javascript, utilizando o React para auxiliar no desenvolvimento do projeto, o Styled Components para criação de componentes já estilizados por CSS, e o Redux para gestão de estados do mesmo.",
		link: "https://eplay-luanpoppe.vercel.app/",
		github: "",
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
		github: "",
		habilidades: ["React", "Javascript", "Typescript", "Styled Components"],
		isModalOpen: false,
		indexNumber: ""
	}
]

export { objetoProjetos }
