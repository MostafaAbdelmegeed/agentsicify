import Image from "next/image";
import Footer from "../../components/Footer";

const services = [
  {
    title: "HR Agents",
    description:
      "Classify and shortlist candidates for your open roles.",
    img: "/services/users.svg",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "AI-powered Headhunting",
    description: "Attract top talent with intelligent search.",
    img: "/services/magnifying-glass.svg",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Performance Monitoring",
    description:
      "Agents that monitor employee performance and provide insights.",
    img: "/services/chart-bar.svg",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Customer Support Agents",
    description: "Handle support and business inquiries around the clock.",
    img: "/services/chat-bubble-left-right.svg",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    title: "Custom MCP Infrastructure",
    description:
      "Develop tailored multi-agent collaboration platforms.",
    img: "/services/cog-6-tooth.svg",
    gradient: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    title: "Payroll Automation",
    description:
      "Automate payroll calculations and global compliance.",
    img: "/services/globe-alt.svg",
    gradient: "from-teal-500 to-green-500",
    iconBg: "bg-teal-100 dark:bg-teal-900/30",
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="code-rain">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="code-line"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              {['async process()', 'scale.business()', 'optimize.workflow()', 'automate.tasks()', 'enhance.productivity()'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <div className="geometric-shapes">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className={`shape shape-${i % 4}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI agentic solutions designed to transform your business operations and accelerate growth through intelligent automation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative feature-card hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                
                <div className="relative p-8 text-center">
                  <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={24}
                        height={24}
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-1 w-16 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-bounce-in">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Ready to transform your business with AI agents?
              </p>
              <a 
                href="/demo" 
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
