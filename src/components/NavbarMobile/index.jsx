import React, { useState } from "react"
import { NavbarMobileStyled, NavbarOpenStyled } from "./style"

function NavbarMobile(props) {
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(true)

	function abrirNavbarMobile() {
		setIsNavbarMobileOpen(!isNavbarMobileOpen)
	}

	return (
		<NavbarMobileStyled onClick={() => abrirNavbarMobile()}>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<h1>
				Luan <span>Poppe</span>
			</h1>
			{isNavbarMobileOpen && (
				<NavbarOpenStyled>
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
				</NavbarOpenStyled>
			)}
		</NavbarMobileStyled>
	)
}

export default NavbarMobile
