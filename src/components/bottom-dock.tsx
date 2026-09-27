import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Search, Briefcase, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/search", label: "Search", icon: Search },
  { to: "/hire", label: "Hire me", icon: Briefcase },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomDock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-50 w-[min(100%-2rem,24rem)] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-full px-3 py-2.5">
        {items.map(({ to, label, icon: Icon }) => {
          const isActive = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`clay-press flex flex-1 flex-col items-center gap-1 rounded-full px-2 py-1.5 ${
                isActive ? "bg-sky/15" : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className={`size-5 ${isActive ? "text-sky-deep" : "text-sky"}`}
                aria-hidden
              />
              <span
                className={`text-[0.625rem] font-semibold leading-none ${
                  isActive ? "text-sky-deep" : "text-sky"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
