"use client"

import { AppContext } from "@/AppContext"

export function Providers({ children }: { children: React.ReactNode }) {
	return <AppContext>{children}</AppContext>
}
