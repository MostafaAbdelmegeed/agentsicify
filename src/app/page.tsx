import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 gap-8">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">Agentsicify</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          AI agentic solutions that help modern businesses automate workflows and unlock growth.
        </p>
        <Link
          href="/demo"
          className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Book a Demo
        </Link>
      </main>
      <section className="grid gap-8 py-16 px-6 max-w-5xl mx-auto md:grid-cols-3 text-center">
        <div>
          <h3 className="mb-2 text-xl font-medium">⚙️ Automation</h3>
          <p className="text-gray-600 dark:text-gray-400">Streamline repetitive tasks with custom AI agents.</p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-medium">📊 Insights</h3>
          <p className="text-gray-600 dark:text-gray-400">Analyze data in real time to drive better decisions.</p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-medium">🚀 Growth</h3>
          <p className="text-gray-600 dark:text-gray-400">Scale your business with intelligent automations.</p>
        </div>
      </section>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Agentsicify
      </footer>
    </div>
  );
}
