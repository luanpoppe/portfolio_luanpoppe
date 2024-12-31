declare type ActiveLanguage = "english" | "portuguese"

declare type ActiveNavbar = "hero" | "sobre-mim" | "habilidades" | "projetos"

declare type PropActiveLanguage = {
	activeLanguage: ActiveLanguage
}

declare type PropMaxWidth = {
	maxWidth: string
}

declare type PropClass = {
	className?: string
}

declare type PropImage = {
	src: string
	alt?: string
}
