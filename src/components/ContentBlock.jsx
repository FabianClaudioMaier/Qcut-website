function ContentBlock({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-700/80 bg-black p-5 shadow-[0_10px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default ContentBlock;
