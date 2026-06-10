"use client"

import { MapPin, MessageCircle } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { POPPE_TECH_INSTAGRAM_URL } from "@/utils/tech/constants"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechFooterTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechLogo } from "./TechLogo"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

export function TechFooter() {
	const { activeLanguage } = useAppContext()
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-border px-6 py-12">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
				<div>
					<TechLogo />
					<p className="mt-3 max-w-sm text-base text-muted-foreground">
						{getTextLang(poppeTechFooterTexts.tagline, activeLanguage)}
					</p>
					<p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
						<MapPin className="h-3.5 w-3.5" aria-hidden />
						{getTextLang(poppeTechFooterTexts.location, activeLanguage)}
					</p>
				</div>

				<div className="flex flex-col gap-3 md:items-end">
					<div className="flex items-center gap-2">
						<TechWhatsAppButton
							aria-label="WhatsApp"
							className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary/40 hover:text-primary"
						>
							<MessageCircle className="h-4 w-4" aria-hidden />
						</TechWhatsAppButton>
						<a
							href={POPPE_TECH_INSTAGRAM_URL}
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary/40 hover:text-primary"
						>
							<FaInstagram className="h-4 w-4" aria-hidden />
						</a>
					</div>
					<p className="text-sm text-muted-foreground">
						© {year} Poppe Tech.{" "}
						{getTextLang(poppeTechFooterTexts.rights, activeLanguage)}
					</p>
				</div>
			</div>
		</footer>
	)
}
