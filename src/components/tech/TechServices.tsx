"use client"

import { ArrowUpRight, Cog, MessageCircle, Sparkles, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechServicesTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

const ICONS: LucideIcon[] = [MessageCircle, Workflow, Sparkles, Cog]

export function TechServices() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="servicos-cards" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechServicesTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechServicesTexts.title, activeLanguage)}
					</h2>
				</div>

				<div className="grid gap-5 md:grid-cols-2">
					{poppeTechServicesTexts.items.map((item, index) => {
						const Icon = ICONS[index]
						return (
							<div
								key={item.title.ptbr}
								data-reveal
								style={{ transitionDelay: `${index * 70}ms` }}
								className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:pop-shadow"
							>
								<div className="flex items-start justify-between">
									<div className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
										<Icon className="h-5 w-5" aria-hidden />
									</div>
									<span className="font-mono text-sm text-muted-foreground">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<h3 className="mt-5 text-xl font-semibold tracking-tight">
									{getTextLang(item.title, activeLanguage)}
								</h3>
								<p className="mt-2 text-base text-muted-foreground">
									{getTextLang(item.description, activeLanguage)}
								</p>
								<p className="mt-4 font-mono text-xs uppercase tracking-wider text-primary">
									{getTextLang(item.timeline, activeLanguage)}
								</p>
							</div>
						)
					})}
				</div>

				<div data-reveal className="mt-10 text-center">
					<TechWhatsAppButton className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-base font-medium transition-all hover:border-primary/40 hover:bg-primary/5">
						{getTextLang(poppeTechServicesTexts.cta, activeLanguage)}
						<ArrowUpRight className="h-4 w-4 text-primary" aria-hidden />
					</TechWhatsAppButton>
				</div>
			</div>
		</section>
	)
}
