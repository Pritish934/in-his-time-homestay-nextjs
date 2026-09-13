export default function robots() {
  const base = process.env.NEXT_SITE_URL;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
