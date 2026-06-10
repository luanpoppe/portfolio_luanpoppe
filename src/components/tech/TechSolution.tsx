"use client"

import { MessageCircle, Sparkles, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechSolutionTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

const ICONS: LucideIcon[] = [MessageCircle, Workflow, Sparkles]

export function TechSolution() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="servicos" className="px-6 py-20 md:py-28">
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

				<div className="grid gap-5 md:grid-cols-3">
					{poppeTechSolutionTexts.items.map((item, index) => {
						const Icon = ICONS[index]
						return (
							<div
								key={item.title.ptbr}
								data-reveal
								style={{ transitionDelay: `${index * 80}ms` }}
								className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:pop-shadow"
							>
								<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-3xl transition-all group-hover:bg-primary/15" />
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
			</div>
		</section>
	)
}
