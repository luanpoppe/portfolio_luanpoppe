export function defineActiveSection(setActiveNavbar: SetState<ActiveNavbar>) {
	const header = [...document.getElementsByTagName("header")][0]
	const headerHeight = header.offsetHeight

	const secaoSobreMim = document.getElementById("sobre-mim").offsetTop
	const secaoHabilidades = document.getElementById("habilidades").offsetTop
	const secaoProjetos = document.getElementById("projetos").offsetTop

	const scrollPosition = window.scrollY + headerHeight

	if (scrollPosition <= secaoSobreMim) return setActiveNavbar("hero")
	if (scrollPosition <= secaoHabilidades) return setActiveNavbar("sobre-mim")
	if (scrollPosition <= secaoProjetos) return setActiveNavbar("habilidades")
	return setActiveNavbar("projetos")
}
