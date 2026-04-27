import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useToast } from "../hooks/useToast";

function SuccessPage() {
  const [orderDetails, setOrderDetails] = useState(null);
  const { isVisible, message, showToast, hideToast } = useToast();
  
  const handleComingSoon = (e) => {
    e.preventDefault();
    showToast("Coming soon — we're working on it! 🚧");
  };

  useEffect(() => {
    // In production, this would fetch real order details from the URL params or session
    // For now, we'll use mock data
    const mockOrder = {
      orderId: `QC-${Date.now()}`,
      licenseKey: "XXXX-XXXX-XXXX-XXXX",
      plan: "Editor Community",
      type: "Subscription",
      nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      email: "user@example.com"
    };
    setOrderDetails(mockOrder);
  }, []);

  return (
    <main className="container">
      <section className="section">
        <div className="success-card">
          <div className="text-center">
            <div className="success-icon">✓</div>
            <h1 className="t-h2 mb-3">Payment successful!</h1>
            <p className="t-body mb-6">
              Welcome to Q·Cut! Your license is active and ready to use.
            </p>
          </div>

          {orderDetails && (
            <div className="mb-6">
              <div className="receipt-detail">
                <span className="receipt-label">Order ID</span>
                <span className="receipt-value">{orderDetails.orderId}</span>
              </div>
              <div className="receipt-detail">
                <span className="receipt-label">License Key</span>
                <span className="receipt-value" style={{fontFamily: "monospace"}}>
                  {orderDetails.licenseKey}
                </span>
              </div>
              <div className="receipt-detail">
                <span className="receipt-label">Plan</span>
                <span className="receipt-value">{orderDetails.plan}</span>
              </div>
              <div className="receipt-detail">
                <span className="receipt-label">Type</span>
                <span className="receipt-value">{orderDetails.type}</span>
              </div>
              {orderDetails.type === "Subscription" && (
                <div className="receipt-detail">
                  <span className="receipt-label">Next billing</span>
                  <span className="receipt-value">{orderDetails.nextBilling}</span>
                </div>
              )}
            </div>
          )}

          <div className="text-center">
            <p className="t-body mb-6">
              We've sent a confirmation email with your license key and download links 
              to <strong>{orderDetails?.email}</strong>. Please check your inbox.
            </p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleComingSoon} 
                className="btn btn-amber w-full"
              >
                Download Q·Cut
              </button>
              <Link to="/" className="btn btn-ghost w-full">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </main>
  );
}

export default SuccessPage;