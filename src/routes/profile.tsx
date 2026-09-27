import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Figma, Instagram, Layers, Smartphone } from "lucide-react";
import { BottomDock } from "@/components/bottom-dock";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — chanel" },
      { name: "description", content: "About chanel — product designer focused on prototypes and design systems." },
      { property: "og:title", content: "Profile — chanel" },
      { property: "og:description", content: "About chanel — product designer focused on prototypes and design systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profile,
});

const skills = ["UI design", "Prototyping", "Design systems", "Motion", "Web design"] as const;

const tools = [
  { label: "Figma", icon: Figma },
  { label: "Prototyping", icon: Smartphone },
  { label: "Systems", icon: Layers },
] as const;

function Profile() {
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
          Profile
        </h1>
      </header>

      <section className="glass-card mt-7 rounded-[2rem] p-6">
        <div className="flex items-center gap-4">
          <span className="clay-circle grid size-16 place-items-center rounded-full text-xl font-extrabold text-sky-deep">
            C
          </span>
          <div>
            <p className="text-lg font-extrabold text-foreground">GISUBIZO Chanel</p>
            <p className="text-sm font-semibold text-sky-deep">Web & App Developer</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/75">
         I'm a passionate developer who transforms complex problems into elegant,
          user-friendly solutions. With expertise in modern web technologies, 
          I build applications that are both beautiful and functional.
        </p>
      </section>

      <h2 className="mt-8 px-1 text-lg font-bold text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
        What I do
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="clay rounded-full px-4 py-2 text-[0.75rem] font-semibold text-sky-deep"
          >
            {s}
          </span>
        ))}
      </div>

      <h2 className="mt-8 px-1 text-lg font-bold text-white drop-shadow-[0_2px_8px_oklch(0.55_0.12_233/25%)]">
        Toolbelt
      </h2>
      <div className="mt-4 flex gap-3.5">
        {tools.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="clay flex flex-1 flex-col items-center gap-2 rounded-[1.25rem] py-4"
          >
            <Icon className="size-5 text-sky-deep" strokeWidth={2.2} />
            <span className="text-[0.7rem] font-semibold text-foreground/70">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/hire"
          className="clay clay-press inline-flex items-center justify-center rounded-full bg-sky px-8 py-3 text-sm font-bold text-white shadow-[0_18px_30px_-12px_oklch(0.6_0.13_232/50%)]"
        >
          Work with me
        </Link>
      </div>

      <p className="mt-6 text-center text-xs font-medium text-white/80">
        Instagram · @1chanel___
      </p>

      <BottomDock />
    </div>
  );
}
