import { PropsWithChildren } from "react"

type Props = PropsWithChildren & PropClass & { id: string }

export function TituloSecao({ id, children, className }: Props) {
	return (
		<h2 id={id} className={`text-center fs-1 ${className}`}>
			{children}
		</h2>
	)
}

export default TituloSecao
