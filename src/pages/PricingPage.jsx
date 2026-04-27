import { redirectToCheckout } from "../utils/checkout";
import Toast from "../components/Toast";
import { useToast } from "../hooks/useToast";

const pricingData = [
  {
    id: "dj",
    name: "DJ",
    tagline: "For mixing live sets",
    price: 20,
    oneTime: 240,
    subscriptionPriceId: "price_1TQVJyBSfJ4A9uVJTrQzprla",
    oneTimePriceId: "price_1TQVJyBSfJ4A9uVJTrQzprla", // Using subscription ID for now, update when you have the one-time ID
    features: [
      "Beat-synced multicam switching",
      "1 project workspace",
      "DJ-optimized interface",
      "Export to all major formats",
      "Basic email support"
    ],
    featured: false
  },
  {
    id: "community",
    name: "Editor Community",
    tagline: "For creators & hobbyists",
    price: 30,
    oneTime: 400,
    subscriptionPriceId: "price_1TQVNtBSfJ4A9uVJmtEhAaR3",
    oneTimePriceId: "price_1TQVNtBSfJ4A9uVJhclSWGnr",
    features: [
      "Everything in DJ",
      "5 project workspaces",
      "Advanced color grading",
      "Community plugins",
      "Priority email support"
    ],
    featured: true
  },
  {
    id: "pro",
    name: "Editor Pro",
    tagline: "For studio professionals",
    price: 50,
    oneTime: 800,
    subscriptionPriceId: "price_1TQVSjBSfJ4A9uVJkyzTq6JV",
    oneTimePriceId: "price_1TQVSjBSfJ4A9uVJHMHgrTxr",
    features: [
      "Everything in Community",
      "Unlimited workspaces",
      "Team collaboration",
      "Custom export presets",
      "24/7 phone support"
    ],
    featured: false
  }
];

function PricingCard({ plan, onComingSoon }) {
  const handleSubscribe = () => {
    redirectToCheckout(plan.subscriptionPriceId);
  };

  const handleOneTime = () => {
    redirectToCheckout(plan.oneTimePriceId);
  };

  const handleLearnMore = () => {
    onComingSoon();
  };

  return (
    <div className={`card card-pricing ${plan.featured ? "featured" : ""}`}>
      <div className="mb-4">
        <h3 className="t-h3 mb-2">{plan.name}</h3>
        <p className="t-label">{plan.tagline}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">€{plan.price}</span>
          <span className="t-label">/month</span>
        </div>
      </div>

      <div className="flex-1 mb-6">
        <div className="flex flex-col gap-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <span className="feature-check">✓</span>
              <span className="t-body" style={{color: "var(--text)"}}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button 
          className="btn btn-amber w-full"
          onClick={handleSubscribe}
        >
          Subscribe €{plan.price}/month
        </button>
        {plan.id !== "dj" && (
          <button 
            className="btn btn-ghost w-full"
            onClick={handleOneTime}
          >
            One-time €{plan.oneTime}
          </button>
        )}
        <button 
          className="btn-link mx-auto mt-2"
          onClick={handleLearnMore}
        >
          Learn more →
        </button>
      </div>
    </div>
  );
}

function PricingPage() {
  const { isVisible, message, showToast, hideToast } = useToast();
  
  const handleComingSoon = () => {
    showToast("Coming soon — we're working on it! 🚧");
  };

  return (
    <main className="container">
      <section className="section">
        <div className="text-center mb-8">
          <h1 className="t-display mb-4">Simple, transparent pricing</h1>
          <p className="t-body max-w-2xl mx-auto">
            Choose the plan that fits your workflow. All plans include automatic beat detection, 
            multicam timeline, and export to all major formats. Cancel or change anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map(plan => (
            <PricingCard key={plan.id} plan={plan} onComingSoon={handleComingSoon} />
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="card max-w-3xl mx-auto text-center">
          <h2 className="t-h2 mb-4">Not sure which plan is right for you?</h2>
          <p className="t-body mb-6">
            Start with any plan and upgrade or downgrade anytime. Your projects and settings 
            transfer automatically between plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-amber"
              onClick={() => window.location.href = "/help#contact"}
            >
              Talk to us
            </button>
            <button 
              className="btn btn-ghost"
              onClick={() => window.location.href = "/help#faq"}
            >
              View FAQ
            </button>
          </div>
        </div>
      </section>
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </main>
  );
}

export default PricingPage;