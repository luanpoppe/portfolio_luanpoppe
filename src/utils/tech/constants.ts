import { poppeTechWhatsappMessages } from "@/utils/textos/poppeTech/whatsapp"

export const POPPE_TECH_WHATSAPP_NUMBER = "5511978046445"
export const POPPE_TECH_INSTAGRAM_URL = "https://instagram.com/"

export function getPoppeTechWhatsappUrl(language: ActiveLanguage) {
	const message =
		language === "english"
			? poppeTechWhatsappMessages.en
			: poppeTechWhatsappMessages.ptbr

	return `https://wa.me/${POPPE_TECH_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
