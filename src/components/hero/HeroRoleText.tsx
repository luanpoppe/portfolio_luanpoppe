"use client"

import { useEffect, useState } from "react"

type Props = {
	text: string
}

export function HeroRoleText({ text }: Props) {
	const fullText = `${text}.`
	const [displayed, setDisplayed] = useState("")
	const [isComplete, setIsComplete] = useState(false)

	useEffect(() => {
		const content = `${text}.`
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches

		if (prefersReducedMotion) {
			setDisplayed(content)
			setIsComplete(true)
			return
		}

		setDisplayed("")
		setIsComplete(false)

		let index = 0
		const timer = window.setInterval(() => {
			index += 1
			setDisplayed(content.slice(0, index))

			if (index >= content.length) {
				window.clearInterval(timer)
				setIsComplete(true)
			}
		}, 60)

		return () => window.clearInterval(timer)
	}, [text])

	return (
		<span className="inline-grid" aria-label={fullText}>
			<span aria-hidden="true" className="invisible col-start-1 row-start-1">
				{fullText}
			</span>
			<span className="col-start-1 row-start-1 w-full min-w-0 text-muted-foreground">
				<span className="hero-role-highlight">{displayed}</span>
				{!isComplete && (
					<span
						className="ml-0.5 font-light text-accent motion-safe:animate-pulse"
						aria-hidden
					>
						|
					</span>
				)}
			</span>
		</span>
	)
}
