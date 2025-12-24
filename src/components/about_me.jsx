import profileImg from "/profile-img.png";
import { IoLocationOutline } from "react-icons/io5";

export default function AboutMe({ darkMode }) {
  return (
    <section 
      className={`
        relative w-full overflow-hidden
        transition-colors duration-500
        -mt-24
        ${darkMode ? "bg-neutral-900" : "bg-white"}
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          absolute top-0 -left-40 w-[500px] h-[600px]
          rounded-full blur-[140px] animate-pulse
          ${darkMode
            ? "bg-purple-600 opacity-30"
            : "bg-blue-400 opacity-15"}
        `}
      />
      <div
        className={`
          absolute top-0 right-0 w-[400px] h-[600px]
          rounded-full blur-[140px] animate-pulse
          ${darkMode
            ? "bg-fuchsia-600 opacity-20"
            : "bg-sky-300 opacity-15"}
        `}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-40">

        <div
          className={`
            flex flex-col md:flex-row items-center gap-12
            rounded-3xl shadow-xl p-10
            transition-colors duration-500
            ${darkMode ? "bg-neutral-800/80" : "bg-white"}
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
            <div className={`w-full h-full rounded-full overflow-hidden ${
              darkMode ? "bg-neutral-900" : "bg-white"
            }`}>
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Stevens Anthony M. Fabriga
            </h1>

            <p className={`mt-2 text-lg font-medium ${
              darkMode ? "text-purple-400" : "text-blue-600"
            }`}>
              Full Stack Developer
            </p>

            <div className={`mt-3 flex gap-2 justify-center md:justify-start ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              <IoLocationOutline />
              <span>Camarines Sur, Philippines</span>
            </div>

            <p className={`mt-6 max-w-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              I build clean, responsive, and modern web experiences using
              React and Tailwind CSS, focusing on performance and design.
            </p>

            <button
              className={`mt-8 px-6 py-3 rounded-full font-medium
                transition-all hover:scale-105 active:scale-95
                ${darkMode
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"}
              `}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
