import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { getTextLang } from "@/utils/textos/funcs"
import { projectsCardMeta, projectsTexts } from "@/utils/textos/projects"
import { ProjectCardPreview } from "./ProjectCardPreview"

type ProjectCardProps = {
	projeto: Projeto
	index: number
	activeLanguage: ActiveLanguage
}

export function ProjectCard({
	projeto,
	index,
	activeLanguage
}: ProjectCardProps) {
	const meta = projectsCardMeta[projeto.github as keyof typeof projectsCardMeta]
	const isFeatured = meta?.featured ?? false
	const colSpan = meta?.colSpan ?? "md:col-span-6"
	const showPreview = meta?.showPreview ?? true
	const description = meta
		? getTextLang(meta.shortDescription, activeLanguage)
		: projeto.descricao

	const typeLabel = isFeatured
		? getTextLang(projectsTexts.typeFeatured, activeLanguage)
		: getTextLang(projectsTexts.typeProject, activeLanguage)

	const indexLabel = String(index).padStart(2, "0")

	if (isFeatured) {
		return (
			<article
				className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-accent text-accent-foreground transition-all duration-500 hover:-translate-y-1 ${colSpan}`}
				data-reveal
			>
				<div className="flex h-full flex-col p-7">
					<div>
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
							{indexLabel} · {typeLabel}
						</p>
						<h3 className="mt-4 text-2xl font-bold leading-tight">
							{projeto.nome}
						</h3>
						<p className="mt-3 text-sm leading-relaxed opacity-80">
							{description}
						</p>
					</div>

					<div className="mt-6 flex items-center justify-between gap-4">
						<div className="flex flex-wrap gap-1.5">
							{projeto.habilidades.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium"
								>
									{tag}
								</span>
							))}
						</div>
						<a
							href={projeto.link}
							target="_blank"
							rel="noreferrer"
							className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 transition-all group-hover:rotate-45 group-hover:bg-white group-hover:text-accent"
							aria-label={`${getTextLang(projectsTexts.access, activeLanguage)} ${projeto.nome}`}
						>
							<ArrowUpRight className="h-5 w-5" />
						</a>
					</div>
				</div>
			</article>
		)
	}

	return (
		<article
			className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(124,58,237,0.35)] ${colSpan}`}
			data-reveal
		>
			{showPreview && (
				<ProjectCardPreview projeto={projeto} />
			)}

			<div className="relative z-10 -mt-2 flex flex-1 flex-col justify-between border-t border-border/50 bg-card p-7">
				<div>
					<div className="flex items-start justify-between gap-3">
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
							{indexLabel} · {typeLabel}
						</p>
						{projeto.github && (
							<a
								href={projeto.github}
								target="_blank"
								rel="noreferrer"
								aria-label={`GitHub de ${projeto.nome}`}
								className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/30 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent dark:border-foreground/35"
							>
								<FaGithub className="h-4 w-4" />
							</a>
						)}
					</div>
					<h3 className="mt-4 text-2xl font-bold leading-tight text-foreground">
						{projeto.nome}
					</h3>
					<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
						{description}
					</p>
				</div>

				<div className="mt-6 flex items-end justify-between gap-4">
					<div className="flex flex-wrap gap-1.5">
						{projeto.habilidades.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-accent/8 px-2.5 py-1 text-[10px] font-medium text-accent"
							>
								{tag}
							</span>
						))}
					</div>
					<a
						href={projeto.link}
						target="_blank"
						rel="noreferrer"
						className="inline-flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
					>
						{getTextLang(projectsTexts.access, activeLanguage)}
						<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</div>
			</div>
		</article>
	)
}
