import { PropsWithChildren, useEffect } from "react"
import { defineActiveSection } from "../../utils/navbar"
import { useAppContext } from "../../utils/useContext"

export function MainContainer({ children }: PropsWithChildren) {
	const context = useAppContext()
	const { setActiveNavbar } = context

	useEffect(() => {
		window.addEventListener("scroll", () => {
			defineActiveSection(setActiveNavbar)
		})
		return () =>
			window.removeEventListener("scroll", () => {
				defineActiveSection(setActiveNavbar)
			})
	}, [setActiveNavbar])

	return (
		<main className="d-flex flex-column w-100 max-vw-100">{children}</main>
	)
}
