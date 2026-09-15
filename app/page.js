import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stay from "@/components/Stay";
import Waterfall from "@/components/Waterfall";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Rooms from "@/components/Rooms";

const siteUrl = process.env.NEXT_SITE_URL || "https://inhistime.example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "In His Time Homestay",
  description:
    "Private one-bedroom homestay in Sohra, Meghalaya near the landscapes and waterfalls of Cherrapunji.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Circuit House Road, Saitsohpen",
    addressLocality: "Sohra",
    addressRegion: "Meghalaya",
    postalCode: "793108",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Sohra",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Stay />
        <Waterfall />
        <Experience />
        <Gallery />
        <Rooms />
        <Location />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
