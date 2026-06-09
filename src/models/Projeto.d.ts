declare type Projeto = {
	nome: string
	imagem: string | import("next/image").StaticImageData
	descricao: string
	link: string
	github: string
	habilidades: string[]
	isModalOpen: boolean
	indexNumber: number
}
