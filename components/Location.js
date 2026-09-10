import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.7fr_1.3fr] md:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">06 / Find us</p>
          <h2 className="mt-5 font-display text-5xl leading-none tracking-[-.035em] md:text-7xl">
            Your base
            <br />
            in <span className="text-[#6d765e]">Sohra.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#626960]">
            Circuit House Road, Saitsohpen, Sohra, Meghalaya 793108
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=In+His+Time+Sohra+Meghalaya"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full border border-[#17221b]/20 px-5 py-3 text-sm font-medium transition hover:bg-[#17221b] hover:text-white"
          >
            Open in Google Maps ↗
          </a>
        </Reveal>

        <Reveal delay={.1}>
          <div className="overflow-hidden rounded-[2rem] border border-[#17221b]/10 bg-[#d7dbd2]">
            <iframe
              title="Map showing In His Time homestay in Sohra Meghalaya"
              src="https://www.google.com/maps?q=In%20His%20Time%2C%20Sohra%2C%20Meghalaya&output=embed"
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}