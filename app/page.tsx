export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
        Infiner
      </h1>
      <p className="mt-4 text-gray-400 text-lg">
        Build. Run. Deploy. With AI superpowers.
      </p>

      <div className="mt-8 flex space-x-4">
        <a
          href="/login"
          className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
        >
          Login / Sign Up
        </a>
        <a
          href="/dashboard"
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          Try Demo
        </a>
      </div>

      <footer className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Infiner • AI-Powered IDE
      </footer>
    </main>
  );
}
