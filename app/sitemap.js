export default function sitemap() {
  const base = process.env.NEXT_SITE_URL || "https://inhistime.example.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
