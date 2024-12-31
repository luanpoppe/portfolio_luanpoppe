import { HeaderStyled } from "./HeaderStyle"
import Navbar from "../../components/Navbar"
import NavbarMobile from "./NavbarMobile"
import { navbarTexts } from "../../utils/textos/navbar"
import { getTextLang } from "../../utils/textos/funcs"
import { IoLanguage } from "react-icons/io5"

type Props = PropActiveLanguage & {
	setActiveLanguage: React.Dispatch<React.SetStateAction<ActiveLanguage>>
	activeNavbar: ActiveNavbar
}

export function Header({
	activeLanguage,
	activeNavbar,
	setActiveLanguage
}: Props) {
	function defineUnderlinedNavbar(navbarName: string) {
		if (navbarName == activeNavbar) return "navbarSublinhado"
		return ""
	}

	return (
		<>
			<HeaderStyled className="w-100 none flex-md-row jcb aic">
				<h1>
					Luan <span>Poppe</span>
				</h1>
				<Navbar>
					<ul>
						{/* <div className="escolher-lingua">
							Language:
							<img
								onClick={() => {
									setActiveLanguage("portuguese")
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
								alt="Brasil"
							/>
							<img
								onClick={() => {
									setActiveLanguage("english")
								}}
								src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
								alt="EUA"
							/>
						</div> */}
						<li className={defineUnderlinedNavbar("hero")}>
							<a href="#hero">Home</a>
						</li>
						<li
							className={
								activeNavbar === "sobre-mim"
									? "navbarSublinhado"
									: ""
							}
						>
							<a href="#sobre-mim">
								{getTextLang(
									navbarTexts.sobreMim,
									activeLanguage
								)}
							</a>
						</li>
						<li className={defineUnderlinedNavbar("habilidades")}>
							<a href="#habilidades">
								{getTextLang(
									navbarTexts.habilidades,
									activeLanguage
								)}
							</a>
						</li>
						<li className={defineUnderlinedNavbar("projetos")}>
							<a href="#projetos">
								{getTextLang(
									navbarTexts.projetos,
									activeLanguage
								)}
							</a>
						</li>

						<li>
							<IoLanguage />
						</li>
					</ul>
				</Navbar>
			</HeaderStyled>
			<NavbarMobile
				activeNavbar={activeNavbar}
				activeLanguage={activeLanguage}
				setActiveLanguage={setActiveLanguage}
			/>
		</>
	)
}
