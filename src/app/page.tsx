import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"

export default function HomePage() {
	return (
		<div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
			<div
				aria-hidden
				className="pointer-events-none fixed left-1/2 top-[-200px] -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
				style={{
					background:
						"radial-gradient(closest-side, color-mix(in oklab, var(--accent) 18%, transparent), transparent)"
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none fixed right-[-200px] top-[40vh] -z-10 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
				style={{
					background:
						"radial-gradient(closest-side, color-mix(in oklab, var(--accent) 12%, transparent), transparent)"
				}}
			/>

			<Header />

			<main className="mx-auto max-w-6xl px-6 pt-32 md:pt-36">
				<Hero />
			</main>
		</div>
	)
}
