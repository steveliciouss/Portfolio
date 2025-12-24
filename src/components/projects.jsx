export default function Projects({ darkMode }) {
  return (
    <div className={`rounded-3xl p-12 shadow-xl transition
      ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}>
      
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Projects
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className={`rounded-2xl p-6 shadow transition
            ${darkMode ? "bg-neutral-900 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
            <h3 className="font-semibold mb-2">Project {i}</h3>
            <p className="text-sm">Your project description here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
