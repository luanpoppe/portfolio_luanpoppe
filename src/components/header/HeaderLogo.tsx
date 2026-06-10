"use client"

import { useEffect, useState } from "react"

const SCROLL_COMPACT = 96
const SCROLL_EXPAND = 32

type Props = {
	onClick?: () => void
}

export function HeaderLogo({ onClick }: Props) {
	const [compact, setCompact] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY
			setCompact((prev) => {
				if (y > SCROLL_COMPACT) return true
				if (y < SCROLL_EXPAND) return false
				return prev
			})
		}

		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<a
			href="#home"
			className="px-3 py-1.5 text-[13px] font-bold tracking-tight text-foreground"
			onClick={onClick}
			aria-label="Luan Poppe"
		>
			<span className="inline-flex items-baseline whitespace-nowrap">
				<span
					className="relative inline-block overflow-hidden transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
					style={{ width: compact ? "2.05ch" : "4.15ch" }}
				>
					<span
						className={`block whitespace-nowrap transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
							compact ? "opacity-0" : "opacity-100"
						}`}
					>
						Luan
					</span>
					<span
						className={`absolute inset-y-0 left-0 whitespace-nowrap transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
							compact ? "opacity-100" : "opacity-0"
						}`}
					>
						L.
					</span>
				</span>
				<span className="text-accent"> Poppe</span>
			</span>
		</a>
	)
}
