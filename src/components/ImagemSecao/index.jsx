import styled from "styled-components"

const ImagemSecaoStyled = styled.img`
	max-width: 50%;
	border-radius: 8px;

	@media (max-width: ${widthTablet}) {
		max-width: 100%;
	}
`

import React from "react"
import { widthTablet } from "../../utils/mediaQuery"

function ImagemSecao(props) {
	return (
		<ImagemSecaoStyled
			src={props.src}
			alt={props.alt}
			className={props.className}
		/>
	)
}

export default ImagemSecao
