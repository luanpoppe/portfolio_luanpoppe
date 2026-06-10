"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechAboutFounderTexts } from "@/utils/textos/poppeTech/aboutFounder"
import { getPoppeTechWhatsappUrl } from "@/utils/tech/constants"
import { useAppContext } from "@/utils/useContext"
import fotoPerfilLuan from "@/images/foto_perfil_luan.jpg"

export function TechAboutFounder() {
	const { activeLanguage } = useAppContext()

	return (
		<section className="py-20 md:py-32" id="sobre">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
						{/* Imagem */}
						<div className="relative mx-auto w-full max-w-md md:mx-0 md:max-w-none" data-reveal>
							{/* Efeito de fundo */}
							<div
								aria-hidden
								className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
								style={{
									background:
										"radial-gradient(closest-side, color-mix(in oklab, var(--tech-primary) 40%, transparent), transparent)"
								}}
							/>
							
							{/* Container da Imagem */}
							<div className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-card p-2 shadow-[0_20px_40px_-15px_rgba(107,70,193,0.15)]">
								<div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-muted/20">
									<Image
										src={fotoPerfilLuan}
										alt="Retrato de Luan Poppe"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
									/>
								</div>

								{/* Card Flutuante */}
								<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-background/80 px-5 py-3 shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
									<div>
										<p className="font-semibold text-foreground">
											{getTextLang(poppeTechAboutFounderTexts.floatingCard.title, activeLanguage)}
										</p>
										<p className="text-xs font-medium text-muted-foreground">
											{getTextLang(poppeTechAboutFounderTexts.floatingCard.subtitle, activeLanguage)}
										</p>
									</div>
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-tech-primary/10 text-tech-primary">
										<span className="relative flex h-2 w-2">
											<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tech-primary opacity-75" />
											<span className="relative inline-flex h-2 w-2 rounded-full bg-tech-primary" />
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Conteúdo */}
						<div className="flex flex-col justify-center" data-reveal>
							<div className="mb-6 inline-flex w-fit items-center rounded-full border border-tech-primary/20 bg-tech-primary/5 px-3 py-1 text-xs font-medium text-tech-primary">
								{getTextLang(poppeTechAboutFounderTexts.badge, activeLanguage)}
							</div>

							<h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
								{getTextLang(poppeTechAboutFounderTexts.title, activeLanguage)}
							</h2>

							<p className="mb-6 text-lg font-medium text-foreground">
								{getTextLang(poppeTechAboutFounderTexts.subtitle, activeLanguage)}
							</p>

							<p className="mb-10 text-base leading-relaxed text-muted-foreground">
								{getTextLang(poppeTechAboutFounderTexts.description, activeLanguage)}
							</p>

							{/* Mini Cards */}
							<div className="mb-10 grid gap-4 sm:grid-cols-1">
								{poppeTechAboutFounderTexts.cards.map((card, idx) => (
									<div 
										key={idx}
										className="group flex flex-col gap-1 rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-tech-primary/30 hover:bg-card"
									>
										<h3 className="font-semibold text-foreground">
											{getTextLang(card.title, activeLanguage)}
										</h3>
										<p className="text-sm text-muted-foreground">
											{getTextLang(card.description, activeLanguage)}
										</p>
									</div>
								))}
							</div>

							{/* CTA */}
							<div>
								<a
									href={getPoppeTechWhatsappUrl(activeLanguage)}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
								>
									<FaWhatsapp className="h-4 w-4 text-green-500" />
									{getTextLang(poppeTechAboutFounderTexts.cta, activeLanguage)}
									<ArrowUpRight className="h-4 w-4 opacity-50" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
