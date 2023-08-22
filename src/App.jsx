/* eslint-disable no-unused-vars */
import React, { useState } from "react"

import EstiloGlobal from "./globalStyle"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import HabilidadesSecao from "./components/HabilidadesSecao"
import ProjetosSecao from "./components/ProjetosSecao"

function App() {
	const [scrollTop, setScrollTop] = useState(0)
	const [activeNavbar, setActiveNavbar] = useState("hero")

	window.addEventListener("scroll", (evento) => {
		const secaoHabilidades =
			document.getElementById("habilidades").offsetTop
		const secaoHero = document.getElementById("hero").offsetTop
		const secaoSobreMim = document.getElementById("sobre-mim").offsetTop
		const secaoProjetos = document.getElementById("projetos").offsetTop
		setScrollTop(evento.currentTarget.scrollY)
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

	// useEffect

	return (
		<>
			<EstiloGlobal />
			<MainContainer>
				<Header activeNavbar={activeNavbar} />
				<Hero maxWidth={"1080px"} />
				<AboutMe maxWidth={"1080px"} />
				<HabilidadesSecao maxWidth={"1080px"} />
				<ProjetosSecao maxWidth={"1440px"} />
			</MainContainer>
		</>
	)
}

export default App
