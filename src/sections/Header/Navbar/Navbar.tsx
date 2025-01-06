import styled from "styled-components"
import { corAzul } from "../../../utils/colors"
import { getTextLang } from "../../../utils/textos/funcs"
import { navbarTexts } from "../../../utils/textos/navbar"

type Props = PropActiveLanguage & {
	activeNavbar: ActiveNavbar
}

export function Navbar({ activeNavbar, activeLanguage }: Props) {
	function defineUnderlinedNavbar(navbarName: string) {
		if (navbarName == activeNavbar) return "navbarSublinhado"
		return "d-none"
	}

	return (
		<NavbarStyled className="w-100 d-none d-lg-flex jcc aic mx-0">
			<ul className="d-flex jcc aic m-0 gap-3 gap-xxl-5">
				<li>
					<a href="#hero">Home</a>
					<div className={defineUnderlinedNavbar("hero")}></div>
				</li>
				<li>
					<a href="#sobre-mim">
						{getTextLang(navbarTexts.sobreMim, activeLanguage)}
					</a>
					<div className={defineUnderlinedNavbar("sobre-mim")}></div>
				</li>
				<li>
					<a href="#habilidades">
						{getTextLang(navbarTexts.habilidades, activeLanguage)}
					</a>
					<div
						className={defineUnderlinedNavbar("habilidades")}
					></div>
				</li>
				<li>
					<a href="#projetos">
						{getTextLang(navbarTexts.projetos, activeLanguage)}
					</a>
					<div className={defineUnderlinedNavbar("projetos")}></div>
				</li>
			</ul>
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	li,
	a {
		font-size: 1.3rem;
		transition: all ease 0.5s;
		&:hover {
			transition: all ease 0.5s;
			color: ${corAzul};
			transform: scale(1.05);
		}
	}

	.navbarSublinhado {
		width: 100%;
		height: 3px;
		background-color: ${corAzul};
	}
`
