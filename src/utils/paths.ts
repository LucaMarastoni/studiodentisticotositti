/** Internal route or asset path, prefixed exactly once with Astro's configured base. */
export function pathFor(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
