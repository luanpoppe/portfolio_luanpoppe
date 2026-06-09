import type { IconType } from "react-icons"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

export const contactTexts = {
	sectionLabel: {
		ptbr: "04 — Contato",
		en: "04 — Contact"
	},
	titleBefore: {
		ptbr: "Vamos construir algo ",
		en: "Let's build something "
	},
	titleAccent: {
		ptbr: "juntos",
		en: "together"
	},
	titleAfter: {
		ptbr: "?",
		en: "?"
	},
	description: {
		ptbr: "Estou aberto a novos projetos freelance, colaborações e oportunidades. Me chame por onde for melhor para você.",
		en: "I'm open to freelance projects, collaborations, and opportunities. Reach out wherever works best for you."
	},
	footerRights: {
		ptbr: "Todos os direitos reservados.",
		en: "All rights reserved."
	},
	footerMadeWith: {
		ptbr: "Feito com cuidado",
		en: "Made with care"
	}
}

type ContactLink = {
	key: string
	href: string
	icon: IconType
	label: { ptbr: string; en: string }
	action: { ptbr: string; en: string }
}

export const contactLinks: ContactLink[] = [
	{
		key: "whatsapp",
		href: "https://wa.me/5511978046445",
		icon: FaWhatsapp,
		label: { ptbr: "WhatsApp", en: "WhatsApp" },
		action: { ptbr: "Chamar", en: "Message" }
	},
	{
		key: "gmail",
		href: "mailto:luanpoppe@gmail.com",
		icon: HiOutlineMail,
		label: { ptbr: "Gmail", en: "Gmail" },
		action: { ptbr: "Enviar e-mail", en: "Send email" }
	},
	{
		key: "linkedin",
		href: "https://www.linkedin.com/in/luan-poppe/",
		icon: FaLinkedinIn,
		label: { ptbr: "LinkedIn", en: "LinkedIn" },
		action: { ptbr: "Conectar", en: "Connect" }
	},
	{
		key: "github",
		href: "https://github.com/luanpoppe",
		icon: FaGithub,
		label: { ptbr: "GitHub", en: "GitHub" },
		action: { ptbr: "Seguir", en: "Follow" }
	}
]
