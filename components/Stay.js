import Reveal from "./Reveal";

const items = [
  [
    "Private one-bedroom stay",
    "A comfortable, intimate base for couples and small trips.",
  ],
  [
    "Peaceful surroundings",
    "Wake up to the atmosphere of Sohra rather than a busy city hotel.",
  ],
  [
    "Great sightseeing base",
    "Explore waterfalls, caves, viewpoints and the wider Cherrapunji region.",
  ],
  [
    "Direct host communication",
    "Ask questions, plan your arrival and book directly on WhatsApp.",
  ],
];

export default function Stay() {
  return (
    <section id="stay" className="bg-[#e7e5db] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_.95fr] md:items-center">
        <Reveal>
          <div
            className="aspect-4/5 overflow-hidden rounded-4xl bg-[#c9cec5] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/homestay.jpeg')" }}
          />
        </Reveal>

        <Reveal delay={0.1} className="md:pl-8">
          <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">
            02 / The stay
          </p>
          <h2 className="mt-5 font-display text-5xl leading-none tracking-[-.035em] md:text-7xl">
            Simple.
            <br />
            Private.
            <br />
            Thoughtful.
          </h2>

          <div className="mt-10 divide-y divide-[#17221b]/10 border-y border-[#17221b]/10">
            {items.map(([title, copy]) => (
              <div
                key={title}
                className="grid gap-2 py-5 sm:grid-cols-[.8fr_1.2fr]"
              >
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm leading-6 text-[#656b63]">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
