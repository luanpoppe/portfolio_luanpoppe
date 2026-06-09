"use client"

import { getTextLang } from "@/utils/textos/funcs"
import { aboutMeTexts } from "@/utils/textos/aboutMe"
import { useAppContext } from "@/utils/useContext"

export function About() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="sobre-mim" className="py-24 md:py-32">
			<div className="mb-12 flex items-end justify-between" data-reveal>
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
						{getTextLang(aboutMeTexts.sectionLabel, activeLanguage)}
					</p>
					<h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
						{getTextLang(aboutMeTexts.title, activeLanguage)}
						<br />
						<span className="text-muted-foreground">
							{getTextLang(aboutMeTexts.titleMuted, activeLanguage)}
						</span>
					</h2>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-12">
				<div
					className="rounded-3xl border border-border bg-card p-8 md:col-span-7 md:p-10"
					data-reveal
				>
					<p className="text-base leading-relaxed text-muted-foreground md:text-lg">
						{getTextLang(aboutMeTexts.paragraph1, activeLanguage)}
					</p>
					<div className="my-8 h-px w-full bg-border" />
					<p className="text-base leading-relaxed text-muted-foreground md:text-lg">
						{getTextLang(aboutMeTexts.paragraph2, activeLanguage)}
					</p>
				</div>

				<div
					className="grid grid-cols-2 gap-6 md:col-span-5"
					data-reveal
				>
					<div className="col-span-2 rounded-3xl bg-accent p-7 text-accent-foreground">
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
							{getTextLang(aboutMeTexts.today.label, activeLanguage)}
						</p>
						<p className="mt-3 text-2xl font-bold leading-tight">
							{getTextLang(aboutMeTexts.today.title, activeLanguage)}
						</p>
						<p className="mt-3 text-sm opacity-80">
							{getTextLang(aboutMeTexts.today.description, activeLanguage)}
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6">
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
							{getTextLang(aboutMeTexts.education.label, activeLanguage)}
						</p>
						<p className="mt-2 text-sm font-bold">
							{getTextLang(aboutMeTexts.education.title, activeLanguage)}
						</p>
						<p className="text-xs text-muted-foreground">
							{getTextLang(aboutMeTexts.education.detail, activeLanguage)}
						</p>
					</div>

					<div className="rounded-3xl border border-border bg-card p-6">
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
							{getTextLang(aboutMeTexts.course.label, activeLanguage)}
						</p>
						<p className="mt-2 text-sm font-bold">
							{getTextLang(aboutMeTexts.course.title, activeLanguage)}
						</p>
						<p className="text-xs text-muted-foreground">
							{getTextLang(aboutMeTexts.course.detail, activeLanguage)}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
