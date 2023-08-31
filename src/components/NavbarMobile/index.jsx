import React, { useState } from "react"
import {
	NavbarBackgroundStyled,
	NavbarMobileStyled,
	NavbarOpenStyled
} from "./style"
import { navbarTexts } from "../../utils/textos/navbar"

function NavbarMobile(props) {
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)

	function abrirNavbarMobile() {
		setIsNavbarMobileOpen(!isNavbarMobileOpen)
	}

	return (
		<>
			<NavbarMobileStyled>
				<div
					onClick={() => abrirNavbarMobile()}
					className="hamburguer-menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="title-and-language">
					<h1>
						Luan <span>Poppe</span>
					</h1>
					<div className="escolher-lingua">
						Language:
						<img
							onClick={() => {
								props.setActiveLanguage("portuguese")
							}}
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
							alt="Brasil"
						/>
						<img
							onClick={() => {
								props.setActiveLanguage("english")
							}}
							src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
							alt="EUA"
						/>
					</div>
				</div>
				{isNavbarMobileOpen && (
					<>
						<NavbarOpenStyled>
							<ul>
								<li
									className={
										props.activeNavbar === "hero"
											? "navbarSublinhado"
											: ""
									}
								>
									<a
										href="#hero"
										onClick={() => abrirNavbarMobile()}
									>
										Home
									</a>
								</li>
								<li
									className={
										props.activeNavbar === "sobre-mim"
											? "navbarSublinhado"
											: ""
									}
								>
									<a
										href="#sobre-mim"
										onClick={() => abrirNavbarMobile()}
									>
										{props.activeLanguage === "english"
											? navbarTexts.sobreMim.en
											: props.activeLanguage ===
											  "portuguese"
											? navbarTexts.sobreMim.ptbr
											: ""}
									</a>
								</li>
								<li
									className={
										props.activeNavbar === "habilidades"
											? "navbarSublinhado"
											: ""
									}
								>
									<a
										href="#habilidades"
										onClick={() => abrirNavbarMobile()}
									>
										{props.activeLanguage === "english"
											? navbarTexts.habilidades.en
											: props.activeLanguage ===
											  "portuguese"
											? navbarTexts.habilidades.ptbr
											: ""}
									</a>
								</li>
								<li
									className={
										props.activeNavbar === "projetos"
											? "navbarSublinhado"
											: ""
									}
								>
									<a
										href="#projetos"
										onClick={() => abrirNavbarMobile()}
									>
										{props.activeLanguage === "english"
											? navbarTexts.projetos.en
											: props.activeLanguage ===
											  "portuguese"
											? navbarTexts.projetos.ptbr
											: ""}
									</a>
								</li>
							</ul>
						</NavbarOpenStyled>
					</>
				)}
			</NavbarMobileStyled>
			{isNavbarMobileOpen && (
				<NavbarBackgroundStyled onClick={() => abrirNavbarMobile()} />
			)}
		</>
	)
}

export default NavbarMobile
