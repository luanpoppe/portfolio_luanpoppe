import styled from "styled-components"
import { fontLargeText, fontSmallText } from "../../utils/fontSizes"

export const HeroStyled = styled.main`
	display: flex;
	justify-content: center;

	img {
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
`
