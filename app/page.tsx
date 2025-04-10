import HeroSection from "@/components/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import FeaturesSection from "@/components/features-section"
import SocialProofSection from "@/components/social-proof-section"
import HowItWorksSection from "@/components/how-it-works-section"
import MobileVersionSection from "@/components/mobile-version-section"
import FinalCTASection from "@/components/final-cta-section"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <MobileVersionSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
