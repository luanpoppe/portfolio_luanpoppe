import styled from "styled-components"

const ImagemSecaoStyled = styled.img`
	max-width: 50%;
	border-radius: 8px;

	@media (max-width: ${widthTablet}) {
		max-width: 100%;
	}
`

import { widthTablet } from "../../utils/mediaQuery"

function ImagemSecao({ src, alt, className }: PropImage & PropClass) {
	return <ImagemSecaoStyled src={src} alt={alt} className={className} />
}

export default ImagemSecao
