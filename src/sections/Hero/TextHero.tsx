import { getTextLang } from "../../utils/textos/funcs"
import { heroTexts } from "../../utils/textos/hero"

export function HeroTitle({ activeLanguage }: PropActiveLanguage) {
	return (
		<h1 className="mb-4">
			{getTextLang(heroTexts.mainText[0], activeLanguage)}
			<span className="color-purple">Poppe</span>
			{getTextLang(heroTexts.mainText[1], activeLanguage)}
			<span className="color-purple"> front-end</span>
			{getTextLang(heroTexts.mainText[2], activeLanguage)}
		</h1>
	)
}

export function HeroParagraph({ activeLanguage }: PropActiveLanguage) {
	return <p>{getTextLang(heroTexts.secondaryText, activeLanguage)}</p>
}
