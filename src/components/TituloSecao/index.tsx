import { PropsWithChildren } from "react"

import styled from "styled-components"
import { fontLargeText } from "../../utils/fontSizes"

export const TituloSecaoStyled = styled.h2`
	font-size: ${fontLargeText};
	text-align: center;
`

type Props = PropsWithChildren & PropClass & { id: string }

function TituloSecao({ id, children, className }: Props) {
	return (
		<TituloSecaoStyled id={id} className={className}>
			{children}
		</TituloSecaoStyled>
	)
}

export default TituloSecao
