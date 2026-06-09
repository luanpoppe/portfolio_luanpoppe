import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap"
})

export const metadata: Metadata = {
	title: "Luan Poppe — Desenvolvedor de Software",
	description:
		"Portfólio de Luan Poppe — desenvolvedor de software com foco em QA Automation, front-end e desenvolvimento Fullstack."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={inter.variable}>
			<body className="font-sans antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
