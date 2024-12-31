import { useEffect, useState } from "react"

import EstiloGlobal from "./globalStyle"
import { Header } from "./sections/Header"
import { MainContainer } from "./components/MainContainer"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import HabilidadesSecao from "./components/HabilidadesSecao"
import ProjetosSecao from "./components/ProjetosSecao"
import "./utils/styles/display.css"
import "./utils/styles/widthAndHeight.css"
import "./utils/styles/maxMinWidthAndHeight.css"
import "./utils/styles/marginAndPadding.css"

export function App() {
	const [scrollTop, setScrollTop] = useState(0)
	const [activeNavbar, setActiveNavbar] = useState<ActiveNavbar>("hero")
	const [activeLanguage, setActiveLanguage] =
		useState<ActiveLanguage>("portuguese")

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const secaoHabilidades =
				document.getElementById("habilidades").offsetTop
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
				<Hero maxWidth={"1080px"} activeLanguage={activeLanguage} />
				<AboutMe maxWidth={"1080px"} activeLanguage={activeLanguage} />
				<HabilidadesSecao
					maxWidth={"1080px"}
					activeLanguage={activeLanguage}
				/>
				<ProjetosSecao
					maxWidth={"1440px"}
					activeLanguage={activeLanguage}
				/>
			</MainContainer>
		</>
	)
}
