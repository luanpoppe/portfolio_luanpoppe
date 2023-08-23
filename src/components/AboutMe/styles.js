import styled from "styled-components"
import { fontSmallText } from "../../utils/fontSizes"
import { widthTablet } from "../../utils/mediaQuery"

export const AboutMeStyled = styled.section`
	display: block;
	margin: 0 auto;
	margin-top: 64px;
	margin-bottom: 64px;
	max-width: ${(props) => props.maxWidth};

	h2 {
		text-align: center;
	}

	p {
		font-size: ${fontSmallText};
		text-align: justify;
		line-height: 140%;

		&:first-child {
			margin-bottom: 32px;
		}
	}
`

export const AboutMeContentStyled = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 32px;

	> div {
		/* display: block; */
		margin: auto 48px;
	}

	.imagem-sobre-mim-mobile {
		display: none;
	}

	@media (max-width: ${widthTablet}) {
		display: block;

		& > div {
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 32px;
		}

		.imagem-sobre-mim-pc {
			display: none;
		}

		.imagem-sobre-mim-mobile {
			display: block;
		}
	}
`
