type Props = {
	projeto: Projeto
}
export function ImagemProjeto({ projeto }: Props) {
	return (
		<a
			href={projeto?.link}
			target="_blank"
			rel="noreferrer"
			className="w-100"
		>
			<img
				className="imagem-projeto w-100"
				src={projeto?.imagem}
				alt={projeto?.nome}
			/>
		</a>
	)
}
