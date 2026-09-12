import Reveal from "./Reveal";

const images = [
  ["Bedroom", "/images/delux-room.jpeg"],
  ["Morning light", "/images/mountainview.jpeg"],
  ["The surroundings", "/images/balcony.jpeg"],
  ["Cozy rooms", "/images/family-room.jpeg"],
  ["Side View", "/images/sidescene.jpeg"],
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#dedfd5] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">
                05 / Gallery
              </p>
              <h2 className="mt-4 font-display text-5xl tracking-[-.035em] md:text-7xl">
                See the feeling.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-6 text-[#686e66] md:block">
              Replace these placeholder images with your own property
              photography.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2">
          {images.map(([label, src], i) => (
            <Reveal
              key={label}
              delay={(i % 2) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={src}
                  alt={`${label} at In His Time homestay in Sohra Meghalaya`}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full transition duration-700 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#17221b]/75 px-4 py-2 text-xs text-white backdrop-blur-md">
                  {label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
