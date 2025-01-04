import { createGlobalStyle } from "styled-components"
import { corAzul, corPadraoDeFundo, corPadraoTextos } from "./utils/colors"

const EstiloGlobal = createGlobalStyle`
	:root {
		scroll-behavior: smooth;
		scroll-padding-top: 120px;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		/* font-family: 'Roboto', sans-serif; */
		color: ${corPadraoTextos}
	}

	body {
		background-color: ${corPadraoDeFundo};
		max-width: 100vw;
		min-height: 100vh;
	}

	.stop-scroll {
		overflow-y: hidden;
	}

	.main-padding {
		padding: 2rem 4rem;

		@media (min-width: 990px) {
			padding: 2rem 8rem;
		}
	}

	.color-purple {
		color: ${corAzul};
	}
`

export default EstiloGlobal
