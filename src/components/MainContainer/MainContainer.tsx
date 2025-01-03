import { PropsWithChildren } from "react"
import styled from "styled-components"

export function MainContainer({ children }: PropsWithChildren) {
	
	const MainContainerStyled = styled.main`
	padding: 2rem 2rem;
	@media (min-width: 768px) {
		padding: 2rem 4rem;
	}
	`
	return <MainContainerStyled className="d-flex flex-column w-100 max-vw-100">{children}</MainContainerStyled>
}
