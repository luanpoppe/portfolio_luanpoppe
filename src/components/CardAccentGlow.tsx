type Corner = "top-right" | "top-left"

type Props = {
	corner?: Corner
	size?: "lg" | "sm"
}

const positionClass: Record<"lg" | "sm", Record<Corner, string>> = {
	lg: {
		"top-right": "-right-24 -top-24",
		"top-left": "-left-24 -top-24"
	},
	sm: {
		"top-right": "-right-14 -top-14",
		"top-left": "-left-14 -top-14"
	}
}

export function CardAccentGlow({ corner = "top-right", size = "lg" }: Props) {
	const isLarge = size === "lg"

	return (
		<div
			aria-hidden
			className={`pointer-events-none absolute rounded-full ${positionClass[size][corner]} ${
				isLarge
					? "card-accent-glow h-[26rem] w-[26rem] opacity-70 blur-3xl dark:opacity-45"
					: "card-accent-glow-sm h-52 w-52 opacity-55 blur-2xl dark:opacity-38"
			}`}
		/>
	)
}
