import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-white/20 dark:border-white/10 flex items-center justify-between sticky top-0 z-50 transition-all duration-300">
      <Link href="/" className="group flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-sm">
            AI
          </div>
        </div>
        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
          Agentsicify
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link 
          href="/services" 
          className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/about" 
          className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/demo" 
          className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Demo
          </span>
        </Link>
      </nav>
    </header>
  );
}
