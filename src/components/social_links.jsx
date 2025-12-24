import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks({ darkMode }) {
  const socials = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/steve-0s" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://ph.linkedin.com/in/stevens-anthony-m-fabriga-1578b32b5" },
    { name: "Email", icon: FaEnvelope, href: "stevensanthonyf@gmail.com" },
  ];

  return (
    <section id="connect" className={`py-16 flex justify-center transition-colors duration-500
    ${darkMode ? "bg-neutral-900" : "bg-slate-50"}`}>
      <div
        className={`rounded-2xl shadow-lg px-10 py-6
        transition-all duration-500
        hover:shadow-xl
        ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}
      >
        <h3
          className={`text-lg font-semibold text-center mb-4
          ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Connect with me
        </h3>

        <div className="flex items-center text-sm font-medium">
          {socials.map((s, i) => (
            <div key={s.name} className="flex items-center">
              <a
                href={s.href}
                target="_blank"
                className={`flex items-center gap-2 transition hover:scale-105 active:scale-95
                  ${darkMode
                    ? "text-purple-400 hover:text-purple-300"
                    : "text-blue-600 hover:text-blue-500"}
                `}
              >
                <s.icon className="text-base" />
                {s.name}
              </a>

              {i !== socials.length - 1 && (
                <span className={`mx-5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
