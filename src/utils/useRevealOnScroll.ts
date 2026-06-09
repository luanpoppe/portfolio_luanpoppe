import { useEffect } from "react"

export function useRevealOnScroll() {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-reveal")
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.12 }
		)

		elements.forEach((el) => observer.observe(el))
		return () => observer.disconnect()
	}, [])
}
