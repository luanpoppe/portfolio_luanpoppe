"use client"

import { getTextLang } from "@/utils/textos/funcs"
import { contactTexts } from "@/utils/textos/contact"
import { useAppContext } from "@/utils/useContext"

export function Footer() {
	const { activeLanguage } = useAppContext()
	const year = new Date().getFullYear()

	return (
		<footer className="mx-auto max-w-6xl px-6 pb-10">
			<div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
				<p>
					© {year} Luan Poppe.{" "}
					{getTextLang(contactTexts.footerRights, activeLanguage)}
				</p>
				<p className="font-mono uppercase tracking-[0.25em]">
					{getTextLang(contactTexts.footerMadeWith, activeLanguage)}
				</p>
			</div>
		</footer>
	)
}
