"use client"

import { Bot, Calendar, Clock, MessagesSquare, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechProblemTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

const ICONS: LucideIcon[] = [
	MessagesSquare,
	Calendar,
	Clock,
	Bot,
	Users
]

export function TechProblem() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="problema" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechProblemTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechProblemTexts.title, activeLanguage)}
					</h2>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{poppeTechProblemTexts.items.map((item, index) => {
						const Icon = ICONS[index]
						return (
							<div
								key={item.title.ptbr}
								data-reveal
								style={{ transitionDelay: `${index * 60}ms` }}
								className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-card"
							>
								<div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
									<Icon className="h-5 w-5" aria-hidden />
								</div>
								<h3 className="text-lg font-semibold tracking-tight">
									{getTextLang(item.title, activeLanguage)}
								</h3>
								<p className="mt-2 text-base text-muted-foreground">
									{getTextLang(item.description, activeLanguage)}
								</p>
							</div>
						)
					})}
				</div>

				<p
					data-reveal
					className="mx-auto mt-12 max-w-2xl text-pretty text-center text-lg font-medium tracking-tight md:text-xl"
				>
					{getTextLang(poppeTechProblemTexts.closingBefore, activeLanguage)}
					<span className="text-primary">
						{getTextLang(poppeTechProblemTexts.closingAccent, activeLanguage)}
					</span>
					{getTextLang(poppeTechProblemTexts.closingAfter, activeLanguage)}
				</p>
			</div>
		</section>
	)
}
