"use client"

import { CircleCheck } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechDifferentialsTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechDifferentials() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="diferenciais" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechDifferentialsTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechDifferentialsTexts.title, activeLanguage)}
					</h2>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{poppeTechDifferentialsTexts.items.map((item, index) => (
						<div
							key={item.title.ptbr}
							data-reveal
							style={{ transitionDelay: `${index * 50}ms` }}
							className="rounded-2xl border border-border bg-card/70 p-6 transition-all hover:border-primary/30"
						>
							<CircleCheck className="mb-3 h-5 w-5 text-primary" aria-hidden />
							<h3 className="text-lg font-semibold tracking-tight">
								{getTextLang(item.title, activeLanguage)}
							</h3>
							<p className="mt-2 text-base text-muted-foreground">
								{getTextLang(item.description, activeLanguage)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
