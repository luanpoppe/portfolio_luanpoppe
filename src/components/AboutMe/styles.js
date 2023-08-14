import styled from "styled-components"
import { fontSmallText } from "../../utils/fontSizes"

export const AboutMeStyled = styled.section`
	display: block;
	margin: 0 auto;
	margin-top: 64px;

	h2 {
		text-align: center;
	}

	p {
		font-size: ${fontSmallText};
		text-align: justify;

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
`
