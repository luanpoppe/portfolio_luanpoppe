type Props = {
	className?: string
}

export function TechLogo({ className = "" }: Props) {
	return (
		<span className={`flex items-center gap-2 ${className}`}>
			<span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
				<span className="font-mono text-xs font-bold">P</span>
			</span>
			<span className="text-base font-semibold tracking-tight">
				Poppe<span className="text-primary"> Tech</span>
			</span>
		</span>
	)
}
