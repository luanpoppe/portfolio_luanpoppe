import { PropsWithChildren } from "react"

export function MainContainer({ children }: PropsWithChildren) {
	return <main className="px-8 py-4 d-flex flex-column w-100 max-vw-100">{children}</main>
}
