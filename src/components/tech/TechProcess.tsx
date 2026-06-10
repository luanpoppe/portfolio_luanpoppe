"use client"

import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechProcessTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechProcess() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="como-funciona" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechProcessTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechProcessTexts.title, activeLanguage)}
					</h2>
					<p
						data-reveal
						className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
					>
						{getTextLang(poppeTechProcessTexts.description, activeLanguage)}
					</p>
				</div>

				<ol className="relative mx-auto max-w-3xl">
					<div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
					{poppeTechProcessTexts.steps.map((step, index) => (
						<li
							key={step.title.ptbr}
							data-reveal
							style={{ transitionDelay: `${index * 60}ms` }}
							className="relative mb-6 flex gap-5"
						>
							<div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-card font-mono text-sm font-semibold text-primary">
								{index + 1}
							</div>
							<div className="flex-1 rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-primary/30">
								<h3 className="text-lg font-semibold tracking-tight">
									{getTextLang(step.title, activeLanguage)}
								</h3>
								<p className="mt-1.5 text-base text-muted-foreground">
									{getTextLang(step.description, activeLanguage)}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
