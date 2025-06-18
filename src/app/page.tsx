'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="animated-bg">
          <div className="code-rain">
            {mounted && Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="code-line"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              >
                {['const ai = new Agent()', 'function automate()', 'if (workflow.ready)', 'async process()', 'return insights', 'scale.business()', 'optimize.performance()', 'deploy.solution()'][Math.floor(Math.random() * 8)]}
              </div>
            ))}
          </div>
          <div className="geometric-shapes">
            {mounted && Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className={`shape shape-${i % 4}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 gap-8 relative z-10">
        <div className="hero-content">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Agentsicify
          </h1>
          <div className="tagline-container">
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed animate-slide-up">
              AI agentic solutions that help modern businesses 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> automate workflows</span> and 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> unlock growth</span>.
            </p>
          </div>
          <div className="cta-container mt-8">
            <Link
              href="/demo"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/25 animate-bounce-in"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Book a Demo
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </Link>
          </div>
        </div>
      </main>

      <section className="relative z-10 grid gap-8 py-20 px-6 max-w-6xl mx-auto md:grid-cols-3 text-center">
        <div className="feature-card group">
          <div className="feature-icon">
            <div className="icon-bg bg-gradient-to-br from-blue-500 to-cyan-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Automation</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Streamline repetitive tasks with custom AI agents that work 24/7 to boost your productivity.</p>
        </div>
        
        <div className="feature-card group">
          <div className="feature-icon">
            <div className="icon-bg bg-gradient-to-br from-purple-500 to-pink-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Insights</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Analyze data in real time to drive better decisions with AI-powered analytics and reporting.</p>
        </div>
        
        <div className="feature-card group">
          <div className="feature-icon">
            <div className="icon-bg bg-gradient-to-br from-green-500 to-teal-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Growth</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Scale your business with intelligent automations that adapt and evolve with your needs.</p>
        </div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Agentsicify. Empowering businesses with AI automation.</p>
        </div>
      </footer>
    </div>
  );
}
