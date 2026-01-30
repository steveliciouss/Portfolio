import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/about_me";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";
import Certifications from "./components/certificates";
import SoftSkills from "./components/soft_skills";
import Education from "./components/education_experience";
import SocialLinks from "./components/social_links";
import BeyondCoding from "./components/beyond_coding";
import Footer from "./components/footer";
import CursorTrail from "./components/cursortrail";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? "dark bg-neutral-950" : "bg-neutral-50"}`}>

      {/* BACKGROUND MESH */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-40 mix-blend-multiply filter animate-blob 
            ${darkMode ? "bg-purple-900" : "bg-purple-200"}`}></div>
        <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-40 mix-blend-multiply filter animate-blob animation-delay-2000
            ${darkMode ? "bg-indigo-900" : "bg-blue-200"}`}></div>
        <div className={`absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-40 mix-blend-multiply filter animate-blob animation-delay-4000
             ${darkMode ? "bg-fuchsia-900" : "bg-pink-200"}`}></div>
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="container mx-auto px-4 pb-10 space-y-16 md:space-y-20">

          <section id="about" className="pt-14 md:pt-20">
            <AboutMe darkMode={darkMode} />
          </section>

          <section id="projects" className="scroll-mt-19">
            <Projects darkMode={darkMode} />
          </section>

          <section id="experience" className="scroll-mt-19 grid lg:grid-cols-3 gap-6">
            {/* Column 1 - Education & Experience */}
            <div className="space-y-6">
              <Education darkMode={darkMode} />
            </div>

            {/* Column 2 - Tech Stack & Soft Skills */}
            <div className="space-y-3">
              <TechStack darkMode={darkMode} />
              <SoftSkills darkMode={darkMode} />
            </div>

            {/* Column 3 - Certifications & Beyond Coding */}
            <div className="space-y-3">
              <Certifications darkMode={darkMode} />
              <BeyondCoding darkMode={darkMode} />
            </div>
          </section>

          <div className="-mt-8 md:-mt-10">
            <SocialLinks darkMode={darkMode} />
          </div>
        </main>

        <Footer darkMode={darkMode} />
        <CursorTrail darkMode={darkMode} />
      </div>
    </div>
  );
}
