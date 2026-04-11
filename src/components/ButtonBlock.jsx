import "../styles/components/ButtonBlock.css";

function ButtonBlock({ label, href = "#", onClick }) {
  if (href) {
    return (
      <a className="button-block" href={href}>
        {label}
      </a>
    );
  }

  return (
    <button className="button-block" type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonBlock;
