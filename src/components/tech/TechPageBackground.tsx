export function TechPageBackground() {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[oklch(0.78_0.14_295/.35)] blur-3xl" />
			<div className="absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full bg-[oklch(0.82_0.1_320/.35)] blur-3xl" />
			<div className="grain absolute inset-0 opacity-60" />
		</div>
	)
}
