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
// import Chat from "./components/chat";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-neutral-900 transition-colors duration-500">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-28">

        <section id="about">
          <AboutMe darkMode={darkMode} />
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className={`pt-20 pb-12  transition-colors
            ${darkMode ? "bg-neutral-900" : "bg-slate-50"}`}
        >
          <div className="max-w-6xl mx-auto px-4 space-y-10">

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Projects darkMode={darkMode} />
              </div>
              <TechStack darkMode={darkMode} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Certifications darkMode={darkMode} />
              <SoftSkills darkMode={darkMode} />
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <Education darkMode={darkMode} />
            </div>

          </div>
        </section>

        <SocialLinks darkMode={darkMode} />
        <Footer darkMode={darkMode} />

      </main>

      {/* <Chat darkMode={darkMode} /> */}
    </div>
  );
}
