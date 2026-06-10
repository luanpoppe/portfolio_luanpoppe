import { RevealOnScroll } from "@/components/RevealOnScroll"
import { TechCaseStudy } from "@/components/tech/TechCaseStudy"
import { TechContact } from "@/components/tech/TechContact"
import { TechDifferentials } from "@/components/tech/TechDifferentials"
import { TechFaq } from "@/components/tech/TechFaq"
import { TechFooter } from "@/components/tech/TechFooter"
import { TechForBusinesses } from "@/components/tech/TechForBusinesses"
import { TechForClinics } from "@/components/tech/TechForClinics"
import { TechHeader } from "@/components/tech/TechHeader"
import { TechHero } from "@/components/tech/TechHero"
import { TechInvestment } from "@/components/tech/TechInvestment"
import { TechPageBackground } from "@/components/tech/TechPageBackground"
import { TechProblem } from "@/components/tech/TechProblem"
import { TechProcess } from "@/components/tech/TechProcess"
import { TechServices } from "@/components/tech/TechServices"
import { TechSolution } from "@/components/tech/TechSolution"
import { TechWhatsAppFab } from "@/components/tech/TechWhatsAppFab"

export default function TechPage() {
	return (
		<div className="min-h-screen bg-background text-foreground antialiased">
			<TechPageBackground />
			<TechHeader />
			<RevealOnScroll />

			<TechHero />
			<TechProblem />
			<TechSolution />
			<TechForClinics />
			<TechForBusinesses />
			<TechServices />
			<TechProcess />
			<TechCaseStudy />
			<TechDifferentials />
			<TechInvestment />
			<TechFaq />
			<TechContact />
			<TechFooter />
			<TechWhatsAppFab />
		</div>
	)
}
