import { useState } from "react";

export default function Certifications({ darkMode }) {
  const [open, setOpen] = useState(null);

  const certs = [
    { name: "Smartbooks And Power BI", file: "/certificates/FIT-SM202402192579.pdf" },
  ];

  return (
    <>
      <div className={`rounded-3xl p-12 shadow-xl transition
        ${darkMode ? "bg-neutral-800/80" : "bg-white"}`}>

        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Certifications
        </h2>

        <div className="flex flex-wrap gap-3">
          {certs.map((c) => (
            <button
              key={c.name}
              onClick={() => setOpen(c)}
              className={`px-4 py-2 rounded-full text-sm transition hover:scale-105
                ${darkMode
                  ? "bg-neutral-900 text-gray-300 hover:bg-neutral-700"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-200"}`}
            >
              📄 {c.name}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
          <div className={`w-[90vw] max-w-4xl h-[85vh] rounded-2xl p-4 pb-12
            ${darkMode ? "bg-neutral-900 text-white" : "bg-white"}`}>

            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{open.name}</h3>
              <button onClick={() => setOpen(null)}>✕</button>
            </div>

            <iframe
              src={open.file}
              className="w-full h-full rounded-xl border"
              title="PDF Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}
