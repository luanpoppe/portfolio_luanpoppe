import styled from "styled-components"

const ImagemSecaoStyled = styled.img`
	max-width: 50%;
	border-radius: 8px;
`

import React from "react"

function ImagemSecao(props) {
	return <ImagemSecaoStyled src={props.src} alt={props.alt} />
}

export default ImagemSecao
