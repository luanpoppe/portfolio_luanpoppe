"use client"

import { ArrowRight, ClipboardList, Cog, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechInvestmentTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

const ICONS: LucideIcon[] = [ClipboardList, Cog, Sparkles]

export function TechInvestment() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="investimento" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechInvestmentTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechInvestmentTexts.title, activeLanguage)}
					</h2>
					<p
						data-reveal
						className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
					>
						{getTextLang(poppeTechInvestmentTexts.description, activeLanguage)}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{poppeTechInvestmentTexts.items.map((item, index) => {
						const Icon = ICONS[index]
						return (
							<div
								key={item.title.ptbr}
								data-reveal
								style={{ transitionDelay: `${index * 80}ms` }}
								className="rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:pop-shadow"
							>
								<div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
									<Icon className="h-5 w-5" aria-hidden />
								</div>
								<h3 className="text-xl font-semibold tracking-tight">
									{getTextLang(item.title, activeLanguage)}
								</h3>
								<p className="mt-2 text-base text-muted-foreground">
									{getTextLang(item.description, activeLanguage)}
								</p>
							</div>
						)
					})}
				</div>

				<div data-reveal className="mt-8 text-center">
					<TechWhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-all hover:opacity-90">
						{getTextLang(poppeTechInvestmentTexts.cta, activeLanguage)}
						<ArrowRight className="h-4 w-4" aria-hidden />
					</TechWhatsAppButton>
				</div>
			</div>
		</section>
	)
}
