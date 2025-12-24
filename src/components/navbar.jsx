import { useEffect, useState } from "react";

const sections = ["about", "portfolio", "connect"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors shadow-sm
        ${darkMode ? "bg-neutral-900/70 border-neutral-800" : "bg-white/60 border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
          Stevens
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative transition
                ${active === id
                  ? darkMode ? "text-purple-400" : "text-blue-600"
                  : darkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-blue-600"}
              `}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {active === id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-9 rounded-full p-1 transition-all hover:scale-105
              ${darkMode
                ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 ring-2 ring-purple-500/40"
                : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 ring-2 ring-blue-400/40"}
            `}
          >
            <span
              className={`absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all
                ${darkMode
                  ? "translate-x-7 bg-neutral-900 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                  : "translate-x-0 bg-white text-blue-600 shadow-md"}
              `}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 w-8 h-5">
            <span className={`h-0.5 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"} ${open && "rotate-45 translate-y-2"}`} />
            <span className={`h-0.5 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"} ${open && "opacity-0"}`} />
            <span className={`h-0.5 rounded-full ${darkMode ? "bg-white" : "bg-gray-900"} ${open && "-rotate-45 -translate-y-2"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`${darkMode ? "bg-neutral-900/90" : "bg-white/90"} md:hidden px-6 pb-6 space-y-4`}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium
                ${active === id
                  ? darkMode ? "text-purple-400" : "text-blue-600"
                  : darkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-blue-600"}
              `}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
