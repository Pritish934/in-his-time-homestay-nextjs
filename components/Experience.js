import Reveal from "./Reveal";

const places = [
  ["01", "Seven Sisters Falls", "A dramatic seasonal waterfall and one of the signature sights around Sohra."],
  ["02", "Nohkalikai Falls", "A legendary Meghalaya viewpoint surrounded by dramatic green cliffs."],
  ["03", "Mawsmai Cave", "A compact limestone cave experience for a different side of Sohra."],
  ["04", "Sohra landscapes", "Misty roads, rolling hills, rain-soaked forests and viewpoints made for slow exploration."]
];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-7 md:grid-cols-[.45fr_1fr]">
            <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">04 / Around Sohra</p>
            <h2 className="font-display text-balance text-5xl leading-none tracking-[-.035em] md:text-7xl">
              A stay with
              <br />
              <span className="text-[#6d765e]">somewhere to go.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid border-t border-[#17221b]/10">
          {places.map(([num, title, copy], i) => (
            <Reveal key={num} delay={i * .04}>
              <article className="grid gap-5 border-b border-[#17221b]/10 py-7 md:grid-cols-[.12fr_.35fr_1fr] md:items-start">
                <span className="text-xs text-[#8b8e82]">{num}</span>
                <h3 className="font-display text-3xl">{title}</h3>
                <p className="max-w-xl text-sm leading-7 text-[#626960]">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}