import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [mostrarInicio, setMostrarInicio] = useState(true);
	const [mostrarBio, setMostrarBio] = useState(false);
	const [mostrarProjetos, setMostrarProjetos] = useState(false);

	function setFalseValues() {
		setMostrarInicio(false);
		setMostrarBio(false);
		setMostrarProjetos(false);
	}

	return (
		<div className="container">
			<div className="subContainer">
				<Header
					setFalseValues={setFalseValues}
					setMostrarInicio={setMostrarInicio}
					funcMostrarProjetos={setMostrarProjetos}
				/>
				<Main
					setFalseValues={setFalseValues}
					setMostrarBio={setMostrarBio}
					setMostrarInicio={setMostrarInicio}
					mostrarInicio={mostrarInicio}
					mostrarBio={mostrarBio}
					varMostrarProjetos={mostrarProjetos}
				/>
				<footer style={{ marginTop: "80px" }}>footer</footer>
			</div>
		</div>
	);
}

export default App;
