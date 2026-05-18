---
layout: post
title: "Two Lenses on Research Contributions"
date: 2026-05-17
last_updated: 2026-05-17
author:
- Blake Edwards
tags: [research, epistemics, evaluation, science]
permalink: /wiki/evaluating-research-contributions
show_on_wiki: true
show_on_secret_wiki: false
---

Two complementary frameworks for asking "how good is this paper?" The first is the ladder most communities tacitly use. The second is a cube that recovers the contributions the ladder undervalues.

## Lens 1: The six-level ladder

1. **SOTA-beating novel method.** New primitive that dominates on the metrics the field already tracks.
2. **Novel method with different trade-offs.** New primitive that doesn't dominate, but shines in a regime nobody was optimizing.
3. **Novel application to new domain.** Existing tools wired into an unfamiliar context where they unlock something new.
4. **Systematic comparison / ablations.** Maps the shape of the existing frontier without moving it.
5. **Engineering integration.** Composes existing research into a working pipeline that turns prior papers into a subroutine.
6. **Replication / validation / extension.** Confirms or stress-tests existing structure to harden what the field already believes.

How "good" a contribution looks depends on what the audience values. A leaderboard-driven ML venue weights level 1 heavily; a clinical-evidence community weights level 6 heavily; a systems conference weights level 5. The *default* community reflex, though, is to rank by number — lower is more prestigious, higher is more dismissable. That ranking is wrong often enough to be worth questioning.

A few quick examples:

- AlphaFold's original Nature paper — level 1.
- Mixture-of-Experts as an alternative to dense scaling — level 2 (it loses on raw quality-per-parameter for years before its trade-offs become the point).
- Transformers applied to protein sequences — level 3.
- The Chinchilla scaling-law paper — level 4 (no new method, just a careful map of compute–data trade-offs).
- PyTorch, or the original Hugging Face Transformers library — level 5.
- The Reproducibility in ML papers re-running prior RL results — level 6.

## Lens 2: The three-axis cube

The ladder is one-dimensional, which is exactly why it loses information. A contribution can also be located in a 3D space:

- **Genesis** — how is the contribution made? *Extend* (add a new primitive), *Combine* (rewire existing primitives), or *Sharpen* (tighten posteriors on what already exists).
- **Dynamics** — how does it propagate? *Breakthrough* (singular discovery event), *Iteration* (slow accretion), *Coordination* (precise high-dimensional assembly), or *Distribution* (community-wide spread of confidence).
- **Affordance** — what does it give the field? *Dominate* (push the existing frontier outward), *Add dimension* (reveal an axis nobody was measuring), *Trade off* (reveal the frontier's shape), or *Collapse dimension* (make something hard tractable as a subroutine).

## How the lenses fit together

Each of the six levels is a *cell* in the cube, not a rung on the ladder:

| Level | Genesis | Dynamics | Affordance |
|---|---|---|---|
| 1. SOTA-beating method | Extend | Breakthrough | Dominate |
| 2. Different trade-offs | Extend | Iteration | Add dimension |
| 3. New-domain application | Combine | Coordination | Add dimension |
| 4. Systematic comparison | Sharpen | Iteration | Trade off |
| 5. Engineering integration | Combine | Coordination | Collapse dimension |
| 6. Replication / validation | Sharpen | Distribution | Dominate (marginally) |

Reading the ladder as an Axis-1 projection makes its blind spots obvious. The "combine × coordination × collapse-dimension" cell (level 5) and the "sharpen × iteration × reveal-frontier-shape" cell (level 4) are the ones the ladder systematically undervalues, and they are exactly the cells that make the others cheaper: level 4 maps the frontier so level 2 knows where to add dimensions; level 5 compresses the library so level 3 can apply it somewhere new; level 6 prunes dead primitives so level 1 doesn't build on false ground.

A few examples re-read through the cube:

- **Chinchilla** — Sharpen × Iteration × Trade off. A "merely" empirical paper that rewrote what the next generation of frontier models optimized for. The ladder calls it a 4; the cube shows it changed what the field measures.
- **PyTorch** — Combine × Coordination × Collapse dimension. The ladder calls it a 5; the cube shows it collapsed an entire dimension of the research-engineering frontier, which is why every paper above it on the ladder got cheaper to write.
- **The replication wave in social psychology (2011–2015)** — Sharpen × Distribution × Dominate. The ladder calls it a 6; the cube shows it propagated *negative* confidence across the field's generative model, which was arguably the highest-leverage contribution of the decade for that community.

The mental model: don't climb toward 1, cover the cube. The healthiest research programs aren't the ones racing up the ladder — they're the ones whose contributions, taken together, fill enough cells that each one makes the others cheaper.
