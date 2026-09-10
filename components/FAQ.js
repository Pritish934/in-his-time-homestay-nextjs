import Reveal from "./Reveal";

const faqs = [
  ["How do I book directly?", "Use the WhatsApp button anywhere on the site. Send an enquiry and the host can confirm availability, pricing and booking details directly."],
  ["Where is In His Time located?", "The homestay is on Circuit House Road, Saitsohpen, Sohra, Meghalaya 793108."],
  ["How many guests can stay?", "This website describes the property as a one-bedroom private homestay. Confirm the maximum occupancy with the host before publishing the final copy."],
  ["What should I know before arriving?", "Use WhatsApp to confirm check-in timing, exact arrival instructions, parking and any property-specific house rules."],
  ["Can I ask about local sightseeing?", "Yes. Direct communication is one of the benefits of booking directly; ask the host about routes, weather and nearby attractions."]
];

export default function FAQ() {
  return (
    <section className="bg-[#f4f0e7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.5fr_1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[.25em] text-[#7d806f]">07 / Questions</p>
          <h2 className="mt-5 font-display text-5xl tracking-[-.035em] md:text-6xl">Before you arrive.</h2>
        </Reveal>
        <div className="border-t border-[#17221b]/10">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * .03}>
              <details className="group border-b border-[#17221b]/10 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">
                  {q}
                  <span className="text-xl text-[#7d806f] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-[#626960]">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}