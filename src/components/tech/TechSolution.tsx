"use client"

import { ArrowRight } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechSolutionTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechSolution() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="solucao" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechSolutionTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechSolutionTexts.title, activeLanguage)}
					</h2>
					<p
						data-reveal
						className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
					>
						{getTextLang(poppeTechSolutionTexts.description, activeLanguage)}
					</p>
				</div>

				<div
					data-reveal
					className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur md:p-8"
				>
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						{poppeTechSolutionTexts.flowSteps.map((step, index) => (
							<div
								key={step.ptbr}
								className="flex flex-1 items-center gap-3 md:flex-col md:gap-2 md:text-center"
							>
								<div className="flex shrink-0 items-center gap-3 md:flex-col">
									<span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
										{index + 1}
									</span>
									{index < poppeTechSolutionTexts.flowSteps.length - 1 && (
										<ArrowRight
											className="hidden h-4 w-4 shrink-0 text-muted-foreground/50 md:block"
											aria-hidden
										/>
									)}
								</div>
								<p className="text-sm font-medium leading-snug text-foreground md:text-base">
									{getTextLang(step, activeLanguage)}
								</p>
								{index < poppeTechSolutionTexts.flowSteps.length - 1 && (
									<ArrowRight
										className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/50 md:hidden"
										aria-hidden
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
