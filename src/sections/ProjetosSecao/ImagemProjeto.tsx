type Props = {
	projeto: Projeto
	isInModal?: boolean
}
export function ImagemProjeto({ projeto, isInModal }: Props) {
	return (
		<a
			href={projeto?.link}
			target="_blank"
			rel="noreferrer"
			className={`w-100 ${isInModal ? "fade-in" : ""}`}
		>
			<img
				className="imagem-projeto w-100"
				src={projeto?.imagem}
				alt={projeto?.nome}
			/>
		</a>
	)
}
