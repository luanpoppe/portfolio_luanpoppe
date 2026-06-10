"use client"

import { CircleCheck, Stethoscope } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechForClinicsTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechForClinics() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="para-quem" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge
							icon={
								<Stethoscope className="h-3.5 w-3.5 text-primary" aria-hidden />
							}
						>
							{getTextLang(poppeTechForClinicsTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechForClinicsTexts.title, activeLanguage)}
					</h2>
					<p
						data-reveal
						className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
					>
						{getTextLang(poppeTechForClinicsTexts.description, activeLanguage)}
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{poppeTechForClinicsTexts.items.map((item, index) => (
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

				<p
					data-reveal
					className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-center text-base text-foreground"
				>
					{getTextLang(poppeTechForClinicsTexts.highlight, activeLanguage)}
				</p>
			</div>
		</section>
	)
}
