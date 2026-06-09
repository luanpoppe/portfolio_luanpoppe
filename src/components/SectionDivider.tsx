export function SectionDivider() {
	return (
		<div className="relative h-px overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
			<div className="absolute inset-y-0 w-1/4 animate-sweep bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
		</div>
	)
}
