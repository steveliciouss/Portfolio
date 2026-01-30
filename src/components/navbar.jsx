import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Connect", href: "#connect" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
          ${scrolled ? "w-[90%] md:w-[70%] lg:w-[50%]" : "w-[95%] md:w-[80%]"}
        `}
      >
        <div
          className={`px-6 py-3 rounded-full flex justify-between items-center shadow-lg backdrop-blur-md border 
            ${darkMode
              ? "bg-neutral-900/60 border-neutral-700/50 text-white"
              : "bg-white/70 border-white/50 text-neutral-800"
            }
          `}
        >
          <h1 className="text-xl font-bold font-display tracking-tight bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            SA.FABRIGA
          </h1>

          <ul className="hidden md:flex gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors ${darkMode ? "hover:text-violet-400" : "hover:text-blue-600"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all hover:scale-110
                ${darkMode ? "bg-neutral-800 text-yellow-400" : "bg-neutral-100 text-neutral-800"}`}
            >
              {darkMode ? <BsFillSunFill size={18} /> : <BsFillMoonStarsFill size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all hover:scale-110
                ${darkMode ? "bg-neutral-800 text-white" : "bg-neutral-100 text-neutral-800"}`}
            >
              {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 md:hidden rounded-2xl shadow-xl backdrop-blur-md border overflow-hidden
            ${darkMode
              ? "bg-neutral-900/95 border-neutral-700/50"
              : "bg-white/95 border-white/50"
            }
          `}
        >
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block px-6 py-3 font-medium transition-colors
                    ${darkMode
                      ? "text-white hover:bg-neutral-800 hover:text-violet-400"
                      : "text-neutral-800 hover:bg-neutral-50 hover:text-blue-600"
                    }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
