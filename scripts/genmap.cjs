// Projects NJ county boundaries into the SVG paths used by CoverageMap.astro.
// Source: US Census TIGERweb, State_County layer 1, filtered to STATE='34'.
//
//   curl -o .client-photos/nj-counties.json \
//     "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1/query?where=STATE%3D%2734%27&outFields=NAME,GEOID&returnGeometry=true&f=geojson&outSR=4326"
//   node scripts/genmap.cjs        # writes .client-photos/map.json
//
// Run from the repo root. Only needed if the coverage area changes.
const fs = require('fs');

const SRC = '.client-photos/nj-counties.json';
const TARGET = { '34007': 'camden', '34005': 'burlington', '34015': 'gloucester' };
const EPS_REGION = 0.45;
const EPS_CTX = 1.4;

const g = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const fips = (f) => f.properties.GEOID;
const rings = (f) => {
  const gm = f.geometry;
  return gm.type === 'Polygon' ? gm.coordinates : gm.coordinates.flat(1);
};

// Bounding box around the three counties we actually cover, plus a little air.
let b = [999, 999, -999, -999];
for (const f of g.features)
  if (TARGET[fips(f)])
    for (const r of rings(f))
      for (const [x, y] of r) {
        b[0] = Math.min(b[0], x); b[1] = Math.min(b[1], y);
        b[2] = Math.max(b[2], x); b[3] = Math.max(b[3], y);
      }
const padX = (b[2] - b[0]) * 0.06, padY = (b[3] - b[1]) * 0.06;
b = [b[0] - padX, b[1] - padY, b[2] + padX, b[3] + padY];

// Equirectangular is plenty at one-county scale; scale x by cos(lat) so it
// doesn't look stretched.
const lat0 = (b[1] + b[3]) / 2;
const kx = Math.cos((lat0 * Math.PI) / 180);
const W = 1000;
const H = Math.round(W * ((b[3] - b[1]) / ((b[2] - b[0]) * kx)));
const px = ([x, y]) => [((x - b[0]) / (b[2] - b[0])) * W, ((b[3] - y) / (b[3] - b[1])) * H];

function rdpOpen(pts, eps) {
  if (pts.length < 3) return pts;
  let dmax = 0, idx = 0;
  const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1];
  const dx = bx - ax, dy = by - ay, den = Math.hypot(dx, dy) || 1e-9;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / den;
    if (d > dmax) { dmax = d; idx = i; }
  }
  return dmax > eps
    ? [...rdpOpen(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdpOpen(pts.slice(idx), eps)]
    : [pts[0], pts[pts.length - 1]];
}

// A closed ring has first === last, which makes RDP's perpendicular distance
// degenerate to zero — split it in half and simplify each open run.
function simplifyRing(ring, eps) {
  let p = ring.map(px);
  if (p.length > 1 && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p = p.slice(0, -1);
  if (p.length < 4) return p;
  const mid = Math.floor(p.length / 2);
  const a = rdpOpen(p.slice(0, mid + 1), eps);
  const c = rdpOpen(p.slice(mid).concat([p[0]]), eps);
  return a.slice(0, -1).concat(c.slice(0, -1));
}

const path = (f, eps) =>
  rings(f)
    .map((r) => {
      const p = simplifyRing(r, eps);
      if (p.length < 3) return '';
      return 'M' + p.map(([x, y]) => x.toFixed(1) + ' ' + y.toFixed(1)).join('L') + 'Z';
    })
    .filter(Boolean)
    .join('');

const inView = (f) => rings(f).some((r) => r.some(([x, y]) => x > b[0] && x < b[2] && y > b[1] && y < b[3]));
const ctx = g.features.filter(
  (f) => !TARGET[fips(f)] && inView(f)
);

// Area centroid of a county's largest ring — where its name label sits.
function centroid(f) {
  const r = rings(f).sort((a, c) => c.length - a.length)[0].map(px);
  let A = 0, cx = 0, cy = 0;
  for (let i = 0; i < r.length - 1; i++) {
    const [x0, y0] = r[i], [x1, y1] = r[i + 1];
    const cross = x0 * y1 - x1 * y0;
    A += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross;
  }
  A *= 0.5;
  return { x: +(cx / (6 * A)).toFixed(1), y: +(cy / (6 * A)).toFixed(1) };
}

const out = {
  W, H,
  ctx: ctx.map((f) => path(f, EPS_CTX)).filter(Boolean),
  regions: Object.entries(TARGET).map(([k, slug]) => {
    const f = g.features.find((x) => fips(x) === k);
    return { slug, d: path(f, EPS_REGION), label: centroid(f) };
  }),
  base: px([-75.0563, 39.9026]).map((n) => +n.toFixed(1)), // 208 W Cuthbert Blvd
};

fs.writeFileSync('.client-photos/map.json', JSON.stringify(out));
console.log('viewBox', W, 'x', H, '| ctx', out.ctx.length, '|', out.regions.map((r) => r.slug + ':' + r.d.length).join(' '));
