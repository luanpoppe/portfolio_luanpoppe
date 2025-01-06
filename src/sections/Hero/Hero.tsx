import { ImageHero } from "./ImageHero"
import { HeroParagraph, HeroTitle } from "./TextHero"
import { CallToActionHero } from "./CallToActionHero"
import styled from "styled-components"
import { fontSmallText } from "../../utils/fontSizes"
import { useAppContext } from "../../utils/useContext"

export function Hero() {
	const { activeLanguage } = useAppContext()

	return (
		<main
			id="hero"
			className="main-padding row gx-0 gy-5 gy-lg-0 flex-column flex-lg-row jcc align-items-xxl-center w-100 hidden"
		>
			<ImageHero className="col-12 col-lg-4" />

			<HeroTextStyled className="col-12 col-lg-8 col-xxl-6 d-flex flex-column aic text-center text-lg-start">
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
