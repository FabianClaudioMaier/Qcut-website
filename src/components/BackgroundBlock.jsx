import "../styles/components/BackgroundBlock.css";

function BackgroundBlock({ children, image, className = "" }) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <section className={`background-block ${className}`.trim()} style={style}>
      <div className="background-block__veil" />
      <div className="background-block__inner">{children}</div>
    </section>
  );
}

export default BackgroundBlock;
