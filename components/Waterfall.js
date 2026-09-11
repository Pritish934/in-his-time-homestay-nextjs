import Reveal from "./Reveal";

export default function Waterfall() {
  return (
    <section className="bg-[#17221b] px-5 py-20 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[.25em] text-[#cbb98f]">
            03 / The highlight
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <Reveal>
            <div
              className="aspect-16/10 overflow-hidden rounded-4xl bg-[#32483b] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1800&q=85')",
              }}
            />
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="font-display text-5xl leading-[.95] tracking-[-.035em] md:text-6xl">
              Seven Sisters
              <br />
              <span className="text-[#cbb98f]">Waterfall.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              One of the most memorable landscapes around Sohra is part of the
              reason this corner of Meghalaya feels so special. Use this section
              to tell guests the exact distance and viewpoint information once
              you confirm it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
