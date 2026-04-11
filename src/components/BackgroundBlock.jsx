function BackgroundBlock({ children, image, className = "" }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <section
      className={`relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0b1220] bg-cover bg-center px-8 py-12 text-slate-100 ${className}`.trim()}
      style={style}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,7,16,0.9),rgba(10,16,28,0.82))]" />
      <div className="pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full bg-[#7ECAC3]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-2 h-56 w-56 rounded-full bg-[#FFB238]/25 blur-3xl" />
      <div className="relative z-10 flex w-full flex-col gap-4">{children}</div>
    </section>
  );
}

export default BackgroundBlock;
