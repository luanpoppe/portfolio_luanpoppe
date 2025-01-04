import { ImageHero } from "./ImageHero"
import { HeroParagraph, HeroTitle } from "./TextHero"
import { CallToActionHero } from "./CallToActionHero"
import styled from "styled-components"
import { fontSmallText } from "../../utils/fontSizes"

type Props = PropActiveLanguage

export function Hero({ activeLanguage }: Props) {
	return (
		<main
			id="hero"
			className="main-padding d-flex flex-column flex-lg-row jcc align-items-xxl-center gap-7 w-100"
		>
			<ImageHero />

			<HeroTextStyled className="col-12 col-lg-7 col-xxl-6 d-flex flex-column aic text-center text-lg-start">
				<div className="d-flex flex-column col-10 mt-0">
					<HeroTitle activeLanguage={activeLanguage} />
					<HeroParagraph activeLanguage={activeLanguage} />
				</div>

				<CallToActionHero activeLanguage={activeLanguage} />
			</HeroTextStyled>
		</main>
	)
}

const HeroTextStyled = styled.div`
	p {
		font-size: ${fontSmallText};
		line-height: 140%;
	}
`
