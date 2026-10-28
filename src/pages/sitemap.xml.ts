// Why: tells search engines which pages exist: the hub and one page per skill, read from the same collection the
// hub lists, so a new skill joins the sitemap when it joins the site.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://skills.victorsaly.com');
  const skills = await getCollection('skills');
  const urls = ['/', ...skills.map((s) => `/${s.id}`)].map((path) => new URL(path, base).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
