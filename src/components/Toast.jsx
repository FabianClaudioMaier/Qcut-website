import { useEffect } from "react";

function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="toast"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--surface)",
        border: "1px solid var(--line-2)",
        borderRadius: "12px",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        zIndex: 1000,
        animation: "slideUp 0.3s ease-out",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
      }}
    >
      <span style={{ fontSize: "16px", color: "var(--text)" }}>{message}</span>
    </div>
  );
}

export default Toast;