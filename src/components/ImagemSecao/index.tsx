import styled from "styled-components"

const ImagemSecaoStyled = styled.img`
	border-radius: 8px;
	object-fit: cover;
	min-height: 450px;
`

function ImagemSecao({ src, alt, className }: PropImage & PropClass) {
	return <ImagemSecaoStyled src={src} alt={alt} className={className} />
}

export default ImagemSecao
