import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.35fr_1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">01 / A slower stay</p>
        </Reveal>
        <Reveal delay={.1}>
          <h2 className="font-display text-balance text-4xl leading-tight tracking-[-.03em] md:text-7xl">
            Come for the waterfalls.
            <br />
            <span className="text-[#6d765e]">Stay for the feeling.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#5c635b] md:text-lg">
            In His Time is a private one-bedroom homestay in Sohra, Meghalaya —
            made for quiet mornings, misty landscapes and unhurried evenings.
            It is a simple place to return to after a day exploring Cherrapunji.
          </p>
        </Reveal>
      </div>
    </section>
  );
}