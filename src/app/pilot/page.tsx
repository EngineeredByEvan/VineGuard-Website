"use client";
export default function Pilot() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-900">VineGuard Pilot Program</h1>
      <p className="text-lg mb-4">Get hands-on with VineGuard before full rollout—risk-free.</p>
      <ul className="list-disc pl-6 text-lg mb-8">
        <li><b>Pilot Bundle:</b> 3 full-featured nodes, gateway, setup, and 6 months of cloud analytics/support.</li>
        <li><b>What’s Included:</b> Installation, onboarding, training, and ongoing tech support.</li>
        <li><b>Data Collection:</b> We’ll help you document water savings, disease prevention, and yield/quality impact.</li>
        <li><b>Funding Help:</b> We assist with BC/ON grant paperwork—most pilots pay half price or less out of pocket!</li>
        <li><b>No Commitment:</b> Return at the end of the pilot if you’re not blown away. You own all pilot data/results.</li>
      </ul>
      <p className="mb-8 text-gray-700"><b>Ready to join?</b> Apply below or contact us for details.</p>
      <a
        href="/contact"
        className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition"
      >
        Apply for Pilot
      </a>
    </main>
  );
}
