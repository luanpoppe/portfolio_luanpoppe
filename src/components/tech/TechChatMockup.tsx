"use client"

import { Bot, CalendarCheck, Clock, Users } from "lucide-react"
import { getTextLang } from "@/utils/textos/funcs"
import { poppeTechHeroTexts } from "@/utils/textos/poppeTech"
import { useAppContext } from "@/utils/useContext"

const FLOAT_BADGES = [
	{ key: "floatBadge1" as const, icon: CalendarCheck, className: "-left-6 top-[3.75rem]", delay: "0s" },
	{ key: "floatBadge2" as const, icon: Clock, className: "-right-6 top-32", delay: "0.6s" },
	{ key: "floatBadge3" as const, icon: Users, className: "-right-2 -bottom-3", delay: "1.2s" }
]

export function TechChatMockup() {
	const { activeLanguage } = useAppContext()

	return (
		<div className="relative">
			<div className="relative mx-auto w-full max-w-md">
				<div
					data-reveal
					className="relative rounded-[2rem] border border-border bg-card p-5 pop-shadow"
				>
					<div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
						<div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
							<Bot className="h-5 w-5" aria-hidden />
						</div>
						<div className="flex-1">
							<p className="text-base font-semibold">
								{getTextLang(poppeTechHeroTexts.chatTitle, activeLanguage)}
							</p>
							<p className="flex items-center gap-1.5 text-xs text-muted-foreground">
								<span className="h-1.5 w-1.5 rounded-full bg-green-500" />
								{getTextLang(poppeTechHeroTexts.chatStatus, activeLanguage)}
							</p>
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex justify-start">
							<div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2 text-base text-foreground">
								{getTextLang(poppeTechHeroTexts.chatUser1, activeLanguage)}
							</div>
						</div>
						<div className="flex justify-end">
							<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/10 px-3.5 py-2 text-base text-foreground">
								{getTextLang(poppeTechHeroTexts.chatBot1, activeLanguage)}
								<div className="mt-2 flex flex-wrap gap-1.5">
									{(
										["consulta", "retorno", "avaliacao"] as const
									).map((key) => (
										<span
											key={key}
											className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs text-primary"
										>
											{getTextLang(
												poppeTechHeroTexts.chatOptions[key],
												activeLanguage
											)}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="flex justify-start">
							<div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2 text-base text-foreground">
								{getTextLang(poppeTechHeroTexts.chatUser2, activeLanguage)}
							</div>
						</div>
						<div className="flex justify-end">
							<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/10 px-3.5 py-2 text-base text-foreground">
								{getTextLang(poppeTechHeroTexts.chatBot2, activeLanguage)}
							</div>
						</div>
					</div>
				</div>

				{FLOAT_BADGES.map(({ key, icon: Icon, className, delay }) => (
					<div
						key={key}
						style={{ animationDelay: delay }}
						className={`animate-float-soft absolute z-10 hidden will-change-transform items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur pop-shadow sm:inline-flex ${className}`}
					>
						<Icon className="h-4 w-4 text-primary" aria-hidden />
						<span>{getTextLang(poppeTechHeroTexts[key], activeLanguage)}</span>
					</div>
				))}
			</div>
		</div>
	)
}
