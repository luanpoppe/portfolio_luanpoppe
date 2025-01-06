import React from "react"
import { navbarTexts } from "../../../utils/textos/navbar"
import { Modal } from "react-bootstrap"
import { RxHamburgerMenu } from "react-icons/rx"
import { corPadraoTextos } from "../../../utils/colors"
import { getTextLang } from "../../../utils/textos/funcs"
import { useAppContext } from "../../../utils/useContext"

export function NavbarMobile() {
	const context = useAppContext()
	const { isNavbarMobileOpen, setIsNavbarMobileOpen } = context

	return (
		<>
			<RxHamburgerMenu
				size={32}
				className="cursor-pointer d-block d-lg-none mt-2"
				onClick={() => setIsNavbarMobileOpen(!isNavbarMobileOpen)}
			/>
			<Modal
				animation={false}
				dialogAs={() => NavbarMobileOk()}
				show={isNavbarMobileOpen}
				onHide={() => setIsNavbarMobileOpen(false)}
			/>
		</>
	)
}

function NavbarMobileOk() {
	const styles: React.CSSProperties = {
		width: "60%",

		backgroundColor: "#bf9be7",
		backgroundImage: `linear-gradient(0deg, #571d99 0%, #3a0868 60%)`,

		height: "100vh",
		borderTopRightRadius: "2px",
		borderBottomRightRadius: "2px"
	}

	const context = useAppContext()
	const { activeLanguage } = context

	return (
		<div style={styles} className="d-flex flex-column slide-right">
			<ul className="m-0 p-0 d-flex flex-column gap-1">
				<ItemMenu idDaSecao="hero" isFirst={true}>
					{getTextLang(navbarTexts.home, activeLanguage)}
				</ItemMenu>
				<ItemMenu idDaSecao="sobre-mim">
					{getTextLang(navbarTexts.sobreMim, activeLanguage)}
				</ItemMenu>
				<ItemMenu idDaSecao="habilidades">
					{getTextLang(navbarTexts.habilidades, activeLanguage)}
				</ItemMenu>
				<ItemMenu idDaSecao="projetos">
					{getTextLang(navbarTexts.projetos, activeLanguage)}
				</ItemMenu>
			</ul>
		</div>
	)
}

type ItemMenuProps = React.PropsWithChildren & {
	idDaSecao: string
	isFirst?: boolean
}

function ItemMenu(props: ItemMenuProps) {
	const context = useAppContext()
	const { activeNavbar, setIsNavbarMobileOpen, isNavbarMobileOpen } = context
	const className = activeNavbar === "hero" ? "navbarSublinhado" : ""

	return (
		<>
			<li
				style={{
					borderRadius: props.isFirst ? "0px 0px 6px 6px" : "6px",
					fontSize: "1.5rem"
				}}
				className={`px-3 py-3 pb-1 ${className}`}
			>
				<a
					href={`#${props.idDaSecao}`}
					onClick={() => setIsNavbarMobileOpen(!isNavbarMobileOpen)}
				>
					{props.children}
				</a>
			</li>
			<div
				className="mx-3"
				style={{
					backgroundColor: corPadraoTextos,
					width: "85%",
					height: "2px"
				}}
			></div>
		</>
	)
}
