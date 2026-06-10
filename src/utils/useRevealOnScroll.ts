import { useEffect } from "react"

const REVEAL_SELECTOR = "[data-reveal]"
const REVEAL_CLASS = "animate-reveal"

export function useRevealOnScroll() {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
		if (elements.length === 0) return

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches

		if (prefersReducedMotion) {
			elements.forEach((el) => el.classList.add(REVEAL_CLASS))
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const shouldReveal =
						entry.isIntersecting && entry.intersectionRatio >= 0.2
					entry.target.classList.toggle(REVEAL_CLASS, shouldReveal)
				})
			},
			{
				// Exige que o elemento entre de fato na viewport (não só encoste na borda inferior)
				rootMargin: "0px 0px -12% 0px",
				threshold: [0, 0.2, 0.35, 0.5]
			}
		)

		elements.forEach((el) => observer.observe(el))
		return () => observer.disconnect()
	}, [])
}
