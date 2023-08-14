import React from "react"

import EstiloGlobal from "./globalStyle"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"

function App() {
	return (
		<>
			<EstiloGlobal />
			<MainContainer>
				<Header />
				<Hero />
				<AboutMe />
			</MainContainer>
		</>
	)
}

export default App
