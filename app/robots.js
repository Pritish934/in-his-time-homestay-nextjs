export default function robots() {
  const base = process.env.NEXT_SITE_URL || "https://inhistime.example.com";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
