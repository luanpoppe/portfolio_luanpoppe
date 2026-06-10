"use client"

import { ArrowRight } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechHeroTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechChatMockup } from "./TechChatMockup"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

export function TechHero() {
	const { activeLanguage } = useAppContext()

	return (
		<section id="home" className="relative px-6 pb-24 pt-36 md:pt-44">
			<div className="mx-auto max-w-6xl">
				<div className="grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
					<div data-reveal>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground backdrop-blur">
							<span className="h-1.5 w-1.5 rounded-full bg-primary" />
							{getTextLang(poppeTechHeroTexts.badge, activeLanguage)}
						</div>

						<h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
							{getTextLang(poppeTechHeroTexts.headlineBefore, activeLanguage)}
							<span className="relative whitespace-nowrap text-primary">
								{getTextLang(poppeTechHeroTexts.headlineAccent, activeLanguage)}
								<svg
									className="hero-headline-sync absolute -bottom-2.5 left-0 h-3 w-full opacity-80"
									viewBox="0 0 200 8"
									preserveAspectRatio="none"
									aria-hidden
								>
									<path
										d="M2 6 Q 50 1 100 5 T 198 4"
										stroke="var(--hero-accent-anim)"
										strokeWidth="3.5"
										fill="none"
										strokeLinecap="round"
									/>
								</svg>
							</span>
							{getTextLang(poppeTechHeroTexts.headlineAfter, activeLanguage)}
						</h1>

						<p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
							{getTextLang(poppeTechHeroTexts.description, activeLanguage)}
						</p>
						<p className="mt-3 max-w-xl text-base text-muted-foreground/80">
							{getTextLang(
								poppeTechHeroTexts.descriptionSecondary,
								activeLanguage
							)}
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<TechWhatsAppButton className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-primary/25">
								{getTextLang(poppeTechHeroTexts.ctaPrimary, activeLanguage)}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
							</TechWhatsAppButton>
							<a
								href="#como-funciona"
								className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
							>
								{getTextLang(poppeTechHeroTexts.ctaSecondary, activeLanguage)}
							</a>
						</div>
						<p className="mt-3 text-sm text-muted-foreground">
							{getTextLang(poppeTechHeroTexts.ctaNote, activeLanguage)}
						</p>
					</div>

					<TechChatMockup />
				</div>
			</div>
		</section>
	)
}
