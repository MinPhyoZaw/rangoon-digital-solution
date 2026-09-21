import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { ProblemBanner } from "@/components/sections/problem-banner";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <ProblemBanner />
        </ScrollReveal>
        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>
        <ScrollReveal>
          <Process />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
