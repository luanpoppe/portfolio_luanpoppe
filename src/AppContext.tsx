import { useState } from "react"
import { ContextCreated } from "./utils/useContext"

export function AppContext({ children }: React.PropsWithChildren) {
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("hero")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false)

	return (
		<ContextCreated.Provider
			value={{
				activeNavbar,
				setActiveNavbar,
				activeLanguage,
				setActiveLanguage,
				isNavbarMobileOpen,
				setIsNavbarMobileOpen
			}}
		>
			{children}
		</ContextCreated.Provider>
	)
}
