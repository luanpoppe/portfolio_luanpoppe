import { createContext, useContext } from "react"

type ContextType = {
	activeNavbar: ActiveNavbar
	setActiveNavbar: SetState<ActiveNavbar>
	activeLanguage: ActiveLanguage
	setActiveLanguage: SetState<ActiveLanguage>
	isNavbarMobileOpen: boolean
	setIsNavbarMobileOpen: SetState<boolean>
	setProjectsObj: SetState<Projeto[]>
	projectsObj: Projeto[]
}

export const ContextCreated = createContext<ContextType>(null)
export const useAppContext = () => useContext(ContextCreated)
