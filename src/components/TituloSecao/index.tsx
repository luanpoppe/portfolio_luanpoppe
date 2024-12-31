import { PropsWithChildren } from "react"

import styled from "styled-components"
import { fontLargeText } from "../../utils/fontSizes"

export const TituloSecaoStyled = styled.h2`
	font-size: ${fontLargeText};
	text-align: center;
`

function TituloSecao({ id, children }: PropsWithChildren & { id: string }) {
	return <TituloSecaoStyled id={id}>{children}</TituloSecaoStyled>
}

export default TituloSecao
