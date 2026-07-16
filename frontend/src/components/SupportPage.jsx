import { useState } from "react";

const faqs = [
  {
    question: "How do you verify the authenticity of your watches?",
    answer:
      "Every timepiece goes through a rigorous multi-point inspection by certified watch experts, checking movement, materials, serial numbers, and craftsmanship before being listed for sale.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer free, fully insured shipping worldwide on all orders. Delivery typically takes 1 to 3 working days depending on your location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return window from the date of delivery. Watches must be returned in their original condition with all packaging and documentation.",
  },
  {
    question: "Can I sell my watch through USA Luxury?",
    answer:
      "Absolutely. Visit our 'Sell your Watches' page, fill in your watch details, and our experts will review your submission and get back to you with an offer within 24-48 hours.",
  },
  {
    question: "Do your watches come with a warranty?",
    answer:
      "Yes, all watches are covered by our in-house warranty in addition to any remaining manufacturer warranty. Details vary by item and are listed on each product page.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Abhi ke liye sirf UI feedback - backend endpoint
    // baad mein connect kar sakte hain agar chahiye
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="text-4xl font-serif font-bold text-white mb-2 text-center">
          Support
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Find answers below, or reach out to our team directly.
        </p>

        {/* FAQ SECTION */}
        <h2 className="text-xl font-semibold text-white mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800/60 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left px-5 py-4 text-white font-medium"
              >
                {faq.question}
                <span className="text-orange-400 text-xl flex-shrink-0 ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT FORM SECTION */}
        <h2 className="text-xl font-semibold text-white mb-4">
          Still need help? Contact us
        </h2>

        {submitted ? (
          <div className="bg-neutral-800/60 border border-orange-400/40 rounded-lg p-6 text-center">
            <p className="text-white font-medium">
              Thanks! We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
              />
            </div>

            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}