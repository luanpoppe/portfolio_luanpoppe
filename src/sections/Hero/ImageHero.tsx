import styled from "styled-components"
import { fotoPerfilLuan } from "../../utils/images"

const Style = styled.img`
	border-radius: 4px;
	border: transparent;
	object-fit: cover;
	max-height: 800px;
`

export function ImageHero({ className }: React.ComponentProps<"img">) {
	return (
		<Style
			src={fotoPerfilLuan}
			alt="Foto de Perfil"
			className={`col-12 col-lg-4 flex-jcc ${className}`}
		/>
	)
}
