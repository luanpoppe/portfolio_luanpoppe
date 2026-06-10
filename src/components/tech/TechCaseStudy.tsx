"use client"

import { ArrowRight } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechCaseStudyTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

export function TechCaseStudy() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="case" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechCaseStudyTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechCaseStudyTexts.title, activeLanguage)}
					</h2>
				</div>

				<div
					data-reveal
					className="rounded-3xl border border-border bg-card p-8 pop-shadow md:p-10"
				>
					<p className="font-mono text-xs uppercase tracking-wider text-primary">
						{getTextLang(poppeTechCaseStudyTexts.client, activeLanguage)}
					</p>
					<h3 className="mt-3 text-2xl font-semibold tracking-tight">
						{getTextLang(poppeTechCaseStudyTexts.subtitle, activeLanguage)}
					</h3>
					<p className="mt-4 text-base text-muted-foreground">
						{getTextLang(poppeTechCaseStudyTexts.description, activeLanguage)}
					</p>

					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						<div>
							<h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
								{getTextLang(
									poppeTechCaseStudyTexts.problemLabel,
									activeLanguage
								)}
							</h4>
							<ul className="mt-2 space-y-1.5 text-base text-foreground">
								{poppeTechCaseStudyTexts.problems.map((item) => (
									<li key={item.ptbr}>· {getTextLang(item, activeLanguage)}</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
								{getTextLang(
									poppeTechCaseStudyTexts.solutionLabel,
									activeLanguage
								)}
							</h4>
							<ul className="mt-2 space-y-1.5 text-base text-foreground">
								{poppeTechCaseStudyTexts.solutions.map((item) => (
									<li key={item.ptbr}>· {getTextLang(item, activeLanguage)}</li>
								))}
							</ul>
						</div>
					</div>

					<p className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-base text-foreground">
						{getTextLang(poppeTechCaseStudyTexts.outcome, activeLanguage)}
					</p>

					<TechWhatsAppButton
						className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
					>
						{getTextLang(poppeTechCaseStudyTexts.cta, activeLanguage)}
						<ArrowRight className="h-4 w-4" aria-hidden />
					</TechWhatsAppButton>
				</div>
			</div>
		</section>
	)
}
