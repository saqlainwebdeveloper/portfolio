import About from "@/components/About";
import { DotBackgroundDemo } from "@/components/Background";
import {ContactSection} from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {Hero} from "@/components/Hero";
import { Portfolios } from "@/components/Portfolios";
import {Services} from "@/components/Services";

export default function Home() {
  return (
    <>
<DotBackgroundDemo>

          <Hero />
          <About />
          <Services />
          <Portfolios />
          <ContactSection />
          <Footer />


</DotBackgroundDemo>
    </>
  );
}
