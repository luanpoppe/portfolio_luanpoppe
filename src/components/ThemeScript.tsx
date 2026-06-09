import { STORAGE_KEYS } from "@/utils/storage"

const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEYS.theme}");if(t==="dark")document.documentElement.classList.add("dark");else if(t==="light")document.documentElement.classList.remove("dark");}catch(e){}})();`

export function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}
