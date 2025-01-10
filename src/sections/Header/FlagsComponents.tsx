import { useEffect } from "react"
import styled from "styled-components"
import { useAppContext } from "../../utils/useContext"
import {
	objetoProjetos,
	objetoProjetosIngles
} from "../../utils/objetoProjetos"

type Props = {
	setActiveLanguage?: SetState<ActiveLanguage>
	setIsLanguageOpen?: SetState<boolean>
	changeLanguage?: (
		language: "english" | "portuguese",
		projectObj: Projeto[]
	) => void
}

export function FlagsComponents({
	setActiveLanguage,
	setIsLanguageOpen
}: Props) {
	const context = useAppContext()
	const { setProjectsObj } = context

	useEffect(() => {
		const callback = () => setIsLanguageOpen(false)
		const sections = [...document.getElementsByTagName("section")]
		sections.forEach((section) => {
			section.addEventListener("click", callback)
		})
		return () =>
			sections.forEach((section) => {
				section.removeEventListener("click", callback)
			})
	}, [])

	function changeLanguage(
		language: "english" | "portuguese",
		projectObj: Projeto[]
	) {
		setIsLanguageOpen(false)
		setActiveLanguage(language)
		setProjectsObj(projectObj)
	}

	return (
		<FlagStyled
			className={`d-flex flex-column gap-3 position-absolute top-100 mt-4 fade-in`}
		>
			<BrasilFlag changeLanguage={changeLanguage} />
			<USAFlag changeLanguage={changeLanguage} />
		</FlagStyled>
	)
}

const FlagStyled = styled.div`
	img {
		width: 32px;
		object-fit: cover;
		cursor: pointer;
		transition: all ease 0.5s;
	}
`

export function BrasilFlag({ changeLanguage }: Props) {
	return (
		<img
			onClick={() => changeLanguage("portuguese", objetoProjetos)}
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
			alt="Brasil"
		/>
	)
}

export function USAFlag({ changeLanguage }: Props) {
	return (
		<img
			onClick={() => changeLanguage("english", objetoProjetosIngles)}
			src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
			alt="EUA"
		/>
	)
}
