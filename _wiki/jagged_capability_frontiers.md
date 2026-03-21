---
layout: post
title: "Predicting the Jagged Capability Frontiers of AI"
date: 2026-03-21
last_updated: 2026-03-21
author:
- Blake Edwards
tags: [AI, capability frontiers, control theory, system identification, automation]
permalink: /wiki/jagged-capability-frontiers
show_on_wiki: true
pinned: true
show_on_secret_wiki: false
---

The "jagged frontier" of AI—LLMs write legal briefs but can't count letters—looks unpredictable. I think six dimensions of the task predict it.

1. **Observability** — is the causal state identifiable from measurements, or are there fundamentally indistinguishable internal states?
2. **Controllability / excitability** — can the learner's actions persistently excite all modes of the system to identify its dynamics?
3. **Verifiability** — can correctness be checked cheaply and automatically?
4. **Cost & risk** — what does one rollout cost? (fractions of a cent vs. lives)
5. **Time** — how long per trial, and is it compressible or computationally irreducible?
6. **Value & concentration** — how much value, and can enough be captured or promised to fund the R&D?

| Task | Obs. | Ctrl. | Verif. | Cost | Time | Value |
|---|---|---|---|---|---|---|
| CUDA kernel optimization | Full | Full | Auto | ≈0 | ms | High, concentrated |
| Write code | Full | Full | Auto | ≈0 | sec | Very high, broad |
| Math proof | Full | Full | Auto | ≈0 | sec | Moderate, diffuse |
| Fold laundry | Low | Poor | Hard | Low | Irreducible | Fragmented |
| Put away dishes | Med | Med | Med | Low | Irreducible | Fragmented |
| Land a plane | Med | High actuators, unexcitable atmosphere | Hard | Extreme | Irreducible + reality gap | High, concentrated |

The top three tasks sweep dimensions 1–5: full observability, full excitability, automatic verification, near-zero cost, millisecond iteration. They differ only on dimension 6—math proofs have the same technical profile as code but a fraction of the (human recognized/predicted) economic pull, which is why they lag. The bottom three fail on multiple technical dimensions simultaneously, and the physical ones are irreducibly slow. Landing is the interesting hybrid: precise actuators, but the *environment* isn't excitable (you can't intervene on a thunderstorm), and the cost of failure is catastrophic—yet the concentrated economic value has driven billions into simulators that synthetically improve cost, risk, and time.

The frontier is jagged in task space, smooth in dimension space. To move it, find the bottleneck dimension and attack that.
