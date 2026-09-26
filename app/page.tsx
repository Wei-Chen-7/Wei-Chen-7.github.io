import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Strengths from "@/components/Strengths";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Strengths />
        <Projects />
        <Experience />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
