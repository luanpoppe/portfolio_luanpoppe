"use client"

import Image from "next/image"
import { getTextLang } from "@/utils/textos/funcs"
import { skillsList, skillsTexts } from "@/utils/textos/skills"
import { useAppContext } from "@/utils/useContext"
import { useRevealOnScroll } from "@/utils/useRevealOnScroll"

export function Skills() {
	const { activeLanguage } = useAppContext()
	useRevealOnScroll()

	return (
		<section id="habilidades" className="py-24 md:py-32">
			<div className="mb-12 flex items-end justify-between" data-reveal>
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
						{getTextLang(skillsTexts.sectionLabel, activeLanguage)}
					</p>
					<h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
						{getTextLang(skillsTexts.title, activeLanguage)}
						<br />
						<span className="text-muted-foreground">
							{getTextLang(skillsTexts.titleMuted, activeLanguage)}
						</span>
					</h2>
				</div>
				<p className="hidden max-w-xs text-sm text-muted-foreground md:block">
					{getTextLang(skillsTexts.description, activeLanguage)}
				</p>
			</div>

			<div
				className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
				data-reveal
			>
				{skillsList.map((skill, index) => (
					<div
						key={skill.name}
						className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(124,58,237,0.35)]"
					>
						<div className="flex items-center gap-3">
							<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 p-1.5 transition-colors group-hover:bg-accent/15">
								<Image
									src={skill.image}
									alt=""
									width={28}
									height={28}
									className="h-7 w-7 object-contain"
									aria-hidden
								/>
							</span>
							<span className="text-sm font-semibold leading-tight">
								{skill.name}
							</span>
						</div>
						<span className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground/60">
							{String(index + 1).padStart(2, "0")}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}
