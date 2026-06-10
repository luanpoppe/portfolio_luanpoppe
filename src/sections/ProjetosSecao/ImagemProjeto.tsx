type Props = {
	projeto: Projeto
	isInModal?: boolean
}

function getImageSrc(imagem: Projeto["imagem"]) {
	return typeof imagem === "string" ? imagem : imagem.src
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
				src={getImageSrc(projeto?.imagem)}
				alt={projeto?.nome}
			/>
		</a>
	)
}
