import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/dj-version", label: "DJ Version" },
  { to: "/editor-version", label: "Editor Version" },
  { to: "/help", label: "Help" }
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#212121] backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-3">
        <NavLink className="text-lg font-bold tracking-wide text-slate-50" to="/">
          QCUT
        </NavLink>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-3 py-1.5 text-sm font-medium transition",
                  isActive
                    ? "bg-[#7ECAC3]/20 text-[#7ECAC3]"
                    : "text-slate-300 hover:bg-slate-800 hover:text-[#FFB238]"
                ].join(" ")
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
