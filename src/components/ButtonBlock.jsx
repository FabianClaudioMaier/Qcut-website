import { Link } from "react-router-dom";

const buttonClasses =
  "inline-flex items-center justify-center rounded-full border border-[#FFB238] bg-[#FFB238] px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_12px_rgba(255,178,56,0.24)] transition duration-150 hover:-translate-y-0.5 hover:bg-[#ffc45c] hover:border-[#ffc45c] hover:shadow-[0_0_20px_rgba(255,178,56,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB238]/60";

function ButtonBlock({ label, to, href, onClick, className = "" }) {
  const combinedClasses = `${buttonClasses} ${className}`.trim();

  if (to) {
    return (
      <Link className={combinedClasses} to={to}>
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={combinedClasses} href={href}>
        {label}
      </a>
    );
  }

  return (
    <button className={combinedClasses} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonBlock;
