import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Mail, MessageCircle, Send } from "lucide-react";
import { BottomDock } from "@/components/bottom-dock";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire me — chanel" },
      { name: "description", content: "Start a project with chanel — product design, prototypes and design systems." },
      { property: "og:title", content: "Hire me — chanel" },
      { property: "og:description", content: "Start a project with chanel — product design, prototypes and design systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hire,
});

const services = ["Product design", "Prototyping", "Design systems", "Web design"] as const;

const channels = [
  { label: "Email", detail: "chanelvibes0@gmail.com", icon: Mail, href: "mailto:chanelvibes0@gmail.com" },
  { label: "WhatsApp", detail: "Message anytime", icon: MessageCircle, href: "https://wa.me/250785562931" },
  { label: "Telegram", detail: "Fastest reply", icon: Send, href: "https://t.me/+250792737675"  },
] as const;

function Hire() {
  return (
    <div className="mx-auto w-full max-w-md px-5 pb-36 pt-9">
      <header>
        <Link
          to="/"
          className="glass-chip clay-press inline-grid size-12 place-items-center rounded-full text-sky-deep"
          aria-label="Back home"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
          Hire me
        </h1>
        <p className="mt-1 text-sm font-medium text-white/90">
          Available for select projects.
        </p>
      </header>

      <section className="glass-card mt-7 rounded-[1.75rem] p-5">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-sky-soft">
            <Check className="size-3.5 text-sky-deep" strokeWidth={3} />
          </span>
          <p className="text-sm font-bold text-foreground">Currently open to work</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground/75">
          I design mobile products, prototypes and design systems. Tell me what you're building
          and I'll reply within a day.
        </p>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {services.map((s) => (
            <span
              key={s}
              className="rounded-full bg-sky-mist px-3 py-1 text-[0.7rem] font-semibold text-sky-deep"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <h2 className="mt-8 px-1 text-lg font-bold text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
        Reach out
      </h2>
      <div className="mt-4 space-y-3.5">
        {channels.map(({ label, detail, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="clay clay-press flex items-center gap-4 rounded-full py-3 pl-4 pr-5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sky-soft">
              <Icon className="size-5 text-sky-deep" strokeWidth={2.2} />
            </span>
            <span className="min-w-0">
              <p className="text-sm font-bold text-foreground">{label}</p>
              <p className="truncate text-xs font-medium text-foreground/60">{detail}</p>
            </span>
          </a>
        ))}
      </div>

      <BottomDock />
    </div>
  );
}
