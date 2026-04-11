import "../styles/components/ContentBlock.css";

function ContentBlock({ children, className = "" }) {
  return <div className={`content-block ${className}`.trim()}>{children}</div>;
}

export default ContentBlock;
