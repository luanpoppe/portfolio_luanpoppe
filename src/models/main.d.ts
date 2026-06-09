declare type ActiveLanguage = "english" | "portuguese"

declare type ActiveNavbar =
	| "home"
	| "hero"
	| "servicos"
	| "sobre-mim"
	| "habilidades"
	| "projetos"
	| "contato"

declare type PropActiveLanguage = {
	activeLanguage: ActiveLanguage
}

declare type PropActiveNavbar = {
	activeNavbar: ActiveNavbar
}

declare type PropClass = {
	className?: string
}

declare type PropImage = {
	src: string
	alt?: string
}

declare type SetState<T> = React.Dispatch<React.SetStateAction<T>>
