export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md border-b
        transition-colors duration-500
        shadow-sm

        ${darkMode
          ? "bg-neutral-900/70 border-neutral-800"
          : "bg-white/60 border-gray-200"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className={`font-semibold text-lg ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Stevens
        </span>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["About", "Portfolio", "Connect"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-purple-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            relative w-16 h-9 rounded-full p-1
            transition-all duration-500 ease-in-out
            hover:scale-105 active:scale-95

            ${darkMode
              ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 ring-2 ring-purple-500/40"
              : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 ring-2 ring-blue-400/40"}
          `}
        >
          <span
            className={`
              absolute top-1 left-1
              w-7 h-7 rounded-full
              flex items-center justify-center text-xs
              transition-all duration-500 ease-in-out transform

              ${darkMode
                ? "translate-x-7 bg-neutral-900 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                : "translate-x-0 bg-white text-blue-600 shadow-md"}
            `}
          >
            {darkMode ? "🌙" : "☀️"}
          </span>
        </button>
      </div>
    </nav>
  );
}
