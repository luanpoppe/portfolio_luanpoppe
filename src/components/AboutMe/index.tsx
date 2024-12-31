import { AboutMeContentStyled, AboutMeStyled } from "./styles"
import TituloSecao from "../TituloSecao"
import ImagemSecao from "../ImagemSecao"
import { imagemSecaoSobreMim } from "../../utils/images"
import { aboutMeTexts } from "../../utils/textos/aboutMe"
import { sobreMimTexto } from "../../utils/textos/titles"
import { getTextLang } from "../../utils/textos/funcs"

function AboutMe({
	activeLanguage,
	maxWidth
}: PropActiveLanguage & PropMaxWidth) {
	return (
		<AboutMeStyled maxWidth={maxWidth}>
			<TituloSecao id="sobre-mim">
				{getTextLang(sobreMimTexto, activeLanguage)}
			</TituloSecao>
			<AboutMeContentStyled>
				<div className="imagem-sobre-mim-mobile">
					<ImagemSecao src={imagemSecaoSobreMim} />
				</div>
				<div>
					<p>
						{getTextLang(aboutMeTexts.paragraph1, activeLanguage)}
					</p>
					<p>
						{getTextLang(aboutMeTexts.paragraph2, activeLanguage)}
					</p>
				</div>
				<ImagemSecao
					src={imagemSecaoSobreMim}
					className="imagem-sobre-mim-pc"
				/>
			</AboutMeContentStyled>
		</AboutMeStyled>
	)
}

export default AboutMe
