import { useState } from "react";
import { BsGithub, BsLink45Deg, BsArrowRight } from "react-icons/bs";

const projectData = [
  {
    title: "TapTrack",
    subtitle: "RFID Attendance System",
    description:
      "TapTrack is a centralized web and mobile-based monitoring system designed to automate campus entry/exit monitoring, event attendance, and student violation logging using RFID and NFC technology.",
    techStack: ["Laravel", "PostgreSQL", "React Native", "Expo"],
    github: null,
    appLink: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "GymBro",
    subtitle: "Gym Management System",
    description:
      "A web-based gym management system designed to manage memberships, track attendance, and organize schedules efficiently.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: null,
    appLink: null,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Weather App",
    subtitle: "Real-time Forecasts",
    description:
      "A lightweight weather app that provides real-time forecasts, current conditions, and essential weather details in a clean interface.",
    techStack: ["React", "Tailwind CSS", "OpenWeatherMap"],
    github: "https://github.com/steve-0s/weather",
    appLink: "https://weather-j92p.onrender.com",
    color: "from-sky-400 to-indigo-500",
  },
  {
    title: "Forge",
    subtitle: "Workout Manager",
    description:
      "Mobile application that allows users to create custom workout splits and plans with set counters and rest timers.",
    techStack: ["React Native", "Expo"],
    github: "https://github.com/steve-0s/Workout-Session-Manager-Mobile-App-",
    appLink: null,
    color: "from-emerald-400 to-green-600",
  },
];

export default function Projects({ darkMode }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className={`text-3xl md:text-5xl font-bold font-display mb-2 ${darkMode ? "text-white" : "text-neutral-900"}`}>
            Featured Projects
          </h2>
          <p className={`${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            A selection of my recent work in web and mobile development.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((proj, idx) => (
          <div
            key={idx}
            className={`group relative rounded-3xl p-8 overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              ${darkMode
                ? "bg-neutral-900/40 border-neutral-800 hover:border-violet-500/50 hover:shadow-black/50"
                : "bg-white/60 border-white/60 hover:border-blue-500/50 hover:shadow-neutral-200/50"
              } backdrop-blur-sm`}
          >
            {/* Gradient Blob Background on Hover */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-br ${proj.color}`} />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase
                   ${darkMode ? "bg-white/5 text-white/70" : "bg-black/5 text-black/70"}
                `}>
                  {proj.subtitle}
                </span>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-neutral-900"}`}>
                  {proj.title}
                </h3>
                <p className={`line-clamp-3 leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {proj.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-dashed border-neutral-500/20">
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.techStack.map(tech => (
                    <span key={tech} className={`text-xs px-2 py-1 rounded border 
                          ${darkMode
                        ? "border-neutral-700 text-neutral-400"
                        : "border-neutral-200 text-neutral-500"}
                       `}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors
                            ${darkMode ? "text-white hover:text-violet-400" : "text-neutral-900 hover:text-blue-600"}
                         `}>
                      <BsGithub /> Code
                    </a>
                  )}
                  {proj.appLink && (
                    <a href={proj.appLink} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors
                             ${darkMode ? "text-white hover:text-violet-400" : "text-neutral-900 hover:text-blue-600"}
                          `}>
                      <BsLink45Deg size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
