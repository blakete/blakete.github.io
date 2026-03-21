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
5. **Time** — how long per trial? Sim can compress bulk training time, but closing the sim-to-real gap still requires incompressible real-world episodes—and collecting those is where the costs of the other dimensions (poor observability, limited excitability, expensive rollouts) actually bite.
6. **Value & concentration** — how much value, and can enough be captured or promised to fund the R&D?

| Task | Obs. | Ctrl. | Verif. | Cost | Time | Value |
|---|---|---|---|---|---|---|
| CUDA kernel optimization | Full | Full | Auto | ≈0 | ms | High, concentrated |
| Write code | Full | Full | Auto | ≈0 | sec | Very high, broad |
| Math proof | Full | Full | Auto | ≈0 | sec | Moderate, diffuse |
| Fold laundry | Low | Poor | Hard | Low | Sim-compressible; sim-to-real gap is the bottleneck | Fragmented |
| Put away dishes | Med | Med | Med | Low | Sim-compressible; smaller gap (rigid bodies) | Fragmented |
| Land a plane | Med | High actuators, unexcitable atmosphere | Hard | Extreme | Sim-compressible; mature sims but residual gap | High, concentrated |

The top three tasks sweep dimensions 1–5: full observability, full excitability, automatic verification, near-zero cost, millisecond iteration. They differ only on dimension 6—math proofs have the same technical profile as code but a fraction of the economic pull, which is why they lag. The bottom three fail on multiple technical dimensions simultaneously. Crucially, none of them are irreducibly slow—faster-than-real-time sim with decent zero-shot transfer exists for all three—but sim only compresses the bulk of training. Closing the residual sim-to-real gap requires real-world episodes that run at real-time, under the actual observability and controllability constraints of the physical task, at the actual cost and risk per rollout. The incompressible real episodes are the long pole, and they're expensive precisely because the other dimensions are bad. Landing is the interesting hybrid: precise actuators, but the *environment* isn't excitable (you can't intervene on a thunderstorm), and the cost of failure is catastrophic—yet the concentrated economic value has driven billions into simulators that compress the time and cost dimensions, making the remaining gap (fidelity, edge-case weather) the binding constraint.

The frontier is jagged in task space, smooth in dimension space. To move it, find the bottleneck dimension and attack that.
