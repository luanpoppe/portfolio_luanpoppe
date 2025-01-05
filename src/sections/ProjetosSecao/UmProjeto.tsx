import { corPadraoTextos } from "../../utils/colors"
import { ImagemProjeto } from "./ImagemProjeto"
import { TagsHabilidades } from "./TagsHabilidades"
import { RedirecionamentoProjeto } from "./RedirecionamentoProjeto"

type Props = PropActiveLanguage & {
	projeto: any
	index: number
	updateObject: (paramIndex: any) => void
}

const cardStyle: React.CSSProperties = {
	border: `2px solid rgba(255,255,255,0.2)`,
	borderRadius: "6px"
}

export function UmProjeto({
	index = 0,
	projeto,
	activeLanguage,
	updateObject
}: Props) {
	return (
		<>
			<div
				key={projeto.nome}
				style={cardStyle}
				className="d-flex justify-content-between flex-column gap-2 text-center p-3 col-12 col-lg-5"
			>
				<div className="d-flex flex-column gap-2">
					<TituloProjeto projeto={projeto} />

					<ImagemProjeto projeto={projeto} />

					<TagsHabilidades projeto={projeto} />

					<p className="paragrafo-descricao">
						{projeto.descricao.split(" ").slice(0, 15).join(" ")}
						{"..."}
					</p>
				</div>

				<div>
					<RedirecionamentoProjeto
						activeLanguage={activeLanguage}
						index={index}
						projeto={projeto}
						updateObject={updateObject}
					/>
				</div>
			</div>
		</>
	)
}

function TituloProjeto({ projeto }: { projeto: any }) {
	return (
		<h2 className="mb-3">
			<a href={projeto.link} target="_blank" rel="noreferrer">
				{projeto.nome}
			</a>
		</h2>
	)
}
