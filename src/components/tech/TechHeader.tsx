"use client"

import { useState } from "react"
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechNavTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"
import { TechLogo } from "./TechLogo"
import { TechWhatsAppButton } from "./TechWhatsAppButton"

const FLAG_SRC = {
	portuguese:
		"https://cdn-icons-png.flaticon.com/512/16398/16398104.png",
	english: "https://cdn-icons-png.flaticon.com/512/555/555526.png"
} as const

const NAV_ITEMS = [
	{ href: "#servicos", key: "servicos" as const },
	{ href: "#para-quem", key: "paraQuem" as const },
	{ href: "#como-funciona", key: "comoFunciona" as const },
	{ href: "#case", key: "caseReal" as const },
	{ href: "#contato", key: "contato" as const }
]

export function TechHeader() {
	const { activeLanguage, activeTheme, toggleLanguage, toggleTheme } =
		useAppContext()
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4">
			<nav className="flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-border bg-card/80 px-3 py-2.5 backdrop-blur-xl">
				<a href="#home" className="flex items-center gap-2 pl-2 pr-1">
					<TechLogo />
				</a>

				<ul className="hidden items-center gap-1 md:flex">
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
							>
								{getTextLang(poppeTechNavTexts[item.key], activeLanguage)}
							</a>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-1.5">
					<button
						type="button"
						onClick={toggleTheme}
						className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
						aria-label={
							activeTheme === "dark"
								? "Ativar modo claro"
								: "Ativar modo escuro"
						}
					>
						{activeTheme === "dark" ? (
							<Sun className="h-3.5 w-3.5" />
						) : (
							<Moon className="h-3.5 w-3.5" />
						)}
					</button>

					<button
						type="button"
						onClick={toggleLanguage}
						className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex"
						aria-label="Alternar idioma"
					>
						<img
							src={FLAG_SRC[activeLanguage]}
							alt=""
							className="h-3.5 w-3.5 rounded-full object-cover"
							aria-hidden
						/>
						{activeLanguage === "portuguese" ? "PT" : "EN"}
					</button>

					<TechWhatsAppButton className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 sm:inline-flex">
						<MessageCircle className="h-4 w-4" aria-hidden />
						<span className="hidden sm:inline">
							{getTextLang(poppeTechNavTexts.whatsapp, activeLanguage)}
						</span>
						<span className="sm:hidden">
							{getTextLang(poppeTechNavTexts.whatsappShort, activeLanguage)}
						</span>
					</TechWhatsAppButton>

					<button
						type="button"
						onClick={() => setMobileOpen((prev) => !prev)}
						className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground md:hidden"
						aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
					>
						{mobileOpen ? (
							<X className="h-4 w-4" />
						) : (
							<Menu className="h-4 w-4" />
						)}
					</button>
				</div>
			</nav>

			{mobileOpen && (
				<div className="absolute top-14 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 backdrop-blur-xl md:hidden">
					<ul className="flex flex-col gap-1">
						{NAV_ITEMS.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setMobileOpen(false)}
									className="block rounded-xl px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								>
									{getTextLang(poppeTechNavTexts[item.key], activeLanguage)}
								</a>
							</li>
						))}
					</ul>
					<div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
						<button
							type="button"
							onClick={toggleLanguage}
							className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-2 text-sm font-medium text-muted-foreground"
						>
							<img
								src={FLAG_SRC[activeLanguage]}
								alt=""
								className="h-3.5 w-3.5 rounded-full object-cover"
								aria-hidden
							/>
							{activeLanguage === "portuguese" ? "PT" : "EN"}
						</button>
						<TechWhatsAppButton className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
							<MessageCircle className="h-4 w-4" aria-hidden />
							{getTextLang(poppeTechNavTexts.whatsapp, activeLanguage)}
						</TechWhatsAppButton>
					</div>
				</div>
			)}
		</header>
	)
}
