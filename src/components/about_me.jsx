import { useState } from "react";
import profileImg from "/profile-img.png";
import { IoLocationOutline } from "react-icons/io5";

export default function AboutMe({ darkMode }) {
  const [openCV, setOpenCV] = useState(false);

  return (
    <section
      className={`
        relative w-full  -mt-24
        ${darkMode ? "bg-neutral-900" : "bg-white"}
      `}
    >

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-40 rounded-2xl">
        <div
          className={` flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-xl p-10
            ${darkMode ? "bg-neutral-800/80 border border-gray-900" : "bg-white border border-gray-100"}
          `}
        >
          {/* Profile Image */}
          <div
            className={`
              w-48 h-48 rounded-full p-1
              ${darkMode
                ? "bg-gradient-to-br from-purple-500 to-fuchsia-600"
                : "bg-gradient-to-br from-blue-500 to-blue-600"}
            `}
          >
            <div
              className={`w-full h-full rounded-full ${
                darkMode ? "bg-neutral-900" : "bg-white"
              }`}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-3xl md:text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Stevens Anthony M. Fabriga
            </h1>

            <p
              className={`mt-3 text-xl font-bold ${
                darkMode ? "text-purple-400" : "text-blue-600"
              }`}
            >
              Full Stack Developer
            </p>

            <div
              className={`mt-3 inline-flex gap-1.5 py-1 rounded-full text-sm leading-none
                ${darkMode ? "text-gray-300" : "text-gray-600" }
              `}
            >
              <IoLocationOutline/>
              <span className="leading-none">Camarines Sur, Philippines</span>
            </div>


            <p
              className={`mt-6 max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am an Information Technology student passionate about creating web
              and mobile applications. I enjoy turning ideas into functional
              projects while improving my skills in programming, problem-solving,
              and teamwork. Currently, I am exploring modern web and mobile
              frameworks like React, Tailwind, and Expo, eager to gain real-world
              experience and grow as a full-stack developer.
            </p>

            {/* CV Button */}
            <div className="mt-6">
              <button
                onClick={() => setOpenCV(true)}
                className={`px-4 py-2 rounded-full text-sm hover:scale-105 font-bold
                  ${darkMode
                    ? "bg-purple-600 text-white hover:bg-purple-700" 
                    : "bg-blue-600 text-white hover:bg-blue-700"}
                `}
              >
                Curriculum Vitae [CV]
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CV MODAL */}
      {openCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
          <div
            className={`w-[90vw] max-w-4xl h-[85vh] rounded-2xl p-4 pb-12
              ${darkMode ? "bg-neutral-900 text-white" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Curriculum Vitae</h3>
              <button onClick={() => setOpenCV(false)}>✕</button>
            </div>

            <iframe
              src="[Curriculum_Vitae]-Stevens_Anthony_Fabriga.pdf"
              className="w-full h-full rounded-xl border"
              title="CV Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
}
