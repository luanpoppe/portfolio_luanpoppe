import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="container">
			<div className="subContainer">
				<Header />
				<Main />
				<footer>footer</footer>
			</div>
		</div>
	);
}

export default App;
