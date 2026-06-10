export const STORAGE_KEYS = {
	language: "luanpoppe-language",
	theme: "luanpoppe-theme"
} as const

export function readStoredLanguage(): ActiveLanguage | null {
	try {
		const value = localStorage.getItem(STORAGE_KEYS.language)
		if (value === "english" || value === "portuguese") return value
	} catch {
		/* localStorage indisponível */
	}
	return null
}

export function readStoredTheme(): ActiveTheme | null {
	try {
		const value = localStorage.getItem(STORAGE_KEYS.theme)
		if (value === "light" || value === "dark") return value
	} catch {
		/* localStorage indisponível */
	}
	return null
}

export function writeStoredLanguage(language: ActiveLanguage) {
	try {
		localStorage.setItem(STORAGE_KEYS.language, language)
	} catch {
		/* localStorage indisponível */
	}
}

export function writeStoredTheme(theme: ActiveTheme) {
	try {
		localStorage.setItem(STORAGE_KEYS.theme, theme)
	} catch {
		/* localStorage indisponível */
	}
}
