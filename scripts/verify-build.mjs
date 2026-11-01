import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const rootRepo = owner && repo?.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const rawBase = process.env.BASE_PATH ?? (repo && !rootRepo ? `/${repo}/` : '/');
const base = `/${rawBase.split('/').filter(Boolean).join('/')}${rawBase === '/' ? '' : '/'}`;
const origin = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const preview = process.env.PUBLIC_DEPLOY_ENV !== 'production';
const failures = [];
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await walk('dist');
for (const route of ['', 'studio', 'trattamenti', 'team', 'video', 'contatti', 'privacy', 'cookie']) {
  try { await stat(resolve('dist', route, 'index.html')); }
  catch { failures.push(`Missing route: ${route || '/'}`); }
}
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const path = file.slice(resolve('dist').length).replace(/index\.html$/, '');
  if (!/<html[^>]*lang="it"/.test(html)) failures.push(`${path}: missing Italian language`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`${path}: expected one h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${path}: missing title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${path}: missing description`);
  if (preview && !/<meta name="robots" content="[^"]*noindex/.test(html)) failures.push(`${path}: preview must be noindex`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|tel:|data:|#)/.test(value)) continue;
    const url = new URL(value, `${origin}${base}${path.replace(/^\//, '')}`);
    if (!url.pathname.startsWith(base)) { failures.push(`${path}: outside base: ${value}`); continue; }
    const localPath = decodeURIComponent(url.pathname.slice(base.length));
    try {
      const info = await stat(resolve('dist', localPath));
      if (info.isDirectory()) await stat(resolve('dist', localPath, 'index.html'));
    } catch { failures.push(`${path}: broken local URL: ${value}`); }
  }
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonical && /localhost|127\.0\.0\.1/.test(canonical[1])) failures.push(`${path}: localhost canonical`);
  if (canonical && !new URL(canonical[1]).pathname.startsWith(base)) failures.push(`${path}: canonical misses base`);
  if (/<iframe\b/.test(html)) failures.push(`${path}: unsolicited iframe`);
  if (/href="https:\/\/(wa\.me|api\.whatsapp)/.test(html)) failures.push(`${path}: unverified WhatsApp enabled`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`PASS: ${files.length} HTML pages, expected routes, links/assets under ${base}, metadata and preview safeguards.`);
