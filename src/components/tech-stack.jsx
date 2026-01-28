import { useState } from "react";

export default function TechStack({ darkMode }) {
  const [open, setOpen] = useState(false);

  const mainStack = 
  ["React", "Tailwind", "Laravel", "JavaScript", "Vercel", "Render", "Expo", "SQLite",
    "CSS", "PHP", "C++", "Node.js", "MySQL", "MongoDB", "GitHub", "VS Code", "Figma"
  ];

  const categorizedStack = {
    Programming_Languages: ["Python", "PHP", "C++"],
    Frontend: ["HTML", "CSS", "React", "Tailwind", "React Native", "XML"],
    Backend: ["Laravel", "Node.js", "Python", "Odoo"],
    Database: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
    Tools: ["GitHub", "Bit Bucket", "VS Code", "Figma", "Lucidchart", "ClickUp", "WordPress"],
    Deployment: ["Vercel", "Render", "Expo"],
  };

  return (
    <>
      <div
        className={`rounded-3xl p-12 shadow-xl flex flex-col h-full ${
          darkMode ? "bg-neutral-800/80 border border-gray-900" : "bg-white border border-gray-100"
        }`}
      >
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {mainStack.map((s) => (
            <span
              key={s}
              className={`px-4 py-2 rounded-full text-sm shadow-sm ${
                darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Push button to the bottom */}
        <div className="mt-auto flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className={`text-sm font-medium inline-flex items-center gap-1 ${
              darkMode ? "text-violet-400 hover:text-violet-300" : "text-blue-600 hover:text-blue-500"
            }`}
          >
            View All →
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-xl rounded-2xl p-6 shadow-xl ${
              darkMode ? "bg-neutral-900 text-white" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Full Tech Stack</h3>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-black/10 dark:hover:bg-white/10 grid place-items-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5">
              {Object.entries(categorizedStack).map(([category, items]) => (
                <div key={category}>
                  <h4
                    className={`text-m font-semibold mb-2 ${
                      darkMode ? "text-purple-500" :  "text-blue-600"
                    }`}
                  >
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          darkMode ? "bg-neutral-800 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
