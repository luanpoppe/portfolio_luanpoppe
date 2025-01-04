import TituloSecao from "../../components/TituloSecao"
import { ImagensHabilidades } from "./ImagensHabilidades"
import { habilidadesTexto } from "../../utils/textos/titles"
import { getTextLang } from "../../utils/textos/funcs"

export function HabilidadesSecao({ activeLanguage }: PropActiveLanguage) {
	return (
		<section className="w-100 main-padding d-flex flex-column jcc mb-5">
			<TituloSecao id="habilidades" className="mb-5">
				{getTextLang(habilidadesTexto, activeLanguage)}
			</TituloSecao>
			{/* <HabilidadesSecaoStyled>
				<ImagensHabilidades />
			</HabilidadesSecaoStyled> */}
			<section className="d-flex flex-wrap row-gap-5 column-gap-4 column-gap-sm-5 justify-content-center column-gap-lg-5 w-100">
				<ImagensHabilidades />
			</section>
		</section>
	)
}
