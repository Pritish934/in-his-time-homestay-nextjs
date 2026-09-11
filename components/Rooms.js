import Reveal from "./Reveal";

const rooms = [
  {
    name: "Deluxe Room",
    label: "A cosy private stay",
    capacity: "Up to 2 guests",
    image: "/images/delux-room.jpeg",
    description:
      "A comfortable room designed for a relaxed stay in Sohra, with an attached bathroom and the essentials you need after a day of exploring Meghalaya.",
    highlights: [
      "Attached bathroom",
      "Extra mattress available for an additional guest",
    ],
  },
  {
    name: "Family Room",
    label: "Comfort for families & groups",
    capacity: "Up to 4 guests",
    image: "/images/family-room.jpeg",
    description:
      "A spacious, comfortable option for families and small groups looking for a convenient base while exploring Sohra and its waterfalls.",
    highlights: ["Attached bathroom"],
  },
];

const facilities = [
  "Wi-Fi",
  "Hot water",
  "Food delivery",
  "Self-cooking available",
  "On-site parking",
];

function RoomCard({ room }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
  const message = encodeURIComponent(
    `Hi In His Time! 👋 I'm interested in the ${room.name}. Could you please share availability, price and booking details?`,
  );

  return (
    <article className="group overflow-hidden rounded-4xl border border-[#17221b]/10 bg-white/65 shadow-[0_18px_60px_rgba(23,34,27,0.08)] backdrop-blur-sm">
      <div className="relative aspect-4/3 overflow-hidden bg-[#dfe4dc]">
        <img
          src={room.image}
          alt={`${room.name} at In His Time Homestay in Sohra`}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#17221b]/60 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#17221b]/70 px-4 py-2 text-xs tracking-[0.16em] text-white backdrop-blur-md">
          {room.capacity}
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/70">
            {room.label}
          </p>
          <h3 className="font-display text-3xl">{room.name}</h3>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="max-w-xl text-sm leading-7 text-[#17221b]/65 md:text-[15px]">
          {room.description}
        </p>

        <div className="mt-6 space-y-3">
          {room.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-[#17221b]/80"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79a62]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="my-7 h-px bg-[#17221b]/10" />

        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#17221b]/45">
          Included facilities
        </p>
        <div className="flex flex-wrap gap-2">
          {facilities.map((facility) => (
            <span
              key={facility}
              className="rounded-full border border-[#17221b]/10 bg-[#f4f0e7] px-3 py-2 text-xs text-[#17221b]/70"
            >
              {facility}
            </span>
          ))}
        </div>

        <a
          href={`https://wa.me/${number}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 flex w-full items-center justify-center rounded-full bg-[#17221b] px-5 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#294936]"
        >
          Ask about this room
        </a>
      </div>
    </article>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#f4f0e7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#b79a62]">
              Rooms & facilities
            </p>
            <h2 className="font-display text-4xl leading-[1.05] text-[#17221b] md:text-6xl">
              Choose the stay that fits your journey.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#17221b]/65 md:text-lg">
              From a cosy deluxe room for couples and solo travellers to a
              family room for a small group, both stays give you a comfortable
              base in Sohra.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2 lg:gap-8">
          {rooms.map((room, index) => (
            <Reveal key={room.name} delay={index * 0.08}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
