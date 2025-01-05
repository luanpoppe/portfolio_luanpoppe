import {
	objetoProjetos,
	objetoProjetosIngles
} from "../../utils/objetoProjetos"

export function defineProjectsIndexes(
	activeLanguage: ActiveLanguage
): Projeto[] {
	if (activeLanguage == "english")
		return objetoProjetosIngles.map((state, index) => {
			return { ...state, indexNumber: index }
		})

	if (activeLanguage == "portuguese")
		return objetoProjetos.map((state, index) => {
			return { ...state, indexNumber: index }
		})
}

export function closeModal(
	stateModalIsOpen: boolean[],
	setStateModalIsOpen: SetState<boolean[]>
) {
	document.body.classList.remove("stop-scroll")

	setStateModalIsOpen(stateModalIsOpen.map((state) => state == false))
}
