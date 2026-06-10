"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechContactTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

export function TechContact() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="contato" className="px-6 pb-32 pt-12">
			<div
				data-reveal
				className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-card to-primary/10 p-10 pop-shadow md:p-16"
			>
				<div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
				<div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[oklch(0.78_0.14_320/.3)] blur-3xl" />

				<div className="relative">
					<p className="font-mono text-xs uppercase tracking-wider text-primary">
						{getTextLang(poppeTechContactTexts.badge, activeLanguage)}
					</p>
					<h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
						{getTextLang(poppeTechContactTexts.title, activeLanguage)}
					</h2>
					<p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
						{getTextLang(poppeTechContactTexts.description, activeLanguage)}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<TechWhatsAppButton className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-primary/30">
							<MessageCircle className="h-4 w-4" aria-hidden />
							{getTextLang(poppeTechContactTexts.cta, activeLanguage)}
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</TechWhatsAppButton>
						<span className="text-sm text-muted-foreground">
							{getTextLang(poppeTechContactTexts.ctaNote, activeLanguage)}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
