import React from "react"

import EstiloGlobal from "./globalStyle"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import HabilidadesSecao from "./components/HabilidadesSecao"
import ProjetosSecao from "./components/ProjetosSecao"

function App() {
	return (
		<>
			<EstiloGlobal />
			<MainContainer>
				<Header />
				<Hero />
				<AboutMe />
				<HabilidadesSecao />
				<ProjetosSecao />
			</MainContainer>
		</>
	)
}

export default App
