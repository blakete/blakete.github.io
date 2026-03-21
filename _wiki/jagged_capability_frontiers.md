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

People are often surprised by which tasks AI systems master first. Large language models can write passable legal briefs but struggle to count the letters in a word. Diffusion models generate photorealistic faces but hallucinate fingers. This unevenness—what Ethan Mollick calls the "jagged frontier"—is usually treated as mysterious or unpredictable. I think it is largely predictable, once you look at the right dimensions of the task rather than its surface-level difficulty.

## The dimensions that matter

Whether a task is easy or hard *for an AI to get good at* has less to do with how impressive it looks to a human and more to do with the structure of the learning problem. Five properties seem to do most of the explanatory work. The first two are borrowed from control theory, where they have precise technical meanings that matter here.

1. **Observability.** In the control-theoretic sense: can the internal state of the system be reconstructed from available measurements? This is not just "can the AI see stuff"—it is a question about whether the task's underlying causal dynamics are *identifiable* from the data the learner has access to. A software system is essentially fully observable: the complete state is the source code and the machine's memory, both of which can be inspected at arbitrary resolution. A crumpled shirt in a laundry pile has high-dimensional deformable state, much of which is occluded and can only be partially inferred from camera images. If the system is not observable, there exist internal states that are indistinguishable from the outside, and no amount of data will disambiguate them. The learner hits a fundamental ceiling.

2. **Controllability / excitability.** Can the learner's actions drive the system through a rich enough set of states to reveal its causal structure? In system identification, this is the requirement of *persistent excitation*: the input signals must be sufficiently varied to excite all modes of the system, otherwise the dynamics are not identifiable from input-output data regardless of how much data you collect. Token emission into a compiler or proof checker is maximally controllable—the agent has complete, deterministic authority over the input and can explore the space at will. A robot gripper manipulating a soft object in a cluttered physical environment has severely limited controllability: many state transitions are physically unreachable, stochastic, or irreversible, and the agent cannot perform the precise interventions needed to isolate causal relationships from confounds.

3. **Verifiability / "rewardability."** Can you cheaply and automatically check whether the output is correct? A compiler tells you unambiguously whether code runs. A proof checker tells you whether a proof is valid. Whether a plane landed *well enough* requires integrating over passenger comfort, structural fatigue, and regulatory standards—none of which produce a clean scalar signal.

4. **Experiment cost and risk.** What does it cost to generate a training sample or rollout? Compiling code costs fractions of a cent. A failed attempt at landing a 737 costs lives.

5. **Experiment time / computational irreducibility.** How long does a single trial take, and can it be parallelized or simulated faster than real-time? CUDA kernel benchmarks run in milliseconds. Folding laundry in the physical world takes real-time seconds per garment with no fast-forward button; some physical processes are fundamentally computationally irreducible.

## The table

The jagged frontier starts to look much less jagged when you score tasks along these axes:

| Task | Observability | Controllability | Verifiability | Cost & Risk | Experiment Time |
|---|---|---|---|---|---|
| Optimize a CUDA kernel | Full — state is source + deterministic hardware counters; dynamics fully identifiable | Full — token emission; agent can explore input space at will (maximally excitable) | Automatic (compile + benchmark) | Negligible | Milliseconds |
| Write compilable code | Full — source + compiler output; complete state visible at arbitrary resolution | Full — token emission; all reachable programs are reachable by intervention | Automatic (compile, run, test) | Negligible | Seconds |
| Write a math proof | Full — formal symbolic state; every step inspectable | Full — token emission; search over proof space is unconstrained | Automatic (proof checker) | Negligible | Seconds |
| Fold laundry | Low — high-dimensional deformable state, heavy occlusion; many internal states indistinguishable from observation | Poor — limited gripper DOF, stochastic contact; cannot persistently excite cloth dynamics | Hard (subjective "neatness") | Low cost, low risk | Real-time, irreducible |
| Put away dishes | Moderate — rigid objects but cluttered, partially occluded | Moderate — rigid grasp is more controllable than soft-body, but placement in clutter limits excitability | Moderate (correct location, unbroken) | Low cost, moderate risk | Real-time, irreducible |
| Land a passenger plane | Moderate — good avionics, but weather/turbulence are partially observable stochastic disturbances | High — flight control surfaces are precise actuators, but the atmosphere is not excitable; you cannot intervene on wind to isolate its causal effect | Hard (multi-objective, safety-critical) | Extreme | Real-time, irreducible; simulation helps but has a reality gap |

The pattern is stark. Tasks where AI is advancing fastest—code generation, formal math, kernel optimization—are tasks where the system's causal dynamics are fully identifiable from available data (observable), where the learner can intervene freely to distinguish causation from correlation (controllable / excitable), where correctness is automatically verifiable, where trials are cheap, and where iteration is fast. Tasks where AI lags are those where one or more of these conditions fails at a *fundamental* level—not due to engineering immaturity, but because the physics or structure of the task imposes hard limits on identifiability, excitability, or feedback bandwidth.

Note the landing case: the actuators are excellent, but the *environment* is not excitable. You cannot intervene on a thunderstorm to run a controlled experiment isolating its causal effect on approach stability. The controllability that matters is not just control of the agent's own body—it is the ability to perform the interventions required to identify the environment's dynamics.

## Why this framework is useful

The standard narrative treats the jagged frontier as evidence that AI capabilities are inherently unpredictable. This table suggests the opposite: the frontier is jagged in *task space*, but it is smooth in *dimension space*. If you can score a new task along these five axes, you can make a reasonable prediction about how tractable it is for current AI paradigms—before anyone tries.

The practical upshot: if you want to accelerate AI capability on a task, don't just throw more compute at it. Ask which dimension is the bottleneck and attack that. Build better simulators (reduce experiment time and cost; make the environment excitable by proxy). Build better verifiers (close the reward loop). Build better sensors (push the observability frontier so more of the causal state is identifiable). The jagged frontier is not a fact of nature; it is a reflection of which learning-theoretic feedback loops we have managed to close—and which ones are closed by the structure of the task itself.
