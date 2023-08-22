import styled from "styled-components"
import { fontLargeText, fontSmallText } from "../../utils/fontSizes"
import { corPadraoTextos } from "../../utils/colors"

export const HeroStyled = styled.main`
	display: flex;
	justify-content: center;
	/* max-width: ${(props) => props.maxWidth}; */

	& > img {
		max-width: 320px;
		margin-right: 48px;
		border: transparent;
		border-radius: 4px;
	}
`

export const HeroTextStyled = styled.div`
	display: block;
	max-width: 50%;
	margin: auto 0;

	h1 {
		font-size: ${fontLargeText};
		line-height: 44px;
		margin-bottom: 24px;
	}

	p {
		font-size: ${fontSmallText};
		line-height: 140%;
	}

	& > div {
		margin-top: 24px;
		display: flex;
		justify-content: center;
	}
`

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
`

export const EntreEmContatoStyled = styled.p`
	text-align: center;
	/* font-weight: bold; */
	margin-bottom: 12px;
`

export const ContainerEntreEmContatoStyled = styled.div`
	border: 2px solid ${corPadraoTextos};
	padding: 12px;
	border-radius: 8px;
	/* box-shadow:
		4px 4px rgba(255, 255, 255, 0.7),
		-4px -4px rgba(255, 255, 255, 0.7); */
	box-shadow:
		rgba(255, 255, 255, 0.25) 0px 18px 19px,
		rgba(255, 255, 255, 0.12) 0px -12px 30px,
		rgba(255, 255, 255, 0.12) 0px 4px 6px,
		rgba(255, 255, 255, 0.17) 0px 12px 13px,
		rgba(255, 255, 255, 0.09) 0px -3px 5px;
`
