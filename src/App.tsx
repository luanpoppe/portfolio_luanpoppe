import { EstiloGlobal } from "./globalStyle"
import { Header } from "./sections/Header"
import { MainContainer } from "./components/MainContainer"
import { Hero } from "./sections/Hero"
import { AboutMe } from "./sections/AboutMe"
import { HabilidadesSecao } from "./sections/HabilidadesSecao"
import { ProjetosSecao } from "./sections/ProjetosSecao"
import { AppContext } from "./AppContext"
import { useEffect } from "react"
import { handleAnimation } from "./utils/animation"
import "bootstrap/dist/css/bootstrap.min.css"
import "./utils/styles/resetBootstrap.css"
import "./utils/styles/display.css"
import "./utils/styles/widthAndHeight.css"
import "./utils/styles/marginAndPadding.css"
import "./utils/styles/animations.css"

export function App() {
	useEffect(() => handleAnimation(), [])

	return (
		<>
			<EstiloGlobal />
			<AppContext>
				<MainContainer>
					<Header />
					<Hero />
					<AboutMe />
					<HabilidadesSecao />
					<ProjetosSecao />
				</MainContainer>
			</AppContext>
		</>
	)
}
