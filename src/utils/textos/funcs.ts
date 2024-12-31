export function getTextLang(
	text: { en: string; ptbr: string },
	activeLanguage: "english" | "portuguese"
) {
	if (activeLanguage === "english") return text.en
	if (activeLanguage === "portuguese") return text.ptbr
}
