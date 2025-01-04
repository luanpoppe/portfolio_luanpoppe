import { Navbar } from "./Navbar"
import { NavbarMobile } from "./NavbarMobile"
import { IoLanguage } from "react-icons/io5"
import { FlagsComponents } from "./FlagsComponents"
import { useState } from "react"
import styled from "styled-components"
import { fontTitleHeader } from "../../utils/fontSizes"
import { corAzul, corPadraoDeFundo } from "../../utils/colors"

type Props = PropActiveLanguage & {
	setActiveLanguage: React.Dispatch<React.SetStateAction<ActiveLanguage>>
	activeNavbar: ActiveNavbar
}

const HeaderStyled = styled.header`
	background-color: ${corPadraoDeFundo};
	min-height: 120px;
	font-size: ${fontTitleHeader};
	z-index: 1;

	span {
		color: ${corAzul};
	}
`

export function Header({
	activeLanguage,
	activeNavbar,
	setActiveLanguage
}: Props) {
	const [isLanguageOpen, setisLanguageOpen] = useState<boolean>(false)

	return (
		<>
			<HeaderStyled className="main-padding w-100 d-flex jcb aic mb-4 position-sticky top-0 start-0 text-nowrap">
				<NavbarMobile
					className="d-flex aic d-lg-none h-100"
					activeNavbar={activeNavbar}
					activeLanguage={activeLanguage}
					setActiveLanguage={setActiveLanguage}
				/>

				<h1 className="m-0">
					{"<"}Luan <span>Poppe</span>
					{" />"}
				</h1>

				<Navbar
					activeNavbar={activeNavbar}
					activeLanguage={activeLanguage}
				/>

				<div className="position-relative">
					<IoLanguage
						size={32}
						onClick={() => setisLanguageOpen(!isLanguageOpen)}
					/>
					{isLanguageOpen && (
						<FlagsComponents
							setActiveLanguage={setActiveLanguage}
						/>
					)}
				</div>
			</HeaderStyled>
		</>
	)
}
