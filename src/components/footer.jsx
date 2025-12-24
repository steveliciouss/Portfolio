export default function Footer({ darkMode }) {
  return (
    <footer className={`py-10 text-center text-sm ${darkMode ? "bg-neutral-900 text-gray-400" : "bg-white text-gray-500"}`}>
      © {new Date().getFullYear()} Stevens Antho Fabriga. All rights reserved.
    </footer>
  );
}
