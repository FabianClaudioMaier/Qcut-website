function TextBlock({ children, muted = false }) {
  return <p className={`${muted ? "text-[0.95rem] text-slate-500" : "text-base text-slate-800"} m-0`}>{children}</p>;
}

export default TextBlock;
