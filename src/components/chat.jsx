export default function Chat({ darkMode }) {
  return (
    <button
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        text-xl cursor-pointer
        shadow-xl transition-all duration-300
        hover:scale-110 active:scale-95

        ${darkMode
          ? "bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
          : "bg-gradient-to-br from-blue-600 to-sky-500 shadow-[0_0_25px_rgba(59,130,246,0.5)]"}
      `}
    >
      💬
    </button>
  );
}
