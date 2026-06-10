"use client"

import type { ComponentProps } from "react"
import { getPoppeTechWhatsappUrl } from "@/utils/tech/constants"
import { useAppContext } from "@/utils/useContext"

type Props = Omit<ComponentProps<"a">, "href"> & {
	children: React.ReactNode
}

export function TechWhatsAppButton({ children, className, ...props }: Props) {
	const { activeLanguage } = useAppContext()

	return (
		<a
			href={getPoppeTechWhatsappUrl(activeLanguage)}
			target="_blank"
			rel="noreferrer"
			className={className}
			{...props}
		>
			{children}
		</a>
	)
}
