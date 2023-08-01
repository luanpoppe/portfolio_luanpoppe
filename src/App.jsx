import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [mostrarInicio, setMostrarInicio] = useState(true);
	const [mostrarBio, setMostrarBio] = useState(false);
	const [mostrarProjetos, setMostrarProjetos] = useState(false);

	const [fadeIn, setFadeIn] = useState(false);

	function setFalseValues() {
		setMostrarInicio(false);
		setMostrarBio(false);
		setMostrarProjetos(false);
	}

	return (
		<>
			<div className="container">
				<div className="subContainer">
					<Header
						setFalseValues={setFalseValues}
						setMostrarInicio={setMostrarInicio}
						funcMostrarProjetos={setMostrarProjetos}
						setFadeIn={setFadeIn}
						fadeIn={fadeIn}
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
					<footer style={{ marginTop: "80px" }}>footer</footer>
				</div>
			</div>
			<div className="backgroundHeader"></div>
		</>
	);
}

export default App;
