import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isRootRepository = owner && repo?.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.BASE_PATH ?? (repo && !isRootRepository ? `/${repo}/` : '/');
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
