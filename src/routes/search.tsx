import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { BottomDock } from "@/components/bottom-dock";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — chanel" },
      { name: "description", content: "Search chanel's projects, notes and case studies." },
      { property: "og:title", content: "Search — chanel" },
      { property: "og:description", content: "Search chanel's projects, notes and case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SearchPage,
});

const entries = [
  { title: "Mobile App Prototype", kind: "Project" },
  { title: "Marketing Website", kind: "Project" },
  { title: "Design System", kind: "Project" },
  { title: "Designing for glass surfaces", kind: "Note" },
  { title: "Motion principles I keep reusing", kind: "Note" },
  { title: "Portfolio refresh, 2026", kind: "Note" },
] as const;

function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => e.title.toLowerCase().includes(q));
  }, [query]);

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
          Search
        </h1>
      </header>

      <div className="glass-input mt-6 flex items-center gap-3 rounded-full px-5 py-3.5">
        <SearchIcon className="size-5 shrink-0 text-sky" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Projects, notes, ideas…"
          className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-foreground/40 focus:outline-none"
        />
      </div>

      <div className="mt-6 space-y-3.5">
        {results.length === 0 ? (
          <p className="glass-card rounded-[1.5rem] p-5 text-center text-sm font-medium text-foreground/70">
            Nothing found for “{query}”.
          </p>
        ) : (
          results.map(({ title, kind }) => (
            <div key={title} className="clay flex items-center gap-4 rounded-full py-3 pl-4 pr-5">
              <span className="rounded-full bg-sky-soft px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-sky-deep">
                {kind}
              </span>
              <p className="truncate text-sm font-bold text-foreground">{title}</p>
            </div>
          ))
        )}
      </div>

      <BottomDock />
    </div>
  );
}
