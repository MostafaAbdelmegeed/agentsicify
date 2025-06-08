import Image from "next/image";

const services = [
  {
    title: "HR Agents",
    description:
      "Classify and shortlist candidates for your open roles.",
    img: "/services/users.svg",
  },
  {
    title: "AI-powered Headhunting",
    description: "Attract top talent with intelligent search.",
    img: "/services/magnifying-glass.svg",
  },
  {
    title: "Performance Monitoring",
    description:
      "Agents that monitor employee performance and provide insights.",
    img: "/services/chart-bar.svg",
  },
  {
    title: "Customer Support Agents",
    description: "Handle support and business inquiries around the clock.",
    img: "/services/chat-bubble-left-right.svg",
  },
  {
    title: "Custom MCP Infrastructure",
    description:
      "Develop tailored multi-agent collaboration platforms.",
    img: "/services/cog-6-tooth.svg",
  },
  {
    title: "Payroll Automation",
    description:
      "Automate payroll calculations and global compliance.",
    img: "/services/globe-alt.svg",
  },
];

export default function Services() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Our Services</h1>
      <div className="grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-foreground text-background rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
