import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Globe, Layers, ShoppingBag, Smartphone } from "lucide-react";
import { BottomDock } from "@/components/bottom-dock";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — chanel" },
      { name: "description", content: "Explore chanel's project archive — prototypes, websites and design systems." },
      { property: "og:title", content: "Projects — chanel" },
      { property: "og:description", content: "Explore chanel's project archive — prototypes, websites and design systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Kivu Cinema",
    role: "Movie Distribution",
    year: "2026",
    icon: Smartphone,
    description:
      "Kivu Cinema is a digital movie distribution platform founded by young filmmaker Shyaka Bruce, created to support solo and emerging filmmakers across Rwanda ",
    tags: ["Figma", "Prototyping", "Motion"],
    demo: "https://kivucinema.com/",
  },
  {
    title: "Modern 3D Portfolio Website",
    role: "Web design · Launch",
    year: "2025",
    icon: Globe,
    description:
      "A highly interactive and visually stunning portfolio website with 3D animations, dynamic transitions, and immersive interactions that showcase projects through animated previews and scroll-triggered storytelling. Includes an About Me section, skill visuals, downloadable CV, contact form, and fully responsive mobile-friendly design.",
    tags: ["Web", "Branding", "SEO"],
    demo: "https://shyakabruce.netlify.app/",
  },
  {
    title: "Data Visualization Dashboard",
    role: "UI engineering · Components",
    year: "2025",
    icon: Layers,
    description:
      "An interactive dashboard for visualizing complex datasets with real-time updates, filtering options, and export capabilities.  ",
    tags: ["Tokens", "Components", "Docs"],
    demo: "https://dashboardaianalystics.netlify.app/",
  },
  {
    title: "E-commerce App",
    role: "Mobile design · Shopping",
    year: "2024",
    icon: ShoppingBag,
    description:
      "A full-featured e-commerce solution with payment processing, user authentication, inventory management, and responsive design.",
    tags: ["Mobile", "Checkout", "UX"],
    demo: "https://tygerstyle.netlify.app/",
  },
] as const;

function Projects() {
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
          Projects
        </h1>
        <p className="mt-1 text-sm font-medium text-white/90">
          Selected work, newest first.
        </p>
      </header>

      <div className="mt-7 space-y-4">
        {projects.map(({ title, role, year, icon: Icon, description, tags, demo }) => (
          <article key={title} className="glass-card rounded-[1.75rem] p-5">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sky-soft">
                <Icon className="size-6 text-sky-deep" strokeWidth={2.2} />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-base font-bold text-foreground">{title}</h2>
                <p className="truncate text-xs font-semibold text-sky-deep">{role}</p>
              </div>
              <span className="ml-auto rounded-full bg-sky/12 px-2.5 py-1 text-[0.65rem] font-bold text-sky-deep">
                {year}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">{description}</p>
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sky-mist px-3 py-1 text-[0.7rem] font-semibold text-sky-deep"
                >
                  {tag}
                </span>
              ))}
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-sky px-4 py-1.5 text-[0.7rem] font-bold text-white shadow-[0_10px_18px_-8px_oklch(0.6_0.13_232/55%),inset_0_1.5px_1px_oklch(1_0_0/35%)] transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="size-3.5" strokeWidth={2.5} />
                Live 
              </a>
            </div>
          </article>
        ))}
      </div>

      <BottomDock />
    </div>
  );
}
