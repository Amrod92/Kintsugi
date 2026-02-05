import Link from "next/link";
import { notFound } from "next/navigation";
import { STORIES_DATA, formatItalianStoryDate } from "@/lib/stories";

interface StoryPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function StorieDetailPage({ params }: StoryPageProps) {
  const { id } = await Promise.resolve(params);
  const story = STORIES_DATA.find((item) => item.id === id);

  if (!story) {
    notFound();
  }

  return (
    <div className="page-bg text-[#3b2f22] min-h-screen">
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <Link
          href="/storie"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f] transition hover:text-[#886b44]"
        >
          ← Torna alle storie
        </Link>

        <div className="mt-6 overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-2xl shadow-[#cbb896]/40">
          <div className="relative h-64 w-full md:h-80">
            <img
              src={story.cover}
              alt={story.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 rounded-full bg-[#9b7b4f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {story.category}
            </div>
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-seasons text-3xl font-bold text-[#3b2f22] sm:text-4xl">
                {story.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#9b7b4f]">
                <span>{story.location}</span>
                <span>·</span>
                <span>{formatItalianStoryDate(story.date)}</span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-[#5b4b3a] sm:text-base">
                {story.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-[#f0e3cf] bg-[#fbf7f0] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Autore
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={story.author.avatar}
                    alt={story.author.name}
                    className="h-14 w-14 rounded-full object-cover border border-white/80 shadow-sm"
                  />
                  <div>
                    <p className="text-base font-semibold text-[#3b2f22]">
                      {story.author.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9b7b4f]">
                      {story.author.role}
                    </p>
                    <p className="text-xs text-[#6b5a44]">
                      {story.author.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#f0e3cf] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                  Contesto
                </p>
                <p className="mt-3 text-sm text-[#5b4b3a]">
                  Un racconto nato dalla comunità Kintsugi a {story.location}.
                </p>
                <Link
                  href="/contatti"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#9b7b4f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#886b44]"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
