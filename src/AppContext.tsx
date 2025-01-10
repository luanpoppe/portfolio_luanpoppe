import { useState } from "react"
import { ContextCreated } from "./utils/useContext"
import { objetoProjetos } from "./utils/objetoProjetos"

export function AppContext({ children }: React.PropsWithChildren) {
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("hero")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false)
	const [projectsObj, setProjectsObj] = useState<Projeto[]>(objetoProjetos)

	return (
		<ContextCreated.Provider
			value={{
				activeNavbar,
				setActiveNavbar,
				activeLanguage,
				setActiveLanguage,
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
