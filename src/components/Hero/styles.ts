import styled from "styled-components"
import {
	fontLargeText,
	fontMobileLargeText,
	fontSmallText
} from "../../utils/fontSizes"
import { corAzul, corPadraoTextos } from "../../utils/colors"
import { widthTablet } from "../../utils/mediaQuery"

export const HeroStyled = styled.main<any>`
	max-width: ${(props: any) => props.maxWidth};
	display: flex;
	justify-content: center;
	margin: 0 auto;

	& > img {
		max-width: 320px;
		margin-right: 48px;
		border: transparent;
		border-radius: 4px;
		margin-top: 60px;
	}

	@media (max-width: ${widthTablet}) {
		display: block;
		margin: 0 auto;

		& > img {
			display: block;
			width: 100%;
			margin-bottom: 32px;
			margin-right: auto;
			margin-left: auto;
		}
	}
`

export const HeroTextStyled = styled.div`
	display: block;
	max-width: 50%;
	margin: auto 0;

	@media (max-width: ${widthTablet}) {
		max-width: 100%;
	}

	h1 {
		font-size: ${fontLargeText};
		line-height: 44px;
		margin-bottom: 24px;

		& > span {
			color: ${corAzul};
		}

		@media (max-width: ${widthTablet}) {
			display: block;
			margin: 0 auto;
			text-align: center;
			width: 100%;
			font-size: ${fontMobileLargeText};
			margin-bottom: 32px;
		}
	}

	p {
		font-size: ${fontSmallText};
		line-height: 140%;
	}

	& > p {
		@media (max-width: ${widthTablet}) {
			width: 100%;
			text-align: justify;
		}
	}

	& > div {
		margin-top: 24px;
		display: flex;
		justify-content: center;
	}

	.container-acessar-curriculo {
		@media (max-width: ${widthTablet}) {
			display: block;
			width: 100%;
		}
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

	@media (max-width: ${widthTablet}) {
		width: 50vw;
		margin: 0 auto;
		margin-bottom: 32px;
	}
`

export const EntreEmContatoStyled = styled.p`
	text-align: center;
	margin-bottom: 12px;

	@media (max-width: ${widthTablet}) {
		text-align: center;
	}
`

export const ContainerEntreEmContatoStyled = styled.div`
	border: 2px solid ${corPadraoTextos};
	padding: 12px;
	border-radius: 8px;
	box-shadow: rgba(255, 255, 255, 0.25) 0px 18px 19px,
		rgba(255, 255, 255, 0.12) 0px -12px 30px,
		rgba(255, 255, 255, 0.12) 0px 4px 6px,
		rgba(255, 255, 255, 0.17) 0px 12px 13px,
		rgba(255, 255, 255, 0.09) 0px -3px 5px;

	.container-icones {
		@media (max-width: ${widthTablet}) {
			display: flex;
			justify-content: center;

			a {
				margin-right: 8px;
			}
		}
	}
`
