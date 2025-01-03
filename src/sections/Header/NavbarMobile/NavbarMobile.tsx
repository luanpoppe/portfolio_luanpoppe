import { useState } from "react"
import {
	NavbarBackgroundStyled,
	NavbarMobileStyled,
	NavbarOpenStyled
} from "./NavbarMobileStyled"
import { navbarTexts } from "../../../utils/textos/navbar"

export function NavbarMobile(props) {
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)

	function abrirNavbarMobile() {
		setIsNavbarMobileOpen(!isNavbarMobileOpen)
	}

	return (
		<>
			<NavbarMobileStyled className={props.className}>
				<div
					onClick={() => abrirNavbarMobile()}
					className="hamburguer-menu"
				>
					<span></span>
					<span></span>
					<span></span>
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
