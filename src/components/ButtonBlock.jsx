const buttonClasses =
  "inline-flex items-center justify-center rounded-full border border-lime-300/70 bg-gradient-to-r from-lime-400 to-orange-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-150 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_20px_rgba(163,230,53,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/60";

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
