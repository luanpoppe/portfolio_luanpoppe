import React from "react"
import { HeaderStyled } from "./styles"
import Navbar from "../Navbar"
import NavbarMobile from "../NavbarMobile"
import { navbarTexts } from "../../utils/textos/navbar"

function Header(props: any) {
	return (
		<>
			<HeaderStyled>
				<h1>
					Luan <span>Poppe</span>
				</h1>
				<Navbar>
					<ul>
						<div className="escolher-lingua">
							Language:
							<img
								onClick={() => {
									props.setActiveLanguage("portuguese")
									console.log(props.activeLanguage)
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
								alt="Brasil"
							/>
							<img
								onClick={() => {
									props.setActiveLanguage("english")
									console.log(props.activeLanguage)
								}}
								src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
								alt="EUA"
							/>
						</div>
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
							<a href="#sobre-mim">
								{props.activeLanguage === "english"
									? navbarTexts.sobreMim.en
									: props.activeLanguage === "portuguese"
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
							<a href="#habilidades">
								{props.activeLanguage === "english"
									? navbarTexts.habilidades.en
									: props.activeLanguage === "portuguese"
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
							<a href="#projetos">
								{" "}
								{props.activeLanguage === "english"
									? navbarTexts.projetos.en
									: props.activeLanguage === "portuguese"
									? navbarTexts.projetos.ptbr
									: ""}
							</a>
						</li>
					</ul>
				</Navbar>
				<div className="header-background"></div>
			</HeaderStyled>
			<NavbarMobile
				activeNavbar={props.activeNavbar}
				activeLanguage={props.activeLanguage}
				setActiveLanguage={props.setActiveLanguage}
			/>
		</>
	)
}

export default Header
