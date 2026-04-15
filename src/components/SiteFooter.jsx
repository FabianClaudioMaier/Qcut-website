import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#212121]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="m-0">Qcut. Built for fast multicam workflows.</p>
        <div className="flex items-center gap-4">
          <Link className="transition hover:text-[#7ECAC3]" to="/impressum">
            Impressum
          </Link>
          <Link className="transition hover:text-[#FFB238]" to="/privacy-notice">
            Privacy Notice
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
