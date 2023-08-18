import styled from "styled-components"

export const ProjetosSecaoStyled = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`

export const ModalStyled = styled.div`
	display: block;
	margin: 0 auto;
	border: 1px solid red;
	background-color: red;

	&::after {
		background-color: rgba(0, 0, 0, 0.5);
		/* content: ""; */
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 5;
	}
`
