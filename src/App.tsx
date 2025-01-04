import { useEffect, useState } from "react"

import EstiloGlobal from "./globalStyle"
import { Header } from "./sections/Header"
import { MainContainer } from "./components/MainContainer"
import { Hero } from "./sections/Hero"
import { AboutMe } from "./sections/AboutMe"
import HabilidadesSecao from "./components/HabilidadesSecao"
import ProjetosSecao from "./components/ProjetosSecao"
import "bootstrap/dist/css/bootstrap.min.css"
import "./utils/styles/resetBootstrap.css"
import "./utils/styles/display.css"
import "./utils/styles/widthAndHeight.css"
import "./utils/styles/marginAndPadding.css"

export function App() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [scrollTop, setScrollTop] = useState(0)
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("hero")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")

	useEffect(() => {
		console.clear()

		window.addEventListener("scroll", () => {
			const secaoHabilidades =
				document.getElementById("habilidades").offsetTop
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const secaoHero = document.getElementById("hero").offsetTop
			const secaoSobreMim = document.getElementById("sobre-mim").offsetTop
			const secaoProjetos = document.getElementById("projetos").offsetTop
			// setScrollTop(evento.currentTarget.scrollY)
			if (scrollTop <= secaoSobreMim) {
				setActiveNavbar("hero")
			} else if (scrollTop <= secaoHabilidades) {
				setActiveNavbar("sobre-mim")
			} else if (scrollTop <= secaoProjetos) {
				setActiveNavbar("habilidades")
			} else {
				setActiveNavbar("projetos")
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<EstiloGlobal />
			<MainContainer>
				<Header
					activeNavbar={activeNavbar}
					setActiveLanguage={setActiveLanguage}
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
