const buttonClasses =
  "inline-block rounded-full border border-cyan-700 bg-gradient-to-br from-cyan-500 to-cyan-700 px-4 py-2.5 text-sm font-semibold text-white transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(13,94,107,0.3)]";

function ButtonBlock({ label, href = "#", onClick }) {
  if (href) {
    return (
      <a className={buttonClasses} href={href}>
        {label}
      </a>
    );
  }

  return (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonBlock;
