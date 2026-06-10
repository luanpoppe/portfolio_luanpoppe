import type { ReactNode } from "react"

type Props = {
	children: ReactNode
	icon?: ReactNode
}

export function TechSectionBadge({ children, icon }: Props) {
	return (
		<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
			{icon ?? <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
			{children}
		</div>
	)
}
