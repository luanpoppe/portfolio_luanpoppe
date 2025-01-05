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
		return ""
	}

	return (
		<NavbarStyled className="w-100 d-none d-lg-flex jcc aic mx-0">
			<ul className="d-flex jcc aic m-0 gap-3 gap-xxl-5">
				<li className={defineUnderlinedNavbar("hero")}>
					<a href="#hero">Home</a>
				</li>
				<li className={defineUnderlinedNavbar("sobre-mim")}>
					<a href="#sobre-mim">
						{getTextLang(navbarTexts.sobreMim, activeLanguage)}
					</a>
				</li>
				<li className={defineUnderlinedNavbar("habilidades")}>
					<a href="#habilidades">
						{getTextLang(navbarTexts.habilidades, activeLanguage)}
					</a>
				</li>
				<li className={defineUnderlinedNavbar("projetos")}>
					<a href="#projetos">
						{getTextLang(navbarTexts.projetos, activeLanguage)}
					</a>
				</li>
			</ul>
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	li {
		&:hover {
			transition: all ease 0.5s;
			transform: scale(1.05);
		}
	}

	.navbarSublinhado {
		border: none;
		border-bottom: 3px ${corAzul} solid;
	}
`
