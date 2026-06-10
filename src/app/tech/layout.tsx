import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Poppe Tech — Automação e chatbots para WhatsApp",
	description:
		"A Poppe Tech cria chatbots, automações e sistemas sob medida para reduzir tarefas repetitivas, organizar agendamentos e liberar tempo da sua equipe."
}

export default function TechLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
