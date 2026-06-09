import { useEffect, useState } from "react"
import { ContextCreated } from "./utils/useContext"
import {
	objetoProjetos,
	objetoProjetosIngles
} from "./utils/objetoProjetos"
import {
	readStoredLanguage,
	readStoredTheme,
	writeStoredLanguage,
	writeStoredTheme
} from "./utils/storage"

function applyThemeClass(theme: ActiveTheme) {
	document.documentElement.classList.toggle("dark", theme === "dark")
}

export function AppContext({ children }: React.PropsWithChildren) {
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("home")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")
	const [activeTheme, setActiveTheme] = useState<ActiveTheme>("light")
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false)
	const [projectsObj, setProjectsObj] = useState<Projeto[]>(objetoProjetos)

	useEffect(() => {
		const storedLanguage = readStoredLanguage()
		if (storedLanguage === "english") {
			setActiveLanguage("english")
			setProjectsObj(objetoProjetosIngles)
		}

		const storedTheme = readStoredTheme()
		if (storedTheme) {
			setActiveTheme(storedTheme)
			applyThemeClass(storedTheme)
		}
	}, [])

	function toggleLanguage() {
		setActiveLanguage((prev) => {
			const next = prev === "portuguese" ? "english" : "portuguese"
			writeStoredLanguage(next)
			setProjectsObj(next === "english" ? objetoProjetosIngles : objetoProjetos)
			return next
		})
	}

	function toggleTheme() {
		setActiveTheme((prev) => {
			const next = prev === "light" ? "dark" : "light"
			writeStoredTheme(next)
			applyThemeClass(next)
			return next
		})
	}

	return (
		<ContextCreated.Provider
			value={{
				activeNavbar,
				setActiveNavbar,
				activeLanguage,
				setActiveLanguage,
				toggleLanguage,
				activeTheme,
				toggleTheme,
				isNavbarMobileOpen,
				setIsNavbarMobileOpen,
				projectsObj,
				setProjectsObj
			}}
		>
			{children}
		</ContextCreated.Provider>
	)
}
