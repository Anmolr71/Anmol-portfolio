import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-content px-6 sm:px-10 lg:px-0">
      <div className="lg:flex">
        <Sidebar />
        <div className="lg:ml-[min(38vw,420px)] lg:pl-16 lg:pr-16 xl:pr-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
        </div>
      </div>
    </main>
  );
}
