"use client"

import { getTextLang } from "@/utils/textos/funcs"
import { contactLinks, contactTexts } from "@/utils/textos/contact"
import { useAppContext } from "@/utils/useContext"
import { useRevealOnScroll } from "@/utils/useRevealOnScroll"

export function Contact() {
	const { activeLanguage } = useAppContext()
	useRevealOnScroll()

	return (
		<section id="contato" className="py-24 md:py-32" data-reveal>
			<div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
				<div
					aria-hidden
					className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-60 blur-3xl"
					style={{
						background:
							"radial-gradient(closest-side, color-mix(in oklab, var(--accent) 25%, transparent), transparent)"
					}}
				/>

				<div className="relative grid grid-cols-1 items-end gap-10 md:grid-cols-2">
					<div>
						<p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
							{getTextLang(contactTexts.sectionLabel, activeLanguage)}
						</p>
						<h2 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
							{getTextLang(contactTexts.titleBefore, activeLanguage)}
							<span className="text-accent">
								{getTextLang(contactTexts.titleAccent, activeLanguage)}
							</span>
							{getTextLang(contactTexts.titleAfter, activeLanguage)}
						</h2>
						<p className="mt-5 max-w-md text-muted-foreground">
							{getTextLang(contactTexts.description, activeLanguage)}
						</p>
					</div>

					<div className="grid grid-cols-2 gap-3">
						{contactLinks.map(({ key, href, icon: Icon, label, action }) => (
							<a
								key={key}
								href={href}
								target={href.startsWith("mailto:") ? undefined : "_blank"}
								rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
								className="group flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-background/60 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent hover:text-accent-foreground"
							>
								<div>
									<p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
										{getTextLang(label, activeLanguage)}
									</p>
									<p className="mt-1 text-sm font-semibold">
										{getTextLang(action, activeLanguage)}
									</p>
								</div>
								<Icon className="h-5 w-5 transition-transform group-hover:rotate-6" />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
