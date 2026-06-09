"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { navbarTexts } from "@/utils/textos/navbar"
import {
	objetoProjetos,
	objetoProjetosIngles
} from "@/utils/objetoProjetos"
import { useAppContext } from "@/utils/useContext"

const FLAG_SRC = {
	portuguese:
		"https://cdn-icons-png.flaticon.com/512/16398/16398104.png ",
	english: "https://cdn-icons-png.flaticon.com/512/555/555526.png"
} as const

const NAV_ITEMS = [
	{ href: "#home", key: "home" as const, sectionId: "home" as ActiveNavbar },
	{
		href: "#sobre-mim",
		key: "sobreMim" as const,
		sectionId: "sobre-mim" as ActiveNavbar
	},
	{
		href: "#habilidades",
		key: "habilidades" as const,
		sectionId: "habilidades" as ActiveNavbar
	},
	{
		href: "#projetos",
		key: "projetos" as const,
		sectionId: "projetos" as ActiveNavbar
	}
]

export function Header() {
	const {
		activeLanguage,
		activeNavbar,
		setActiveLanguage,
		setProjectsObj,
		setActiveNavbar
	} = useAppContext()
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		const sections = NAV_ITEMS.map((item) =>
			document.getElementById(item.sectionId)
		).filter(Boolean) as HTMLElement[]

		if (sections.length === 0) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveNavbar(entry.target.id as ActiveNavbar)
					}
				})
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 }
		)

		sections.forEach((section) => observer.observe(section))
		return () => observer.disconnect()
	}, [setActiveNavbar])

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : ""
		return () => {
			document.body.style.overflow = ""
		}
	}, [mobileOpen])

	function toggleLanguage() {
		if (activeLanguage === "portuguese") {
			setActiveLanguage("english")
			setProjectsObj(objetoProjetosIngles)
		} else {
			setActiveLanguage("portuguese")
			setProjectsObj(objetoProjetos)
		}
	}

	return (
		<header className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4">
			<nav className="flex w-fit items-center gap-1.5 rounded-full border border-border/70 bg-white/75 px-2.5 py-2 shadow-[0_8px_30px_-12px_rgba(76,29,149,0.18)] backdrop-blur-xl">
				<a
					href="#home"
					className="px-3 py-1.5 text-[13px] font-bold tracking-tight text-foreground"
					onClick={() => setMobileOpen(false)}
				>
					Luan <span className="text-accent">Poppe</span>
				</a>

				<div className="mx-1 hidden h-4 w-px bg-border md:block" />

				<ul className="hidden items-center gap-0.5 md:flex">
					{NAV_ITEMS.map((item) => {
						const isActive = activeNavbar === item.sectionId

						return (
							<li key={item.href}>
								<a
									href={item.href}
									className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
										isActive
											? "text-accent"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{isActive && (
										<span className="absolute inset-0 -z-10 rounded-full bg-accent/10" />
									)}
									{getTextLang(navbarTexts[item.key], activeLanguage)}
								</a>
							</li>
						)
					})}
				</ul>

				<div className="mx-1 hidden h-4 w-px bg-border md:block" />

				<button
					type="button"
					onClick={toggleLanguage}
					className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
					aria-label="Trocar idioma"
				>
					<img
						src={FLAG_SRC[activeLanguage]}
						alt=""
						aria-hidden
						className="h-3 w-4 rounded-[2px] object-cover"
					/>
					{activeLanguage === "portuguese" ? "PT" : "EN"}
				</button>

				<button
					type="button"
					className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent md:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
				>
					{mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
				</button>
			</nav>

			{mobileOpen && (
				<div className="mt-2 w-fit min-w-full rounded-2xl border border-border/70 bg-white/90 p-3 shadow-[0_8px_30px_-12px_rgba(76,29,149,0.18)] backdrop-blur-xl md:hidden">
					<ul className="flex flex-col gap-1">
						{NAV_ITEMS.map((item) => {
							const isActive = activeNavbar === item.sectionId

							return (
								<li key={item.href}>
									<a
										href={item.href}
										onClick={() => setMobileOpen(false)}
										className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
											isActive
												? "bg-accent/10 text-accent"
												: "text-muted-foreground hover:bg-muted hover:text-foreground"
										}`}
									>
										{getTextLang(navbarTexts[item.key], activeLanguage)}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</header>
	)
}
