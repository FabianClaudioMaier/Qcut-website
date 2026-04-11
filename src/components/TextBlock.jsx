function TextBlock({ children, muted = false }) {
  return <p className={`${muted ? "text-[0.95rem] text-slate-400" : "text-base text-slate-100/90"} m-0`}>{children}</p>;
}

export default TextBlock;
