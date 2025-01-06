import { AboutMeStyled } from "./AboutMeStyled"
import { TituloSecao } from "../../components/TituloSecao"
import ImagemSecao from "../../components/ImagemSecao"
import { imagemSecaoSobreMim } from "../../utils/images"
import { aboutMeTexts } from "../../utils/textos/aboutMe"
import { sobreMimTexto } from "../../utils/textos/titles"
import { getTextLang } from "../../utils/textos/funcs"
import { useAppContext } from "../../utils/useContext"

export function AboutMe() {
	const context = useAppContext()
	const { activeLanguage } = context

	return (
		<AboutMeStyled className="main-padding w-100 my-6 text-center d-flex flex-column">
			<TituloSecao id="sobre-mim" className="col-12 hidden">
				{getTextLang(sobreMimTexto, activeLanguage)}
			</TituloSecao>

			<div className="d-flex jcc flex-column flex-lg-row gap-3 gap-lg-5 mt-5 col-12 align-items-xxl-center hidden">
				<ImagemSecao
					src={imagemSecaoSobreMim}
					className="mb-4 d-block d-lg-none col-12"
				/>

				<AboutMeParagraphs
					activeLanguage={activeLanguage}
					className="d-flex flex-column gap-3 gap-lg-5 text-justify col-12 col-lg-6 col-xxl-5 text-center"
				/>

				<ImagemSecao
					src={imagemSecaoSobreMim}
					className="d-none d-lg-block col-5"
				/>
			</div>
		</AboutMeStyled>
	)
}

function AboutMeParagraphs({
	activeLanguage,
	className
}: PropActiveLanguage & PropClass) {
	return (
		<div className={className}>
			<p>{getTextLang(aboutMeTexts.paragraph1, activeLanguage)}</p>
			<p>{getTextLang(aboutMeTexts.paragraph2, activeLanguage)}</p>
		</div>
	)
}
