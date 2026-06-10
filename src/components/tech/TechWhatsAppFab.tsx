"use client"

import { MessageCircle } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechNavTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

export function TechWhatsAppFab() {
	const { activeLanguage } = useAppContext()

	return (
		<TechWhatsAppButton
			aria-label={getTextLang(poppeTechNavTexts.whatsapp, activeLanguage)}
			className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 md:hidden"
		>
			<MessageCircle className="h-6 w-6" aria-hidden />
		</TechWhatsAppButton>
	)
}
