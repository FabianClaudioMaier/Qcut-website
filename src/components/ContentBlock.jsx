function ContentBlock({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-300 bg-white p-5 shadow-[0_10px_24px_rgba(17,39,64,0.08)] ${className}`.trim()}>
      {children}
    </div>
  );
}

export default ContentBlock;
