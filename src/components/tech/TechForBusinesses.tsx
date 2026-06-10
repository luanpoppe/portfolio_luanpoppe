"use client"

import { Store } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechForBusinessesTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechForBusinesses() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="negocios" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge
							icon={<Store className="h-3.5 w-3.5 text-primary" aria-hidden />}
						>
							{getTextLang(poppeTechForBusinessesTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechForBusinessesTexts.title, activeLanguage)}
					</h2>
					<p
						data-reveal
						className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
					>
						{getTextLang(poppeTechForBusinessesTexts.description, activeLanguage)}
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-2">
					{poppeTechForBusinessesTexts.tags.map((tag, index) => (
						<span
							key={tag.ptbr}
							data-reveal
							style={{ transitionDelay: `${index * 30}ms` }}
							className="rounded-full border border-border bg-card px-4 py-2.5 text-base text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
						>
							{getTextLang(tag, activeLanguage)}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
