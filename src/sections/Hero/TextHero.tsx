import { getTextLang } from "../../utils/textos/funcs"
import { heroTexts } from "../../utils/textos/hero"

export function HeroTitle({ activeLanguage }: PropActiveLanguage) {
	return (
		<h1 className="mb-4 mb-xxl-5">
			{getTextLang(heroTexts.mainText[0], activeLanguage)}
			<span className="color-purple">Poppe</span>
			{getTextLang(heroTexts.mainText[1], activeLanguage)}
			<span className="color-purple">{`${activeLanguage == "portuguese" ? " de" : ""} software`}</span>
			{getTextLang(heroTexts.mainText[2], activeLanguage)}
		</h1>
	)
}

export function HeroParagraph({ activeLanguage }: PropActiveLanguage) {
	return <p className="mb-xxl-5">{getTextLang(heroTexts.secondaryText, activeLanguage)}</p>
}
