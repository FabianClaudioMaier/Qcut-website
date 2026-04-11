function BackgroundBlock({ children, image, className = "" }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <section
      className={`relative min-h-[320px] overflow-hidden rounded-[20px] bg-[#1b314a] bg-cover bg-center px-8 py-12 text-[#f3f6fb] ${className}`.trim()}
      style={style}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,12,28,0.82),rgba(10,90,120,0.58))]" />
      <div className="relative z-10 flex max-w-[680px] flex-col gap-4">{children}</div>
    </section>
  );
}

export default BackgroundBlock;
