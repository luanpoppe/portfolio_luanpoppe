import { corTags, corTagsTexto } from "../../utils/colors"

export function TagsHabilidades({
	projeto,
	isInModal
}: {
	projeto: Projeto
	isInModal?: boolean
}) {
	const styles: React.CSSProperties = {
		borderRadius: "12px",
		fontWeight: "bold",
		backgroundColor: corTags,
		color: corTagsTexto,
		fontSize: "0.75rem",
		paddingTop: "0.1rem",
		paddingBottom: "0.1rem"
	}

	return (
		<div
			className={`d-flex flex-wrap gap-2 row-gap-3 w-100 justify-content-center mb-2 mt-3 ${
				isInModal ? "fade-in" : ""
			}`}
		>
			{projeto?.habilidades.map((tag) => (
				<p key={tag} style={styles} className="px-3 m-0">
					{tag}
				</p>
			))}
		</div>
	)
}
