import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AsideMobile from "./components/AisdeMobile";

function App() {
	const [mostrarInicio, setMostrarInicio] = useState(true);
	const [mostrarBio, setMostrarBio] = useState(false);
	const [mostrarProjetos, setMostrarProjetos] = useState(false);
	const [mostrarSidebar, setMostrarSideBar] = useState(false);

	const [fadeIn, setFadeIn] = useState(false);

	function setFalseValues() {
		setMostrarInicio(false);
		setMostrarBio(false);
		setMostrarProjetos(false);
	}

	return (
		<>
			<div className="container">
				<div
					className="subContainer"
					onClick={() => {
						if (mostrarSidebar) {
							setMostrarSideBar(false);
						}
					}}
				>
					{mostrarSidebar && (
						<AsideMobile
							setFalseValues={setFalseValues}
							setMostrarInicio={setMostrarInicio}
							funcMostrarProjetos={setMostrarProjetos}
							setFadeIn={setFadeIn}
							fadeIn={fadeIn}
							setMostrarSideBar={setMostrarSideBar}
						/>
					)}
					<Header
						setFalseValues={setFalseValues}
						setMostrarInicio={setMostrarInicio}
						funcMostrarProjetos={setMostrarProjetos}
						setFadeIn={setFadeIn}
						fadeIn={fadeIn}
						setMostrarSideBar={setMostrarSideBar}
					/>
					<Main
						setFalseValues={setFalseValues}
						setMostrarBio={setMostrarBio}
						setMostrarInicio={setMostrarInicio}
						mostrarInicio={mostrarInicio}
						mostrarBio={mostrarBio}
						setFadeIn={setFadeIn}
						fadeIn={fadeIn}
						varMostrarProjetos={mostrarProjetos}
					/>
					<Footer />
				</div>
			</div>
			<div className="backgroundHeader"></div>
		</>
	);
}

export default App;
