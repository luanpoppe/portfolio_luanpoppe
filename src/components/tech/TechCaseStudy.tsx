"use client"

import { ArrowRight, CalendarCheck, Clock, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechCaseStudyTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

const METRIC_ICONS: LucideIcon[] = [Zap, Clock, CalendarCheck]

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

				<div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
					<div
						data-reveal
						className="rounded-3xl border border-border bg-card p-8 pop-shadow"
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
					</div>

					<div className="flex flex-col gap-4">
						{poppeTechCaseStudyTexts.metrics.map((metric, index) => {
							const Icon = METRIC_ICONS[index]
							return (
								<div
									key={metric.label.ptbr}
									data-reveal
									style={{ transitionDelay: `${index * 80}ms` }}
									className="flex items-center justify-between rounded-2xl border border-border bg-card/70 p-5"
								>
									<div className="flex items-center gap-4">
										<div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
											<Icon className="h-5 w-5" aria-hidden />
										</div>
										<div>
											<p className="text-base font-medium">
												{getTextLang(metric.label, activeLanguage)}
											</p>
											<p className="text-sm text-muted-foreground">
												{getTextLang(metric.note, activeLanguage)}
											</p>
										</div>
									</div>
									<span className="font-mono text-lg font-semibold text-primary">
										{metric.value}
									</span>
								</div>
							)
						})}

						<TechWhatsAppButton
							data-reveal
							className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
						>
							{getTextLang(poppeTechCaseStudyTexts.cta, activeLanguage)}
							<ArrowRight className="h-4 w-4" aria-hidden />
						</TechWhatsAppButton>
					</div>
				</div>
			</div>
		</section>
	)
}
