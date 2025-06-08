import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg">Agentsicify</Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/demo" className="rounded-full bg-foreground text-background px-4 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">Book a Demo</Link>
      </nav>
    </header>
  );
}
