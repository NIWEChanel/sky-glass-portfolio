import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Globe, Instagram, Layers, Mail, MessageCircle, Send, ShoppingBag, Smartphone } from "lucide-react";
import { BottomDock } from "@/components/bottom-dock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex — Personal Portfolio" },
      { name: "description", content: "The personal portfolio of Alex — product design, prototypes and creative work." },
      { property: "og:title", content: "Alex — Personal Portfolio" },
      { property: "og:description", content: "The personal portfolio of Alex — product design, prototypes and creative work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const quickActions = [
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/250785562931"  },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/1chanel___"  },
  { label: "Email", icon: Mail, href: "mailto:chanelvibes0@gmail.com" },
  { label: "Telegram", icon: Send, href: "https://t.me/+250792737675" },
] as const;

const projects = [
  { title: "Mobile App Prototype", detail: "iOS · Prototyping", icon: Smartphone },
  { title: "Marketing Website", detail: "Web · Launch", icon: Globe },
  { title: "Design System", detail: "UI · Components", icon: Layers },
  { title: "E-commerce App", detail: "Mobile · Shopping", icon: ShoppingBag },
] as const;

function Home() {
  return (
    <div className="mx-auto w-full max-w-md px-5 pb-36 pt-9">
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/90"></p>
          <h1 className="mt-0.5 text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
            Chanel
          </h1>
        </div>
        <Link
          to="/profile"
          className="glass-chip clay-press mt-1 grid h-16 w-16 place-items-center rounded-full text-[0.65rem] font-bold uppercase tracking-wide text-sky-deep"
        >
          About
        </Link>
      </header>

      {/* Quick actions */}
      <section className="mt-9" aria-label="Quick actions">
        <div className="flex items-start justify-between px-1">
          {quickActions.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex w-1/4 flex-col items-center gap-2.5"
            >
              <span className="clay-circle clay-press grid size-16 place-items-center rounded-full">
                <Icon className="size-6 text-sky" strokeWidth={2.2} />
              </span>
              <span className="text-[0.7rem] font-semibold text-white drop-shadow-[0_1px_4px_oklch(0.55_0.12_233/35%)]">
                {label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Your projects */}
      <section className="mt-10" aria-label="Your projects">
        <div className="flex items-baseline justify-between px-1">
          <h2 className="text-xl font-bold text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
            My Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm font-semibold text-white underline decoration-white/50 decoration-2 underline-offset-4 transition-colors hover:decoration-white"
          >
            See all
          </Link>
        </div>
        <div className="mt-4 space-y-3.5">
          {projects.map(({ title, detail, icon: Icon }) => (
            <Link
              key={title}
              to="/projects"
              className="clay clay-press flex items-center gap-4 rounded-full py-3 pl-4 pr-5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sky-soft">
                <Icon className="size-5 text-sky-deep" strokeWidth={2.2} />
              </span>
              <span className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{title}</p>
                <p className="truncate text-xs font-medium text-foreground/60">{detail}</p>
              </span>
              <ChevronRight className="ml-auto size-4 shrink-0 text-sky" />
            </Link>
          ))}
        </div>
      </section>

      <BottomDock />
    </div>
  );
}
