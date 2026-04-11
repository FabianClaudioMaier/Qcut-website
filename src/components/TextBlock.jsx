import "../styles/components/TextBlock.css";

function TextBlock({ children, muted = false }) {
  return <p className={`text-block ${muted ? "text-block--muted" : ""}`.trim()}>{children}</p>;
}

export default TextBlock;
