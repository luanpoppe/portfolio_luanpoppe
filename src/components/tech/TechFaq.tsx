"use client"

import { useState } from "react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechFaqTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechSectionBadge } from "./TechSectionBadge"

export function TechFaq() {
	const { activeLanguage } = useAppContext()
	const [openIndex, setOpenIndex] = useState(0)

	return (
		<section id="faq" className="px-6 py-20 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<div data-reveal>
						<TechSectionBadge>
							{getTextLang(poppeTechFaqTexts.badge, activeLanguage)}
						</TechSectionBadge>
					</div>
					<h2
						data-reveal
						className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
					>
						{getTextLang(poppeTechFaqTexts.title, activeLanguage)}
					</h2>
				</div>

				<div
					data-reveal
					className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card/70"
				>
					{poppeTechFaqTexts.items.map((item, index) => {
						const isOpen = openIndex === index
						return (
							<button
								key={item.question.ptbr}
								type="button"
								onClick={() => setOpenIndex(isOpen ? -1 : index)}
								className="block w-full cursor-pointer px-6 py-5 text-left transition-colors hover:bg-secondary/40"
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-lg font-medium tracking-tight">
										{getTextLang(item.question, activeLanguage)}
									</h3>
									<span
										className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
										aria-hidden
									>
										+
									</span>
								</div>
								<div
									className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
								>
									<p className="overflow-hidden text-base text-muted-foreground">
										{getTextLang(item.answer, activeLanguage)}
									</p>
								</div>
							</button>
						)
					})}
				</div>
			</div>
		</section>
	)
}
