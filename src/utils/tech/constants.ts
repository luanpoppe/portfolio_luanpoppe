import {
	poppeTechClinicComboWhatsappMessages,
	poppeTechWhatsappMessages
} from "@/utils/textos/poppeTech/whatsapp"

export const POPPE_TECH_WHATSAPP_NUMBER = "5511978046445"
export const POPPE_TECH_INSTAGRAM_URL = "https://www.instagram.com/luanpoppe.tech/"
export const POPPE_TECH_SITE_URL = "https://www.luanpoppe.com/tech"
export const POPPE_TECH_OG_IMAGE_URL = "https://www.luanpoppe.com/og-poppe-tech.jpg"

export function getPoppeTechWhatsappUrl(
	language: ActiveLanguage,
	message?: string
) {
	const text =
		message ??
		(language === "english"
			? poppeTechWhatsappMessages.en
			: poppeTechWhatsappMessages.ptbr)

	return `https://wa.me/${POPPE_TECH_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function getPoppeTechClinicComboWhatsappUrl(language: ActiveLanguage) {
	const message =
		language === "english"
			? poppeTechClinicComboWhatsappMessages.en
			: poppeTechClinicComboWhatsappMessages.ptbr

	return getPoppeTechWhatsappUrl(language, message)
}
