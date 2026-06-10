import Image from "next/image"

type Props = {
	projeto: Projeto
	variant?: "default" | "featured"
}

function getImageSrc(imagem: Projeto["imagem"]) {
	return typeof imagem === "string" ? imagem : imagem.src
}

export function ProjectCardPreview({ projeto, variant = "default" }: Props) {
	const isFeatured = variant === "featured"

	return (
		<a
			href={projeto.link}
			target="_blank"
			rel="noreferrer"
			className={`relative block shrink-0 overflow-hidden ${
				isFeatured
					? "aspect-[16/11] rounded-2xl border border-white/15"
					: "aspect-[16/10]"
			}`}
			aria-label={projeto.nome}
		>
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 backface-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
					<Image
						src={getImageSrc(projeto.imagem)}
						alt={projeto.nome}
						fill
						sizes={
							isFeatured
								? "(max-width: 768px) 100vw, 50vw"
								: "(max-width: 768px) 100vw, 33vw"
						}
						className="object-cover object-top"
					/>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-0 bg-card/10" />
			<div
				className={`pointer-events-none absolute inset-x-0 bottom-0 ${
					isFeatured
						? "h-[36%] bg-gradient-to-t from-accent/55 via-accent/10 to-transparent"
						: "h-[34%] bg-gradient-to-t from-card/75 via-card/25 to-transparent"
				}`}
			/>
		</a>
	)
}
