import { PropsWithChildren } from "react"

export function MainContainer({ children }: PropsWithChildren) {
	return <main className="px-7 py-4 flex-column w-100 max-vw-100">{children}</main>
}
