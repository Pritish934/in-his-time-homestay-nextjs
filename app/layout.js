import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://inhistime.example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "In His Time | Homestay in Sohra, Meghalaya",
    template: "%s | In His Time",
  },
  description:
    "Stay at In His Time, a peaceful one-bedroom homestay in Sohra, Meghalaya, near Seven Sisters Waterfall and the best experiences of Cherrapunji.",
  keywords: [
    "homestay in Sohra",
    "homestay in Cherrapunji",
    "homestay near Seven Sisters Waterfall",
    "Sohra Meghalaya homestay",
    "places to stay in Sohra",
    "one bedroom homestay Sohra",
    "accommodation in Cherrapunji",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "In His Time | Homestay in Sohra, Meghalaya",
    description:
      "A peaceful one-bedroom homestay in Sohra, Meghalaya. Stay close to the landscapes and waterfalls of Cherrapunji.",
    url: siteUrl,
    siteName: "In His Time",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "CrMYoTHG4XiaQx_s3E8ROw-PlpGxd3UWTk-Qjl2d5cc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
