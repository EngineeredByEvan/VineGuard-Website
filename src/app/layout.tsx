import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "VineGuard™ | Precision Vineyard Systems",
  description: "Smart sensors, AI alerts, and vineyard ROI—all in one.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        {/* NAVIGATION BAR */}
        <header className="sticky top-0 z-50 w-full bg-white/90 border-b border-gray-200 shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/vineguard-logo.png"
                alt="VineGuard Logo"
                width={38}
                height={38}
                className="rounded-lg"
                priority
              />
              <span className="text-xl font-extrabold text-green-900 tracking-tight">
                VineGuard™
              </span>
            </Link>
            <ul className="flex gap-8 font-semibold text-green-900 text-md">
              <li><a href="/how-it-works" className="hover:text-green-700">How It Works</a></li>
              <li><a href="/features" className="hover:text-green-700">Features</a></li>
              <li><a href="/pilot" className="hover:text-green-700">Pilot</a></li>
              <li><a href="/contact" className="hover:text-green-700">Contact</a></li>
              <li><a href="/privacy" className="hover:text-green-700">Privacy</a></li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}