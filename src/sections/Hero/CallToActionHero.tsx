import {
	AcessarCurriculoStyled,
	ContactIconsStyled,
	ContainerEntreEmContatoStyled
} from "./HeroStyled"
import { githubIcon, gmailIcon, linkedinIcon } from "../../utils/images"
import { heroTexts } from "../../utils/textos/hero"
import { getTextLang } from "../../utils/textos/funcs"
import { ClickArrowIcon } from "../../components/Icons/ClickArrowIcon"
import { FaWhatsapp } from "react-icons/fa"

export function CallToActionHero({ activeLanguage }: PropActiveLanguage) {
	return (
		<div className="container-acessar-curriculo mt-4 d-flex jcc flex-column flex-md-row w-100">
			<AcessarCurriculoStyled
				href="https://drive.google.com/file/d/1fd20PJj6w6JqNqwimLdGh7stiu9Q2yRR/view?usp=sharing"
				target="_blank"
			>
				<p className="m-0">
					{getTextLang(heroTexts.menores.curriculo, activeLanguage)}
					<ClickArrowIcon />
				</p>
			</AcessarCurriculoStyled>

			<ContainerEntreEmContatoStyled className="p-3">
				<p className="text-center">
					{getTextLang(heroTexts.menores.contato, activeLanguage)}
				</p>
				<div className="d-flex jcc gap-2">
					<a href="https://wa.me/5511978046445" target="_blank">
						<FaWhatsapp
							className="scale-up-350ms cursor-pointer"
							size={40}
							style={{ margin: "0 4px", color: "green" }}
						/>
					</a>
					<GitHubIcon />
					<LinkedinIcon />
					<EmailIcon />
				</div>
			</ContainerEntreEmContatoStyled>
		</div>
	)
}

function GitHubIcon() {
	return (
		<a
			className="scale-up-350ms"
			target="_blank"
			href="https://github.com/luanpoppe"
			title="GitHub"
			rel="noreferrer"
		>
			<ContactIconsStyled src={githubIcon} alt="GitHub" />
		</a>
	)
}

function LinkedinIcon() {
	return (
		<a
			className="scale-up-350ms"
			target="_blank"
			href="https://www.linkedin.com/in/luan-poppe/"
			title="LinkedIn"
			rel="noreferrer"
		>
			<ContactIconsStyled src={linkedinIcon} alt="LinkedIn" />
		</a>
	)
}

function EmailIcon() {
	return (
		<a
			href="mailto:luanpoppe@gmail.com"
			title="Entre em Contato"
			className="scale-up-350ms"
		>
			<ContactIconsStyled src={gmailIcon} alt="Gmail" />
		</a>
	)
}
