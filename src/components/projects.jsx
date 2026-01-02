import { useState } from "react";

const projectData = [
  {
    title: "TapTrack – Web & Mobile RFID Attendance and Violation Monitoring System",
    description:
      "TapTrack is a web and mobile system using RFID/NFC to track student attendance and violations. It includes a web portal for managing records, events, and violations, and a mobile app for students, parents, employees, and security staff. The system was tested in a real school environment, proving its effectiveness.",
    techStack: ["Laravel", "PostgreSQL", "Tailwind CSS", "React Native", "JavaScript", "Expo"],
    github: "https://github.com/yourusername/taptrack",
    appLink: "#",
  },
  {
    title: "GymBro – Gym Management System",
    description:
      "GymBro is a web-based gym management system designed to manage memberships, track attendance, and organize schedules. The system helps employees and admins monitor members and streamline gym operations efficiently.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/gymbro",
    appLink: "#",
  },
  {
    title: "ADNU Helper – Service Hiring Web Application",
    description:
      "ADNU Helper is a web application that allows users to hire services for daily tasks such as grocery shopping, buying lunch, or cleaning rooms and homes. The platform streamlines task requests, making it easy and convenient to connect users with helpers.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/adnu-helper",
    appLink: "#",
  },
  {
    title: "Forge – Personal Workout App",
    description:
      "Forge is a mobile application that allows users to create custom workout splits and plans. Each workout includes a set counter and a customizable rest timer to stay on track between sets, helping users maintain focus and consistency during their sessions.",
    techStack: ["React Native", "JavaScript", "Tailwind CSS", "Expo"],
    github: "https://github.com/yourusername/forge",
    appLink: "#",
  },
];

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className={`rounded-3xl p-12 shadow-xl transition ${
        darkMode ? "bg-neutral-800/80" : "bg-white"
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Projects
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {projectData.map((proj) => (
          <div
            key={proj.title}
            className={`rounded-2xl p-6 shadow transition flex flex-col h-full ${
              darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"
            }`}
          >
            <h3 className="font-semibold mb-3">{proj.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {proj.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    darkMode ? "bg-neutral-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Push button to the bottom */}
            <div className="mt-auto flex justify-end">
              <button
                onClick={() => setSelectedProject(proj)}
                className={`text-sm font-medium hover:underline ${
                  darkMode ? "text-violet-400" : "text-blue-600"
                }`}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-2xl rounded-2xl p-6 shadow-xl ${
              darkMode ? "bg-neutral-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full hover:bg-black/10 dark:hover:bg-white/10 grid place-items-center"
              >
                ✕
              </button>
            </div>

            <p className="mb-4">{selectedProject.description}</p>

            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    darkMode ? "bg-neutral-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-end">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="underline text-sm hover:text-blue-500"
                >
                  GitHub
                </a>
              )}
              {selectedProject.appLink && (
                <a
                  href={selectedProject.appLink}
                  target="_blank"
                  className="underline text-sm hover:text-blue-500"
                >
                  App Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
