"use client"

import { getTextLang } from "@/utils/textos/funcs"
import {
	projectsDisplayOrder,
	projectsTexts
} from "@/utils/textos/projects"
import { useAppContext } from "@/utils/useContext"
import { useRevealOnScroll } from "@/utils/useRevealOnScroll"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
	const { activeLanguage, projectsObj } = useAppContext()
	useRevealOnScroll()

	const orderedProjects = projectsDisplayOrder
		.map((github) => projectsObj.find((projeto) => projeto.github === github))
		.filter((projeto): projeto is Projeto => Boolean(projeto))

	const totalLabel = String(orderedProjects.length).padStart(3, "0")

	return (
		<section id="projetos" className="py-24 md:py-32">
			<div className="mb-12 flex items-end justify-between" data-reveal>
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
						{getTextLang(projectsTexts.sectionLabel, activeLanguage)}
					</p>
					<h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
						{getTextLang(projectsTexts.title, activeLanguage)}
					</h2>
				</div>
				<span className="hidden font-mono text-xs text-muted-foreground md:block">
					/ {totalLabel}
				</span>
			</div>

			<div className="grid grid-cols-1 gap-5 md:grid-cols-12">
				{orderedProjects.map((projeto, index) => (
					<ProjectCard
						key={projeto.github}
						projeto={projeto}
						index={index + 1}
						activeLanguage={activeLanguage}
					/>
				))}
			</div>
		</section>
	)
}
