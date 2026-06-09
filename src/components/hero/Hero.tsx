"use client"

import Image from "next/image"
import { ArrowUpRight, Download } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { getTextLang } from "@/utils/textos/funcs"
import { heroTexts } from "@/utils/textos/hero"
import { useAppContext } from "@/utils/useContext"
import { useRevealOnScroll } from "@/utils/useRevealOnScroll"
import fotoPerfilLuan from "@/images/foto_perfil_luan.jpg"
import { HeroRoleText } from "./HeroRoleText"

const RESUME_URL =
	"https://drive.google.com/file/d/1-JKlDFYI2hG1M2gysKInJ1aKDGZPhnDa/view?usp=sharing"

const SOCIAL_LINKS = [
	{
		icon: FaWhatsapp,
		label: "WhatsApp",
		href: "https://wa.me/5511978046445"
	},
	{
		icon: FaGithub,
		label: "GitHub",
		href: "https://github.com/luanpoppe"
	},
	{
		icon: FaLinkedinIn,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/luan-poppe/"
	},
	{
		icon: HiOutlineMail,
		label: "Gmail",
		href: "mailto:luanpoppe@gmail.com"
	}
]

export function Hero() {
	const { activeLanguage } = useAppContext()
	useRevealOnScroll()

	return (
		<section
			id="home"
			className="grid grid-cols-1 items-center gap-10 pb-24 md:grid-cols-12 md:gap-12 md:pb-32"
		>
			<div className="md:col-span-7" data-reveal>
				<span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
					<span className="relative flex h-1.5 w-1.5">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
						<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
					</span>
					{getTextLang(heroTexts.badge, activeLanguage)}
				</span>

				<h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
					{getTextLang(heroTexts.headlineBefore, activeLanguage)}
					<span className="text-accent">
						{getTextLang(heroTexts.headlineAccent, activeLanguage)}
					</span>
					.{" "}
					<span className="text-muted-foreground">
						{getTextLang(heroTexts.headlineAfterPrefix, activeLanguage)}
					</span>
					<HeroRoleText
						text={getTextLang(heroTexts.headlineRole, activeLanguage)}
					/>
				</h1>

				<p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
					{getTextLang(heroTexts.secondaryText, activeLanguage)}
				</p>

				<div className="mt-9 flex flex-wrap items-center gap-3">
					<a
						href={RESUME_URL}
						target="_blank"
						rel="noreferrer"
						className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[0_10px_30px_-12px_rgba(76,29,149,0.45)] transition-all duration-300 hover:bg-accent hover:shadow-[0_10px_30px_-8px_rgba(124,58,237,0.5)]"
					>
						<Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
						{getTextLang(heroTexts.actions.resume, activeLanguage)}
					</a>

					<a
						href="#contato"
						className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
					>
						{getTextLang(heroTexts.actions.contact, activeLanguage)}
						<ArrowUpRight className="h-4 w-4" />
					</a>

					<div className="ml-1 flex items-center gap-1.5">
						{SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith("mailto:") ? undefined : "_blank"}
								rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
								aria-label={label}
								className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
							>
								<Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="md:col-span-5" data-reveal>
				<div className="relative mx-auto max-w-sm md:max-w-none">
					<div
						aria-hidden
						className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
						style={{
							background:
								"radial-gradient(closest-side, color-mix(in oklab, var(--accent) 30%, transparent), transparent)"
						}}
					/>
					<div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-[0_30px_60px_-20px_rgba(76,29,149,0.25)]">
						<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem]">
							<Image
								src={fotoPerfilLuan}
								alt="Retrato de Luan Poppe"
								fill
								sizes="(max-width: 768px) 100vw, 420px"
								className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
								priority
							/>
						</div>
						<div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border bg-card/80 px-4 py-2.5 backdrop-blur-xl">
							<div>
								<p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
									{getTextLang(heroTexts.portraitOverlayLabel, activeLanguage)}
								</p>
								<p className="text-sm font-semibold">
									{getTextLang(heroTexts.portraitOverlayRole, activeLanguage)}
								</p>
							</div>
							<span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
								{getTextLang(heroTexts.portraitOverlayBadge, activeLanguage)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
