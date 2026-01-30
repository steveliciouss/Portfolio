import { useState } from "react";
import profileImg from "/profile-img.png";
import { IoLocationOutline } from "react-icons/io5";

export default function AboutMe({ darkMode }) {
  const [openCV, setOpenCV] = useState(false);

  return (
    <section className="relative w-full pt-6">
      <div className={`relative p-8 md:p-12 rounded-3xl overflow-hidden border backdrop-blur-sm transition-colors duration-300
        ${darkMode ? "bg-neutral-900/40 border-neutral-700/50" : "bg-white/40 border-white/60"}
      `}>

        {/* Glow Effects within the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4
                 ${darkMode ? "bg-violet-500/10 text-violet-300 border border-violet-500/20" : "bg-blue-50 text-blue-700 border border-blue-100"}
              `}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${darkMode ? "bg-violet-400" : "bg-blue-400"}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${darkMode ? "bg-violet-500" : "bg-blue-500"}`}></span>
                </span>
                Available for work
              </div>

              <h1 className={`text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight mb-2
                ${darkMode ? "bg-linear-to-r from-purple-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent" : "text-neutral-900"}
              `}>
                Hi, I'm <br />
                <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                  Stevens Anthony
                </span>
              </h1>

              <p className={`text-lg md:text-xl font-light ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                Full Stack Developer
              </p>
            </div>

            <p className={`max-w-xl text-base leading-relaxed ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}>
              I am an Information Technology student passionate about creating web and mobile applications. I enjoy turning ideas
              into functional projects while improving my skills in programming, problem-solving, and teamwork. Currently, I am
              exploring modern web and mobile frameworks like React, Tailwind, and Expo, eager to gain real-world experience and
              grow as a full-stack developer.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => setOpenCV(true)}
                className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5"
              >
                View CV
              </button>

              <div className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-colors
                ${darkMode ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800" : "border-neutral-200 text-neutral-700 hover:bg-white"}
              `}>
                <IoLocationOutline size={18} />
                <span>Buhi, Camarines Sur</span>
              </div>
            </div>
          </div>

          {/* Profile Image with Ring */}
          <div className="relative shrink-0">
            <div className={`absolute inset-0 rounded-full blur-2xl opacity-50 bg-linear-to-tr from-purple-500 to-blue-500`} />
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2
               ${darkMode ? "border-white/10 bg-neutral-900/50" : "border-white/50 bg-white/50"} backdrop-blur-md`}>
              <img
                src={profileImg}
                alt="Stevens Anthony Fabriga"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* CV MODAL */}
      {openCV && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div
            className={`w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl
              ${darkMode ? "bg-neutral-900" : "bg-white"}`}
          >
            <div className={`flex justify-between items-center p-4 border-b ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}>
              <h3 className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}>Curriculum Vitae</h3>
              <button
                onClick={() => setOpenCV(false)}
                className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-white" : "hover:bg-neutral-100 text-black"}`}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 bg-neutral-100 dark:bg-neutral-950 p-2 overflow-hidden">
              <iframe
                src="[Curriculum_Vitae]-Stevens_Anthony_Fabriga.pdf"
                className="w-full h-full rounded-xl"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
