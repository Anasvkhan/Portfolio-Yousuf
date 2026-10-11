import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Achievements />
        <Experience />
        <Skills />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
