import { useEffect, useState } from "react"

import EstiloGlobal from "./globalStyle"
import { Header } from "./sections/Header"
import { MainContainer } from "./components/MainContainer"
import { Hero } from "./sections/Hero"
import { AboutMe } from "./sections/AboutMe"
import { HabilidadesSecao } from "./sections/HabilidadesSecao"
import { ProjetosSecao } from "./sections/ProjetosSecao"
import "bootstrap/dist/css/bootstrap.min.css"
import "./utils/styles/resetBootstrap.css"
import "./utils/styles/display.css"
import "./utils/styles/widthAndHeight.css"
import "./utils/styles/marginAndPadding.css"
import "./utils/styles/animations.css"
import { defineActiveSection } from "./utils/navbar"

export function App() {
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("hero")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")

	console.clear()
	useEffect(() => {
		console.log("ADICIONOU O EVENTO")
		window.addEventListener("scroll", () => {
			defineActiveSection(setActiveNavbar)
		})
		return () =>
			window.removeEventListener("scroll", () => {
				defineActiveSection(setActiveNavbar)
			})
	}, [])

	return (
		<>
			<EstiloGlobal />
			<MainContainer>
				<Header
					activeNavbar={activeNavbar}
					setActiveLanguage={setActiveLanguage}
					setActiveNavbar={setActiveNavbar}
					activeLanguage={activeLanguage}
				/>
				<Hero activeLanguage={activeLanguage} />
				<AboutMe activeLanguage={activeLanguage} />
				<HabilidadesSecao activeLanguage={activeLanguage} />
				<ProjetosSecao activeLanguage={activeLanguage} />
			</MainContainer>
		</>
	)
}
