import React from "react"
import { HeaderStyled } from "./styles"
import Navbar from "../Navbar"

function Header(props) {
	return (
		<HeaderStyled>
			<h1>
				Luan <span>Poppe</span>
			</h1>
			<Navbar>
				<ul>
					<li
						className={
							props.activeNavbar === "hero"
								? "navbarSublinhado"
								: ""
						}
					>
						<a href="#hero">Home</a>
					</li>
					<li
						className={
							props.activeNavbar === "sobre-mim"
								? "navbarSublinhado"
								: ""
						}
					>
						<a href="#sobre-mim">Sobre mim</a>
					</li>
					<li
						className={
							props.activeNavbar === "habilidades"
								? "navbarSublinhado"
								: ""
						}
					>
						<a href="#habilidades">Habilidades</a>
					</li>
					<li
						className={
							props.activeNavbar === "projetos"
								? "navbarSublinhado"
								: ""
						}
					>
						<a href="#projetos">Projetos</a>
					</li>
				</ul>
			</Navbar>
			<div className="header-background"></div>
		</HeaderStyled>
	)
}

export default Header
