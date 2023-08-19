import { createGlobalStyle } from "styled-components"
import { corPadraoDeFundo, corPadraoTextos } from "./utils/colors"

const EstiloGlobal = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		color: ${corPadraoTextos}
	}

	body {
		background-color: ${corPadraoDeFundo};
	}

	.stop-scroll {
		overflow-y: hidden;
	}
`

export default EstiloGlobal
