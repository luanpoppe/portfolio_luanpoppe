import React from "react"
import { HeaderStyled } from "./styles"
import Navbar from "../Navbar"

function Header() {
	let navbarItens = 1

	return (
		<HeaderStyled>
			<h1>
				Luan <span>Poppe</span>
			</h1>
			<Navbar>
				<ul>
					<li
						onClick={() => (navbarItens = 1)}
						className={navbarItens === 1 ? "navbarSublinhado" : ""}
					>
						<a href="">Home</a>
					</li>
					<li
						onClick={() => (navbarItens = 2)}
						className={navbarItens === 2 ? "navbarSublinhado" : ""}
					>
						<a href="#sobre-mim">Sobre mim</a>
					</li>
					<li>
						<a href="#habilidades">Habilidades</a>
					</li>
					<li>
						<a href="">Projetos</a>
					</li>
				</ul>
			</Navbar>
		</HeaderStyled>
	)
}

export default Header
