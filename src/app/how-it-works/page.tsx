"use client";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-green-900">How VineGuard Works</h1>
      <div className="relative w-full max-w-xl h-64 mb-8">
        <Image
          src="/vineguard-system-diagram.png"
          alt="System Architecture Diagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <ol className="list-decimal pl-6 text-lg mb-6">
        <li><b>Sensor Nodes:</b> Wireless VineGuard nodes collect soil moisture, microclimate (temp/humidity), and leaf wetness data in real time.</li>
        <li><b>Wireless Transmission:</b> Data is securely transmitted via LoRaWAN to the on-site gateway.</li>
        <li><b>Cloud Integration:</b> The gateway sends data to our secure AWS IoT cloud for analytics and historical tracking.</li>
        <li><b>AI-Powered Insights:</b> Our models analyze risk factors (disease, irrigation, frost) and generate clear, actionable alerts.</li>
        <li><b>Grower Dashboard:</b> You access insights, trends, and recommendations on a web/mobile dashboard—anytime, anywhere.</li>
      </ol>
      <p className="text-gray-600">VineGuard: Real-time, field-ready vineyard intelligence—built for what matters.</p>
    </main>
  );
}
