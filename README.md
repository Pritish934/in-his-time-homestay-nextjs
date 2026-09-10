# In His Time — Premium Sohra Homestay Website

Production-oriented Next.js website for a direct-booking homestay landing page.

## Stack

- Next.js
- JavaScript
- React
- Tailwind CSS v4
- Framer Motion
- Semantic HTML
- JSON-LD structured data
- Sitemap + robots
- WhatsApp direct booking CTA

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Before launch

1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
3. Replace all Unsplash placeholder URLs in `components/Hero.js`, `Stay.js`, `Waterfall.js`, and `Gallery.js`.
4. Replace placeholder property descriptions with verified amenities, occupancy, check-in/out and exact attraction distances.
5. Add the real Google Maps embed/place URL if desired.
6. Add a real OG image under `public/og.jpg` and reference it in `app/layout.js`.
7. Verify the property in Google Business Profile and connect the site to Google Search Console.
8. Run `npm run build` before deployment.

## SEO notes

The page intentionally targets natural local-intent phrases such as "homestay in Sohra", "homestay in Cherrapunji", and "homestay near Seven Sisters Waterfall". Avoid adding unsupported claims just for keywords. Exact distance, amenities, occupancy and policies should be confirmed by the property owner.

## Placeholder image policy

All remote image URLs are temporary visual placeholders. Replace them with the owner's own compressed WebP/AVIF photographs before launch. For the strongest local SEO and conversion, use original property photos with descriptive alt text.
