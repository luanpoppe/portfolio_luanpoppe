import { Navbar } from "./Navbar"
import { NavbarMobile } from "./NavbarMobile"
import { IoLanguage } from "react-icons/io5"
import { FlagsComponents } from "./FlagsComponents"
import { useState } from "react"
import styled from "styled-components"
import { fontTitleHeader } from "../../utils/fontSizes"
import { corPadraoDeFundo } from "../../utils/colors"
import { useAppContext } from "../../utils/useContext"

const HeaderStyled = styled.header`
	background-color: ${corPadraoDeFundo};
	min-height: 120px;
	font-size: ${fontTitleHeader};
	z-index: 1;
`

export function Header() {
	const context = useAppContext()

	const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false)
	const { activeLanguage, activeNavbar, setActiveLanguage } = context

	return (
		<>
			<HeaderStyled className="main-padding w-100 d-flex jcb aic mb-4 position-sticky top-0 start-0 text-nowrap">
				<NavbarMobile />

				<h1
					className="m-0 cursor-pointer"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					{"<"}Luan <span className="color-purple">Poppe</span>
					{" />"}
				</h1>

				<Navbar
					activeNavbar={activeNavbar}
					activeLanguage={activeLanguage}
				/>

				<div className="position-relative">
					<IoLanguage
						className="cursor-pointer"
						size={32}
						onClick={() => setIsLanguageOpen(!isLanguageOpen)}
					/>
					{isLanguageOpen && (
						<FlagsComponents
							setActiveLanguage={setActiveLanguage}
							setIsLanguageOpen={setIsLanguageOpen}
						/>
					)}
				</div>
			</HeaderStyled>
		</>
	)
}
