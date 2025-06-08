import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentsicify - AI Agentic Solutions",
  description: "Premium AI agentic solutions tailored for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
