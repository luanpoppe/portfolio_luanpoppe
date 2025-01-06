import React, { useState } from "react"
import { navbarTexts } from "../../../utils/textos/navbar"
import { Modal } from "react-bootstrap"
import { RxHamburgerMenu } from "react-icons/rx"
import { corPadraoTextos } from "../../../utils/colors"
import { getTextLang } from "../../../utils/textos/funcs"

type Props = PropActiveNavbar &
	PropClass &
	PropActiveLanguage & {
		setActiveNavbar: SetState<ActiveNavbar>
		setActiveLanguage: SetState<ActiveLanguage>
		setIsNavbarMobileOpen?: SetState<boolean>
		isNavbarMobileOpen?: boolean
	}

export function NavbarMobile(props: Props) {
	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)

	return (
		<>
			<RxHamburgerMenu
				size={32}
				className="cursor-pointer d-block d-lg-none"
				onClick={() => setIsNavbarMobileOpen(!isNavbarMobileOpen)}
			/>
			<Modal
				animation={false}
				dialogAs={() =>
					NavbarMobileOk({
						...props,
						isNavbarMobileOpen,
						setIsNavbarMobileOpen
					})
				}
				show={isNavbarMobileOpen}
				onHide={() => setIsNavbarMobileOpen(false)}
			/>
		</>
	)
}

function NavbarMobileOk(props: Props) {
	const styles: React.CSSProperties = {
		width: "60%",

		backgroundColor: "#bf9be7",
		backgroundImage: `linear-gradient(0deg, #571d99 0%, #3a0868 60%)`,

		height: "100vh",
		borderTopRightRadius: "2px",
		borderBottomRightRadius: "2px"
	}

	return (
		<div style={styles} className="d-flex flex-column slide-right">
			<ul className="m-0 p-0 d-flex flex-column gap-1">
				<ItemMenu {...props} idDaSecao="hero" isFirst={true}>
					{getTextLang(navbarTexts.home, props.activeLanguage)}
				</ItemMenu>
				<ItemMenu {...props} idDaSecao="sobre-mim">
					{getTextLang(navbarTexts.sobreMim, props.activeLanguage)}
				</ItemMenu>
				<ItemMenu {...props} idDaSecao="habilidades">
					{getTextLang(navbarTexts.habilidades, props.activeLanguage)}
				</ItemMenu>
				<ItemMenu {...props} idDaSecao="projetos">
					{getTextLang(navbarTexts.projetos, props.activeLanguage)}
				</ItemMenu>
			</ul>
		</div>
	)
}

type ItemMenuProps = Props &
	React.PropsWithChildren & {
		idDaSecao: string
		isFirst?: boolean
	}

function ItemMenu(props: ItemMenuProps) {
	const className = props.activeNavbar === "hero" ? "navbarSublinhado" : ""

	return (
		<>
			<li
				style={{
					borderRadius: props.isFirst ? "0px 0px 6px 6px" : "6px",
					fontSize: "1.5rem"
				}}
				className={`px-3 py-3 pb-1 ${className} ${
					props.className ?? ""
				}`}
			>
				<a
					href={`#${props.idDaSecao}`}
					onClick={() =>
						props.setIsNavbarMobileOpen(!props.isNavbarMobileOpen)
					}
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