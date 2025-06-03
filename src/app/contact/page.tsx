"use client";
export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-green-900">Contact VineGuard</h1>
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
      <p className="text-gray-500 mt-4">
        Or email us at <a href="mailto:vineguardinc@gmail.com" className="text-green-700 underline">vineguardinc@gmail.com</a>
      </p>
    </main>
  );
}
