import { useState } from "react";
import Toast from "../components/Toast";
import { useToast } from "../hooks/useToast";

const faqData = [
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime through the Stripe customer portal. Use the email check form above to access your account, then click 'Cancel subscription'. You'll have access until the end of your billing period."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes! You can upgrade or downgrade your plan anytime. Changes take effect immediately, and we'll prorate the difference. Your projects and settings transfer automatically."
  },
  {
    question: "What's the difference between subscription and one-time license?",
    answer: "Subscriptions include all updates and new features as they're released. One-time licenses include 12 months of updates, then you can continue using that version forever or pay for another year of updates."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes, we offer 50% off for students and educators. Contact us at education@qcut.app with proof of enrollment or employment."
  },
  {
    question: "What formats does Q·Cut support?",
    answer: "Q·Cut works with all major video formats including MP4, MOV, ProRes, DNxHD, and more. We support frame rates from 23.98 to 120fps and resolutions up to 8K."
  },
  {
    question: "Can I use Q·Cut with my DAW?",
    answer: "Absolutely! Q·Cut exports XML timelines compatible with Premiere Pro, Final Cut, DaVinci Resolve, and most major editing software. We also support direct AAF export for Pro Tools."
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`faq-chevron ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

function HelpPage() {
  const [email, setEmail] = useState("");
  const { isVisible, message, showToast, hideToast } = useToast();

  const handleComingSoon = (e) => {
    e.preventDefault();
    showToast("Coming soon — we're working on it! 🚧");
  };

  const handleCheckSubscription = (e) => {
    e.preventDefault();
    showToast("Coming soon — we're working on it! 🚧");
  };

  return (
    <main className="container">
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <h1 className="t-display mb-8">Help Center</h1>

          {/* Subscription Status Check */}
          <div className="card mb-8" id="status">
            <h2 className="t-h2 mb-4">Check your subscription status</h2>
            <p className="t-body mb-6">
              Enter your email to access the Stripe customer portal where you can view payments, 
              download invoices, update payment methods, or cancel your subscription.
            </p>
            
            <form onSubmit={handleCheckSubscription} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 bg-transparent border border-[var(--line-2)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--amber)] focus:outline-none transition"
                required
              />
              <button type="submit" className="btn btn-amber">
                Check status →
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="mb-8" id="faq">
            <h2 className="t-h2 mb-6">Frequently asked questions</h2>
            <div className="card">
              {faqData.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="card text-center" id="contact">
            <h2 className="t-h2 mb-4">Still need help?</h2>
            <p className="t-body mb-6">
              Our support team is here to help. We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@qcut.app" className="btn btn-amber">
                Email support
              </a>
              <button onClick={handleComingSoon} className="btn btn-ghost">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </section>
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </main>
  );
}

export default HelpPage;