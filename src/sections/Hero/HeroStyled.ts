import styled from "styled-components"
import { corPadraoTextos } from "../../utils/colors"
import { widthTablet } from "../../utils/mediaQuery"

export const ContactIconsStyled = styled.img`
	max-width: 40px;
	border-radius: 50%;
	margin: 0 8px;

	&:hover {
		transform: scale(1.1);
		transition: all ease 350ms;
	}
`

export const AcessarCurriculoStyled = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid ${corPadraoTextos};
	border-radius: 8px;
	padding: 12px;
	margin-right: 48px;
	box-shadow: -4px 4px rgba(255, 255, 255, 0.3);
	max-height: 60px;
	margin: auto 48px auto 0;

	svg {
		margin-left: 4px;
	}

	&:hover {
		transform: scale(1.05);
		transition: transform ease 350ms;
	}

	@media (max-width: ${widthTablet}) {
		width: 50vw;
		margin: 0 auto;
		margin-bottom: 32px;
	}
`

export const ContainerEntreEmContatoStyled = styled.div`
	border: 2px solid ${corPadraoTextos};
	border-radius: 8px;
	box-shadow: rgba(255, 255, 255, 0.25) 0px 18px 19px,
		rgba(255, 255, 255, 0.12) 0px -12px 30px,
		rgba(255, 255, 255, 0.12) 0px 4px 6px,
		rgba(255, 255, 255, 0.17) 0px 12px 13px,
		rgba(255, 255, 255, 0.09) 0px -3px 5px;
`
