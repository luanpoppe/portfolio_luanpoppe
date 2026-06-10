import type { Metadata } from "next"
import {
	POPPE_TECH_OG_IMAGE_URL,
	POPPE_TECH_SITE_URL
} from "@/utils/tech/constants"

const description =
	"Automatize atendimento, agendamentos e processos com chatbots de WhatsApp, automações e sistemas sob medida para consultórios, clínicas e pequenos negócios."

const ogDescription =
	"Chatbots e automações para consultórios e pequenos negócios que querem organizar agendamentos, responder mais rápido e reduzir tarefas repetitivas."

export const metadata: Metadata = {
	metadataBase: new URL("https://www.luanpoppe.com"),
	title: "Poppe Tech | Chatbots de WhatsApp e Automações para Consultórios e Negócios",
	description,
	openGraph: {
		title: "Poppe Tech | Automatize seu atendimento pelo WhatsApp",
		description: ogDescription,
		type: "website",
		url: POPPE_TECH_SITE_URL,
		locale: "pt_BR",
		alternateLocale: "en_US",
		images: [
			{
				url: POPPE_TECH_OG_IMAGE_URL,
				width: 1200,
				height: 630,
				alt: "Poppe Tech — Automação de atendimento pelo WhatsApp"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Poppe Tech | Automatize seu atendimento pelo WhatsApp",
		description: ogDescription,
		images: [POPPE_TECH_OG_IMAGE_URL]
	}
}

export default function TechLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
