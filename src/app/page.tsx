"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Parallax effect
      document.documentElement.style.setProperty(
        "--parallax-hero",
        `${scrollY * 0.25}px`
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative w-full py-28 px-4 bg-gradient-to-br from-green-50 to-white text-center overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: "url('/vineguard-bg.jpg') bottom center / cover no-repeat",
            willChange: "transform",
            transform: "translateY(var(--parallax-hero, 0px))",
            transition: "transform 0.2s",
          }}
          aria-hidden="true"
        />
        {/* Content on top */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Precision. Protection. Profit.</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6">VineGuard™ for Vineyards</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">Unlock actionable vineyard insights. Prevent crop loss. Grow better grapes.</p>
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            <a href="#pilot" className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition">Book a Pilot Call</a>
            <a href="#contact" className="bg-white border border-green-700 text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition">Join the Waitlist</a>
          </div>
        </div>
      </section>

      {/* WHAT IS VINEGUARD */}
      <section className="w-full max-w-3xl py-16 px-4" id="product">
        <h3 className="text-3xl font-bold mb-4 text-green-900">What is VineGuard?</h3>
        <p className="mb-3">
          <b>The Next-Gen Smart Vineyard Platform</b>
        </p>
        <ul className="list-disc pl-8 text-lg mb-6">
          <li>Wireless sensor nodes measure what matters: soil moisture, microclimate, mildew/frost risk—real time.</li>
          <li>AI-powered alerts tell you <b>exactly</b> when to irrigate, spray, or protect against frost.</li>
          <li>Designed for estate and commercial vineyards in Canada and beyond.</li>
        </ul>
      </section>

      {/* HOW IT WORKS - SYSTEM DIAGRAM */}
      <section className="w-full max-w-4xl py-12 px-4 flex flex-col items-center" id="diagram">
        <h3 className="text-2xl font-bold mb-6 text-green-900">How It Works</h3>
        <div className="relative w-full max-w-2xl h-56 mb-4">
          <Image
            src="/vineguard-system-diagram.png"
            alt="System Diagram"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-gray-600 text-center">
          VineGuard Node &rarr; LoRaWAN Transmission &rarr; Gateway &rarr; AWS Cloud + AI &rarr; Your Dashboard/App
        </p>
      </section>

      {/* KEY FEATURES TABLE */}
      <section className="w-full max-w-3xl py-12 px-4" id="features">
        <h3 className="text-2xl font-bold mb-6 text-green-900">Key Features</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl">
            <thead>
              <tr className="bg-green-100 text-green-900">
                <th className="px-4 py-2 text-left font-semibold">Feature</th>
                <th className="px-4 py-2 text-left font-semibold">What It Does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-medium">Soil Moisture</td>
                <td className="px-4 py-2">Prevents over/underwatering, guides irrigation</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Climate Monitoring</td>
                <td className="px-4 py-2">GDD, frost/dewpoint, spray window alerts</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Leaf Wetness (Pro)</td>
                <td className="px-4 py-2">Real-time mildew pressure alerts</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">AI “Next Action”</td>
                <td className="px-4 py-2">No raw data—just clear, actionable steps</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Pilot-Ready</td>
                <td className="px-4 py-2">We work directly with growers—get involved!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PILOT PROGRAM */}
      <section className="w-full max-w-3xl py-16 px-4 bg-green-50 rounded-2xl" id="pilot">
        <h3 className="text-2xl font-bold mb-4 text-green-900">Be a VineGuard Early Adopter</h3>
        <ul className="list-disc pl-8 mb-4">
          <li>Run a risk-free pilot at your vineyard this season.</li>
          <li>Get grant/funding help (BC/ON eligible).</li>
          <li>Hands-on support from our founder.</li>
          <li><b>Sign up for the next available pilot slot!</b></li>
        </ul>
        <a href="#contact" className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition">Apply for Pilot</a>
      </section>

      {/* PROGRESS & UPDATES */}
      <section className="w-full max-w-3xl py-12 px-4" id="progress">
        <h3 className="text-2xl font-bold mb-4 text-green-900">Building in the Open</h3>
        <ul className="list-disc pl-8">
          <li>Jan 2025: VineGuard R&D</li>
          <li>Jan 2025: System architecture finalized</li>
          <li>Feb 2025: Sourcing and Assembly finalized</li>
          <li>Mar 2025: Business Plan and market research completed</li>
          <li>Apr 2025: Software & AI development begins</li>
          <li>May 2025: Pilot Project begins!</li>
        </ul>
      </section>

      {/* ABOUT / CONTACT */}
      <section className="w-full max-w-3xl py-12 px-4" id="contact">
        <h3 className="text-2xl font-bold mb-4 text-green-900">About / Contact</h3>
        <p className="mb-2"><b>Built by vineyard technologists, for vineyard owners.</b></p>
        <p className="mb-2">Evan White, Founder</p>
        <p className="mb-2">Email: <a className="text-green-700 underline" href="mailto:vineguardinc@gmail.com">vineguardinc@gmail.com</a></p>
        <p className="mb-2">LinkedIn: <a className="text-green-700 underline" href="https://www.linkedin.com/in/evanwhiteai/">LinkedIn</a></p>
      </section>
      <section id="contact" className="w-full max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-green-900">Contact Us</h2>
        <form
          action="https://formspree.io/f/xqaqjvka"
          method="POST"
          className="w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            required
            placeholder="How can we help?"
            className="border border-gray-300 rounded-lg px-4 py-2 min-h-[100px]"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
        <p className="text-gray-500 mt-4">Or email us at <a href="mailto:vineguardinc@gmail.com" className="text-green-700 underline">vineguardinc@gmail.com</a></p>
      </section>


      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-gray-500 border-t mt-8">
        VineGuard™ Precision Systems &copy; {new Date().getFullYear()} | All rights reserved
      </footer>
    </main>
  );
}