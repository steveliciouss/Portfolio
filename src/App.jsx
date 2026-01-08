import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import AboutMe from "./components/about_me";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";
import Certifications from "./components/certificates";
import SoftSkills from "./components/soft_skills";
import Education from "./components/education";
import SocialLinks from "./components/social_links";
import Footer from "./components/footer";
// import CursorTrail from "./components/cursortrail";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-neutral-900">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-28">

        <section id="about">
          <AboutMe darkMode={darkMode} />
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className={`pt-10 pb-10
            ${darkMode ? "bg-neutral-900" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-4 space-y-10">

            <Projects darkMode={darkMode} />

            <div className="grid md:grid-cols-2 gap-6">
              <TechStack darkMode={darkMode} />
              <SoftSkills darkMode={darkMode} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Education darkMode={darkMode} />
              <Certifications darkMode={darkMode} />
            </div>

          </div>
        </section>

        <SocialLinks darkMode={darkMode} />
        <Footer darkMode={darkMode} />

        {/* <CursorTrail darkMode={darkMode} /> */}
      </main>
    </div>
  );
}
