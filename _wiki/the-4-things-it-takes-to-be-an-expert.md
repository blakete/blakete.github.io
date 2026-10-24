---
layout: post
title: "The 4 Things It Takes to Be an Expert"
date: 2026-10-23
last_updated: 2026-10-23
author:
- Blake Edwards
tags: [learning, expertise, deliberate practice]
permalink: /wiki/the-4-things-it-takes-to-be-an-expert
show_on_wiki: true
show_on_secret_wiki: false
---

1. **Many repeated attempts:** Thousands of games, shots, or problems, each with a clear outcome.
2. **A valid environment:** The domain must have learnable, predictable patterns. Chess and physics qualify; roulette and lottery numbers don't.
3. **Timely feedback:** Fast enough that you can connect action to result.
4. **Deliberate practice:** Thousands of hours at the edge of your ability, attacking weaknesses rather than repeating what's comfortable.

With all four, performance looks like magic. Without them, you get "experts" who do no better than chance or novices, like many political forecasters and active fund managers.

<div class="expertise-loop-embed" markdown="0">
<style>
/* Layout: one compact card. Header with live verdict; loop diagram beside the skill curve; 2x2 controls; collapsible math. */
.xl {
  /* Base colors come from the host site's theme (minima) when present; fallbacks are for standalone use. */
  --xl-bg: var(--minima-background-color, #f8f8e5);
  --xl-ink: var(--minima-text-color, #111111);
  --xl-accent: var(--minima-link-base-color, #2a7ae2);
  --xl-sans: var(--blake-font-sans, system-ui, -apple-system, "Segoe UI", sans-serif);
  --xl-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --xl-math: "STIX Two Text", "Cambria Math", "Times New Roman", serif;
  /* Everything else is mixed from those, so it follows the site's light/dark switch. */
  --xl-surface: color-mix(in srgb, var(--xl-ink) 3%, var(--xl-bg));
  --xl-ink-2: color-mix(in srgb, var(--xl-ink) 78%, var(--xl-bg));
  --xl-muted: color-mix(in srgb, var(--xl-ink) 58%, var(--xl-bg));
  --xl-rule: color-mix(in srgb, var(--xl-ink) 14%, var(--xl-bg));
  --xl-axis: color-mix(in srgb, var(--xl-ink) 30%, var(--xl-bg));
  --xl-chip: color-mix(in srgb, var(--xl-ink) 8%, var(--xl-bg));
  --xl-s1: var(--xl-accent);
  --xl-area: color-mix(in srgb, var(--xl-accent) 13%, transparent);
  --xl-good: #0ca30c; --xl-warning: #fab219; --xl-serious: #ec835a; --xl-critical: #d03b3b;
  --xl-critical-ink: color-mix(in srgb, #d03b3b 78%, var(--xl-ink));
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .xl {
    --xl-bg: var(--minima-background-color, #181818);
    --xl-ink: var(--minima-text-color, #bbbbbb);
    --xl-accent: var(--minima-link-base-color, #79b8ff);
    color-scheme: dark;
  }
}
:root[data-theme="dark"] .xl {
  --xl-bg: var(--minima-background-color, #181818);
  --xl-ink: var(--minima-text-color, #bbbbbb);
  --xl-accent: var(--minima-link-base-color, #79b8ff);
  color-scheme: dark;
}
:root[data-theme="light"] .xl { color-scheme: light; }
.xl, .xl * { box-sizing: border-box; letter-spacing: normal; word-spacing: normal; }
.xl {
  max-width: 780px; margin: 0 auto; background: var(--xl-surface); color: var(--xl-ink);
  border: 1px solid var(--xl-rule); border-radius: 10px; padding: 12px 14px 10px;
  font: 14px/1.4 var(--xl-sans); display: grid; gap: 8px;
}
.xl p { margin: 0; }
.xl var { font-family: var(--xl-math); font-size: 1.08em; }
.xl-head { display: flex; justify-content: space-between; align-items: center; gap: 4px 12px; flex-wrap: wrap; }
.xl-title { font-weight: 650; font-size: 1.143em; }
.xl-cap { color: var(--xl-ink-2); font-size: 0.914em; }
.xl-score { display: flex; align-items: center; gap: 8px; }
.xl-score b { font: 600 1.371em/1 var(--xl-mono); }
.xl-pill { display: inline-flex; align-items: center; gap: 5px; font-size: 0.869em; font-weight: 500; padding: 3px 9px 3px 5px; border-radius: 999px; background: var(--xl-chip); white-space: nowrap; }
.xl-pill svg { flex: none; }

.xl-main { display: grid; grid-template-columns: minmax(0, 46fr) minmax(0, 54fr); gap: 12px; align-items: center; }
.xl-loop { width: 100%; height: auto; display: block; }
.xl-loop .ring { fill: none; stroke: var(--xl-axis); stroke-width: 2; }
.xl-loop .arrow { fill: var(--xl-ink-2); }
.xl-loop .node rect { fill: var(--xl-surface); stroke: var(--xl-ink-2); stroke-width: 1.25; }
.xl-loop .node.weak rect { stroke: var(--xl-critical); stroke-dasharray: 5 4; }
.xl-loop .node .t { font: 600 12px system-ui, -apple-system, "Segoe UI", sans-serif; fill: var(--xl-ink); }
.xl-loop .node .v { font: 400 10px var(--xl-mono); fill: var(--xl-ink-2); }
.xl-loop .weak-tag { font: 700 8.5px var(--xl-mono); fill: var(--xl-critical-ink); letter-spacing: 0.06em; }
.xl-loop .badge circle { fill: var(--xl-ink); }
.xl-loop .weak .badge circle, .xl-loop .center.weak .badge circle { fill: var(--xl-critical); }
.xl-loop .badge text { font: 700 10px var(--xl-mono); fill: var(--xl-surface); }
.xl-loop .edge-label { font: 400 10px system-ui, sans-serif; fill: var(--xl-muted); }
.xl-loop .count { font: 650 18px system-ui, -apple-system, "Segoe UI", sans-serif; fill: var(--xl-ink); }
.xl-loop .count-sub { font: 400 10px var(--xl-mono); fill: var(--xl-muted); }
.xl-loop .center.weak .count { fill: var(--xl-critical-ink); }
.xl-loop .pulse { fill: var(--xl-s1); stroke: var(--xl-surface); stroke-width: 2; }

.xl-right { display: grid; gap: 4px; min-width: 0; }
.xl-chart { position: relative; }
.xl-chart svg { width: 100%; display: block; }
.xl-meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2px 12px; font-size: 0.846em; color: var(--xl-ink-2); }
.xl-legend { display: flex; gap: 12px; }
.xl-legend span { display: inline-flex; align-items: center; gap: 5px; }
.xl-key { width: 14px; height: 2px; border-radius: 2px; display: inline-block; }

.xl-ctrls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px 18px; border-top: 1px solid var(--xl-rule); padding-top: 8px; }
.xl-c { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 0 8px; min-width: 0; }
.xl-c .xl-lbl { display: inline-flex; align-items: center; gap: 6px; }
.xl-c label { font-size: 0.891em; font-weight: 600; white-space: nowrap; }
.xl-c .xl-v { font: 0.823em var(--xl-mono); color: var(--xl-ink-2); text-align: right; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.xl-c input[type=range] { grid-column: 1 / 3; width: 100%; margin: 0; accent-color: var(--xl-accent); height: 18px; }
.xl-n { width: 16px; height: 16px; border-radius: 50%; background: var(--xl-ink); color: var(--xl-surface); font: 700 0.709em/16px var(--xl-mono); text-align: center; flex: none; }
.xl-c.weak label { color: var(--xl-critical-ink); }
.xl-c.weak .xl-n { background: var(--xl-critical); }
.xl-x {
  font: 500 0.777em system-ui, sans-serif; color: var(--xl-ink-2); background: none; border: 1px solid var(--xl-axis);
  border-radius: 5px; padding: 2px 7px; cursor: pointer; line-height: 1.3;
}
.xl-x:hover { border-color: var(--xl-ink-2); color: var(--xl-ink); }
.xl-x:focus-visible, .xl summary:focus-visible { outline: 2px solid var(--xl-accent); outline-offset: 2px; }

.xl-foot { display: flex; justify-content: space-between; align-items: start; gap: 6px 10px; flex-wrap: wrap; }
.xl details { color: var(--xl-ink-2); font-size: 0.891em; flex: 1 1 260px; min-width: 0; }
.xl summary { cursor: pointer; color: var(--xl-ink); font-weight: 500; width: max-content; }
.xl-math { display: grid; gap: 6px; padding-top: 6px; }
.xl-eq { font-family: var(--xl-math); font-size: 1.097em; color: var(--xl-ink); overflow-x: auto; white-space: nowrap; padding: 4px 0; }
.xl-math ul { margin: 0; padding-left: 1.1em; display: grid; gap: 2px; }
.xl-tbl { overflow-x: auto; }
.xl table { border-collapse: collapse; font: 0.823em var(--xl-mono); font-variant-numeric: tabular-nums; width: auto; border: 0; margin: 0; }
.xl tr, .xl th, .xl td { background: none; border-left: 0; border-right: 0; border-top: 0; }
.xl th, .xl td { padding: 2px 12px 2px 0; text-align: left; border-bottom: 1px solid var(--xl-rule); }
.xl th { color: var(--xl-muted); font-weight: 500; }

@media (max-width: 600px) {
  .xl-main { grid-template-columns: minmax(0, 1fr); }
  .xl-loop { max-width: 380px; margin: 0 auto; }
  .xl-ctrls { grid-template-columns: minmax(0, 1fr); }
}
</style>

<div class="xl" id="xl">
  <div class="xl-head">
    <div>
      <div class="xl-title">The Expertise Loop</div>
      <p class="xl-cap">A simulated learner's skill (<var>R</var>²). Weaken any element and skill climbs slower or levels off lower.</p>
    </div>
    <div class="xl-score" aria-live="polite"><b data-k="skill">0.85</b><span class="xl-pill" data-k="verdict"></span></div>
  </div>

  <div class="xl-main">
    <svg class="xl-loop" data-k="loop" viewBox="0 0 380 300" role="img" aria-label="Feedback loop: choose what to practice, the environment returns an outcome, feedback carries the error back, the learner updates, repeated N times."></svg>
    <div class="xl-right">
      <div class="xl-chart" data-k="wrap">
        <svg data-k="chart" role="img" aria-label="Skill against attempts, log scale"></svg>
      </div>
      <div class="xl-meta">
        <span>Attempts, log scale</span>
        <span data-k="hint">&nbsp;</span>
      </div>
    </div>
  </div>

  <div class="xl-ctrls">
    <div class="xl-c" data-el="1">
      <span class="xl-lbl"><span class="xl-n">1</span><label for="xl-s1">Attempts</label></span>
      <span class="xl-v" data-v="1"></span>
      <button class="xl-x" type="button" data-rm="1" aria-label="Remove repeated attempts">Remove</button>
      <input type="range" id="xl-s1" min="1" max="4" step="0.01" value="4" aria-label="Number of attempts, log scale">
    </div>
    <div class="xl-c" data-el="2">
      <span class="xl-lbl"><span class="xl-n">2</span><label for="xl-s2">Valid environment</label></span>
      <span class="xl-v" data-v="2"></span>
      <button class="xl-x" type="button" data-rm="2" aria-label="Remove a valid environment">Remove</button>
      <input type="range" id="xl-s2" min="0" max="1" step="0.01" value="0.85" aria-label="Validity, learnable share of each outcome">
    </div>
    <div class="xl-c" data-el="3">
      <span class="xl-lbl"><span class="xl-n">3</span><label for="xl-s3">Timely feedback</label></span>
      <span class="xl-v" data-v="3"></span>
      <button class="xl-x" type="button" data-rm="3" aria-label="Remove timely feedback">Remove</button>
      <input type="range" id="xl-s3" min="-1" max="8" step="0.01" value="0" aria-label="Feedback delay, log scale">
    </div>
    <div class="xl-c" data-el="4">
      <span class="xl-lbl"><span class="xl-n">4</span><label for="xl-s4">Deliberate practice</label></span>
      <span class="xl-v" data-v="4"></span>
      <button class="xl-x" type="button" data-rm="4" aria-label="Remove deliberate practice">Remove</button>
      <input type="range" id="xl-s4" min="-4" max="2" step="0.05" value="2" aria-label="Practice focus, comfort zone to edge of ability">
    </div>
  </div>

  <div class="xl-foot">
    <details>
      <summary>How the model works</summary>
      <div class="xl-math">
        <p>32 situation types, each with a true answer <var>s<sub>k</sub></var>. Each attempt picks <var>k</var> with <var>p<sub>k</sub></var> ∝ (error<sub><var>k</var></sub>)<sup><var>α</var></sup>, predicts <var>w<sub>k</sub></var>, sees <var>y</var> = <var>s<sub>k</sub></var> + noise, and applies <var>w</var> ← <var>w</var> + <var>μ</var>(<var>y</var> − <var>w</var>). With probability 1 − <var>m</var> the delay makes it credit the wrong situation, where <var>m</var> = 1/(1 + delay/1 week). <var>V</var> is the learnable share of each outcome. For even practice:</p>
        <div class="xl-eq"><var>R</var>²(<var>n</var>) ≈ <var>V</var> · [1 − (1 − <var>m</var>(1 − (1 − <var>μ</var>/<var>K</var>)<sup><var>n</var></sup>))²]</div>
        <ul>
          <li><b>1</b> <var>n</var> = 0: nothing learned yet.</li>
          <li><b>2</b> <var>V</var> = 0: the ceiling is zero, and fitting noise lands slightly below chance.</li>
          <li><b>3</b> <var>m</var> = 0: every update hits the wrong situation, so <var>w</var> → <var>m</var>·<var>s</var> = 0.</li>
          <li><b>4</b> comfort practice (<var>α</var> &lt; 0) starves the high-error situations, so they never improve.</li>
        </ul>
        <div class="xl-tbl"><table data-k="table"><thead><tr><th>attempts</th><th>skill</th></tr></thead><tbody></tbody></table></div>
      </div>
    </details>
    <button class="xl-x" type="button" data-k="restore">Reset</button>
  </div>
</div>

<script>
(() => {
  const root = document.getElementById('xl');
  const q = k => root.querySelector(`[data-k="${k}"]`);

  // ---------- simulation ----------
  const K = 32, MU = 0.03, LAM = 0.3, EPS = 0.05, NMAX = 10000, SEEDS = 10, TAU = 7 * 86400;
  const CK = (() => { const c = []; for (let i = 0; i <= 100; i++) c.push(Math.round(Math.pow(10, 4 * i / 100))); return [...new Set(c)]; })();
  function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function gauss(r) { let u = 0; while (u === 0) u = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }
  const Z = [];
  for (let sd = 0; sd < SEEDS; sd++) {
    const r0 = rng(1000 + sd); let z = [];
    for (let k = 0; k < K; k++) z.push(gauss(r0));
    const mean = z.reduce((a, b) => a + b) / K; z = z.map(x => x - mean);
    const sdev = Math.sqrt(z.reduce((a, b) => a + b * b, 0) / K); Z.push(z.map(x => x / sdev));
  }
  function simulate({ N, V, m, alpha }) {
    const pts = [...new Set([...CK.filter(t => t <= N), N])].sort((a, b) => a - b);
    const sum = new Float64Array(pts.length), sn = Math.sqrt(1 - V), sv = Math.sqrt(V);
    const w = new Float64Array(K), e = new Float64Array(K), qq = new Float64Array(K);
    for (let sd = 0; sd < SEEDS; sd++) {
      const s = Z[sd].map(x => sv * x); w.fill(0); e.fill(1);
      let qs = 0; for (let k = 0; k < K; k++) { qq[k] = Math.pow(e[k] + EPS, alpha); qs += qq[k]; }
      let err = 0; for (let k = 0; k < K; k++) err += s[k] * s[k];
      const r = rng(77 + sd * 13); let ci = 0;
      for (let t = 1; t <= N; t++) {
        let u = r() * qs, k = 0; for (; k < K - 1; k++) { u -= qq[k]; if (u <= 0) break; }
        const y = s[k] + sn * gauss(r);
        const j = r() < m ? k : Math.floor(r() * K);
        const pe = y - w[j], before = s[j] - w[j];
        w[j] += MU * pe;
        const after = s[j] - w[j];
        err += after * after - before * before;
        e[j] = (1 - LAM) * e[j] + LAM * pe * pe;
        qs -= qq[j]; qq[j] = Math.pow(e[j] + EPS, alpha); qs += qq[j];
        if (pts[ci] === t) { sum[ci] += V - err / K; ci++; }
      }
    }
    return pts.map((t, i) => [t, sum[i] / SEEDS]);
  }

  // ---------- parameters ----------
  const credit = x => 1 / (1 + Math.pow(10, x) / TAU);
  const FULL = { n: 4, V: 0.85, d: 0, a: 2 };
  const KNOCK = { 1: { n: Math.log10(50) }, 2: { V: 0 }, 3: { d: Math.log10(365 * 86400) }, 4: { a: -4 } };
  const keyOf = { 1: 'n', 2: 'V', 3: 'd', 4: 'a' };
  const NAMES = { 1: 'attempts', 2: 'validity', 3: 'feedback', 4: 'practice' };
  const toSim = p => ({ N: Math.round(Math.pow(10, p.n)), V: p.V, m: credit(p.d), alpha: p.a });
  const health = p => ({ 1: Math.min(1, Math.max(0, (p.n - 1) / (Math.log10(3000) - 1))), 2: Math.min(1, p.V / FULL.V), 3: credit(p.d), 4: (p.a + 4) / 6 });
  const WEAK = 0.35;
  const fmtN = n => n.toLocaleString('en-US');
  const fmtR = v => (v < 0 && v > -0.005 ? 0 : v).toFixed(2);
  function fmtDelay(x) {
    const s = Math.pow(10, x);
    if (s < 1) return '<1 s';
    const units = [[365 * 86400, 'yr'], [30 * 86400, 'mo'], [7 * 86400, 'wk'], [86400, 'day'], [3600, 'hr'], [60, 'min'], [1, 's']];
    for (const [u, name] of units) if (s >= u) { const v = s / u; return `${v < 10 ? Math.round(v * 10) / 10 : Math.round(v)} ${name}`; }
  }

  let P = { ...FULL };
  let cur = simulate(toSim(FULL));

  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) { const v = attrs[k]; if (typeof v === 'string' && v.startsWith('var(')) n.style.setProperty(k, v); else n.setAttribute(k, v); } parent && parent.appendChild(n); return n; };

  // ---------- loop diagram ----------
  const loop = q('loop');
  const CX = 190, CY = 150, RX = 122, RY = 104, NW = 136, NH = 48;
  const ringPath = `M ${CX} ${CY - RY} A ${RX} ${RY} 0 1 1 ${CX} ${CY + RY} A ${RX} ${RY} 0 1 1 ${CX} ${CY - RY} Z`;
  el('path', { d: ringPath, class: 'ring' }, loop);
  ['prediction ŷ', 'outcome y', 'error y − ŷ', 'updated model w'].forEach((label, i) => {
    const th = [-45, 45, 135, 225][i] * Math.PI / 180;
    const x = CX + RX * Math.cos(th), y = CY + RY * Math.sin(th);
    const ang = Math.atan2(RY * Math.cos(th), -RX * Math.sin(th)) * 180 / Math.PI;
    el('path', { d: 'M 6 0 L -5 -5 L -5 5 Z', class: 'arrow', transform: `translate(${x} ${y}) rotate(${ang})` }, loop);
    const right = Math.cos(th) > 0, below = Math.sin(th) > 0;
    const t = el('text', { x: x + (right ? 9 : -9), y: y + (below ? 16 : -8), class: 'edge-label', 'text-anchor': right ? 'start' : 'end' }, loop);
    t.textContent = label;
  });
  const pulse = el('circle', { r: 5, class: 'pulse' }, loop);
  el('animateMotion', { dur: '5s', repeatCount: 'indefinite', path: ringPath }, pulse);
  const badge = (parent, x, y, n) => { const b = el('g', { class: 'badge', transform: `translate(${x} ${y})` }, parent); el('circle', { r: 9 }, b); const t = el('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central', y: 0.5 }, b); t.textContent = n; };
  const nodes = {};
  [
    { id: 4, x: CX, y: CY - RY, title: 'Choose practice' },
    { id: 2, x: CX + RX, y: CY, title: 'Environment' },
    { id: 3, x: CX, y: CY + RY, title: 'Feedback' },
    { id: 0, x: CX - RX, y: CY, title: 'Learner updates' },
  ].forEach(n => {
    const g = el('g', { class: 'node', transform: `translate(${Math.min(Math.max(n.x - NW / 2, 2), 380 - NW - 2)} ${n.y - NH / 2})` }, loop);
    el('rect', { width: NW, height: NH, rx: 7 }, g);
    const tx = n.id ? 29 : 10;
    if (n.id) badge(g, 15, 17, n.id);
    const t = el('text', { x: tx, y: 21, class: 't' }, g); t.textContent = n.title;
    const v = el('text', { x: tx, y: 37, class: 'v' }, g);
    const wt = el('text', { x: NW - 7, y: 11, class: 'weak-tag', 'text-anchor': 'end' }, g);
    nodes[n.id] = { g, v, wt };
  });
  nodes[0].v.textContent = 'w ← w + μ(y − ŷ)';
  const center = el('g', { class: 'center' }, loop);
  badge(center, CX, CY - 30, 1);
  const count = el('text', { x: CX, y: CY + 8, class: 'count', 'text-anchor': 'middle' }, center);
  const countSub = el('text', { x: CX, y: CY + 25, class: 'count-sub', 'text-anchor': 'middle' }, center);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motion = () => { try { reduced.matches ? loop.pauseAnimations() : loop.unpauseAnimations(); } catch (_) {} };
  motion(); reduced.addEventListener && reduced.addEventListener('change', motion);

  // ---------- chart ----------
  const svg = q('chart'), wrap = q('wrap');
  const Y0 = -0.1, Y1 = 1;
  function draw() {
    const width = Math.max(260, Math.floor(wrap.clientWidth));
    const height = Math.round(Math.min(250, Math.max(180, width * 0.62)));
    svg.textContent = ''; svg.setAttribute('viewBox', `0 0 ${width} ${height}`); svg.setAttribute('height', height);
    const M = { l: 44, r: 48, t: 8, b: 20 }, iw = width - M.l - M.r, ih = height - M.t - M.b;
    const x = n => M.l + Math.log10(n) / 4 * iw, y = v => M.t + (1 - (Math.max(Y0, v) - Y0) / (Y1 - Y0)) * ih;
    const txt = (s, a) => { const t = el('text', Object.assign({ 'font-size': 10, 'font-family': 'var(--xl-mono)', fill: 'var(--xl-muted)' }, a), svg); t.textContent = s; return t; };
    [0.5, 1].forEach(v => el('line', { x1: M.l, x2: M.l + iw, y1: y(v), y2: y(v), stroke: 'var(--xl-rule)', 'stroke-width': 1 }, svg));
    [0, 0.5, 1].forEach(v => txt(v.toFixed(1), { x: M.l - 6, y: y(v) + 3.5, 'text-anchor': 'end' }));
    txt('Skill (R²)', { x: 0, y: 0, 'text-anchor': 'middle', 'font-family': 'system-ui, sans-serif', 'font-size': 11, fill: 'var(--xl-ink-2)', transform: `translate(11 ${M.t + ih / 2}) rotate(-90)` });
    [1, 10, 100, 1000, 10000].forEach(n => txt(n >= 1000 ? n / 1000 + 'K' : String(n), { x: x(n), y: height - 5, 'text-anchor': n === 1 ? 'start' : n === 10000 ? 'end' : 'middle' }));
    el('line', { x1: M.l, x2: M.l + iw, y1: y(0), y2: y(0), stroke: 'var(--xl-axis)', 'stroke-width': 1 }, svg);
    txt('chance', { x: M.l + iw + 5, y: y(0) + 3.5, 'font-family': 'system-ui, sans-serif' });
    if (P.V > 0.005) {
      el('line', { x1: M.l, x2: M.l + iw, y1: y(P.V), y2: y(P.V), stroke: 'var(--xl-ink-2)', 'stroke-opacity': 0.55, 'stroke-width': 1, 'stroke-dasharray': '2 3' }, svg);
      txt('ceiling', { x: M.l + iw + 5, y: y(P.V) + 3.5, 'font-family': 'system-ui, sans-serif', fill: 'var(--xl-ink-2)' });
    }
    const path = pts => pts.map((p, i) => `${i ? 'L' : 'M'}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join('');
    const last = cur[cur.length - 1], N = last[0];
    el('path', { d: path(cur) + `L${x(N).toFixed(1)},${y(0).toFixed(1)}L${x(1).toFixed(1)},${y(0).toFixed(1)}Z`, fill: 'var(--xl-area)', stroke: 'none' }, svg);
    el('path', { d: path(cur), fill: 'none', stroke: 'var(--xl-s1)', 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);
    if (N < NMAX) {
      el('line', { x1: x(N), x2: x(N), y1: M.t, y2: M.t + ih, stroke: 'var(--xl-ink-2)', 'stroke-opacity': 0.45, 'stroke-width': 1 }, svg);
      const right = x(N) < M.l + iw - 60;
      txt(`stops at ${fmtN(N)}`, { x: x(N) + (right ? 5 : -5), y: M.t + 9, 'text-anchor': right ? 'start' : 'end', 'font-family': 'system-ui, sans-serif', fill: 'var(--xl-ink-2)' });
    }
    el('circle', { cx: x(N), cy: y(last[1]), r: 4, fill: 'var(--xl-s1)', stroke: 'var(--xl-surface)', 'stroke-width': 2 }, svg);
    const vl = txt(fmtR(last[1]), { x: x(N) + 7, y: y(last[1]) + 3.5, fill: 'var(--xl-ink)', 'font-weight': 600, 'font-size': 11 });
    if (P.V > 0.005 && Math.abs(y(last[1]) - y(P.V)) < 12) vl.setAttribute('y', y(last[1]) + (last[1] < P.V ? 14 : -5));
    else if (Math.abs(y(last[1]) - y(0)) < 12) vl.setAttribute('y', y(0) - 6);
  }

  // ---------- readouts ----------
  const ICON = {
    good: '<svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7" style="fill:var(--xl-good)"/><path d="M4 7.2l2 2 4-4.4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    warning: '<svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7" style="fill:var(--xl-warning)"/><path d="M4 7h6" stroke="#3a2a00" stroke-width="1.8" stroke-linecap="round"/></svg>',
    serious: '<svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1l6.5 11.5h-13z" style="fill:var(--xl-serious)"/><path d="M7 5.2v3.4" stroke="#3a1400" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="10.4" r="0.9" fill="#3a1400"/></svg>',
    critical: '<svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7" style="fill:var(--xl-critical)"/><path d="M4.6 4.6l4.8 4.8M9.4 4.6l-4.8 4.8" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const verdict = r => r >= 0.7 ? ['good', 'Expert'] : r >= 0.35 ? ['warning', 'Competent'] : r >= 0.05 ? ['serious', 'Barely above chance'] : ['critical', 'No better than chance'];

  let tmr = null;
  function hint() {
    clearTimeout(tmr);
    const out = q('hint'); out.style.opacity = 0.5;
    tmr = setTimeout(() => {
      const base = cur[cur.length - 1][1];
      const changed = [1, 2, 3, 4].filter(i => P[keyOf[i]] !== FULL[keyOf[i]]);
      let best = null, gain = 0;
      for (const i of changed) {
        const res = simulate(toSim({ ...P, [keyOf[i]]: FULL[keyOf[i]] }));
        const g = res[res.length - 1][1] - base; if (g > gain) { gain = g; best = i; }
      }
      out.style.opacity = 1;
      out.textContent = !changed.length ? 'Drag a slider left, or press Remove' : best && gain > 0.02 ? `Biggest fix: ${best} (${NAMES[best]}) +${gain.toFixed(2)}` : 'No single fix helps much';
    }, 160);
  }

  function render() {
    const sim = toSim(P), h = health(P), final = cur[cur.length - 1][1];
    q('skill').textContent = fmtR(final);
    const [lvl, lab] = verdict(final), pill = q('verdict');
    pill.innerHTML = ICON[lvl]; pill.append(lab);
    nodes[4].v.textContent = `α = ${P.a.toFixed(1)} · ${P.a < -0.5 ? 'comfort' : P.a > 0.5 ? 'edge' : 'even'}`;
    nodes[2].v.textContent = `V = ${P.V.toFixed(2)}`;
    nodes[3].v.textContent = `${fmtDelay(P.d)} · m = ${sim.m.toFixed(2)}`;
    [2, 3, 4].forEach(i => { const weak = h[i] < WEAK; nodes[i].g.classList.toggle('weak', weak); nodes[i].wt.textContent = weak ? 'WEAK' : ''; });
    count.textContent = '×' + fmtN(sim.N);
    center.classList.toggle('weak', h[1] < WEAK);
    countSub.textContent = h[1] < WEAK ? 'attempts · too few' : 'attempts';
    const vals = { 1: fmtN(sim.N), 2: `V = ${P.V.toFixed(2)}`, 3: `${fmtDelay(P.d)} · m = ${sim.m.toFixed(2)}`, 4: `α = ${P.a.toFixed(1)}` };
    for (const i of [1, 2, 3, 4]) {
      root.querySelector(`[data-v="${i}"]`).textContent = vals[i];
      root.querySelector(`[data-el="${i}"]`).classList.toggle('weak', h[i] < WEAK);
    }
    const tb = q('table').tBodies[0]; tb.textContent = '';
    [10, 100, 1000, 10000].forEach(n => {
      const c = cur.find(p => p[0] >= n), tr = tb.insertRow();
      [fmtN(n), c ? fmtR(c[1]) : 'stopped'].forEach(v => { tr.insertCell().textContent = v; });
    });
    draw(); hint();
  }

  let raf = null;
  const update = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = null; cur = simulate(toSim(P)); render(); }); };
  const sync = () => { for (const i of [1, 2, 3, 4]) document.getElementById('xl-s' + i).value = P[keyOf[i]]; };
  // Remove toggles to Reset, which puts that element back at full strength.
  const LONG = { 1: 'repeated attempts', 2: 'a valid environment', 3: 'timely feedback', 4: 'deliberate practice' };
  const saved = {};
  const setBtn = i => {
    const b = root.querySelector(`[data-rm="${i}"]`), on = i in saved;
    b.textContent = on ? 'Reset' : 'Remove';
    b.setAttribute('aria-label', `${on ? 'Reset' : 'Remove'} ${LONG[i]}`);
  };
  for (const i of [1, 2, 3, 4]) document.getElementById('xl-s' + i).addEventListener('input', ev => {
    P[keyOf[i]] = parseFloat(ev.target.value);
    if (i in saved) { delete saved[i]; setBtn(i); }
    update();
  });
  root.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
    const i = +b.dataset.rm, k = keyOf[i];
    if (i in saved) { P[k] = FULL[k]; delete saved[i]; }
    else { saved[i] = true; P[k] = KNOCK[i][k]; }
    setBtn(i); sync(); update();
  }));
  q('restore').addEventListener('click', () => {
    P = { ...FULL };
    for (const i of [1, 2, 3, 4]) { delete saved[i]; setBtn(i); }
    sync(); update();
  });

  sync(); render();
  new ResizeObserver(() => draw()).observe(wrap);
})();
</script>
</div>

## References

- [The Expert Myth / The 4 things it takes to be an expert (Veritasium)](https://www.youtube.com/watch?v=5eW6Eagr9XA)
