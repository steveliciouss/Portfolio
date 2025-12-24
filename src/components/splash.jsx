export default function Splash() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-white dark:bg-neutral-900
                 transition-colors duration-500"
    >
      <div className="flex flex-col items-center gap-6 text-center">

        {/* Logo / Initial */}
        <div className="w-20 h-20 rounded-full
                        bg-gradient-to-br from-purple-500 to-indigo-600
                        flex items-center justify-center
                        text-white text-2xl font-bold
                        shadow-lg animate-pulse">
          SA
        </div>

        {/* Welcome Text */}
        <h1 className="text-2xl font-semibold tracking-wide">
          Welcome to my portfolio
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Frontend Developer · Creative Builder
        </p>

        {/* Subtle loading indicator */}
        <div className="flex gap-2 mt-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
}
