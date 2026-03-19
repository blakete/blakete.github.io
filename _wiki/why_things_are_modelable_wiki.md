---
layout: post
title: "Why Things Are Modelable"
date: 2026-03-12
last_updated: 2026-03-12
author:
- Blake Edwards
tags: [probability, graphical models, Bayesian networks]
permalink: /wiki/why-things-are-modelable
show_on_wiki: true
pinned: true
show_on_secret_wiki: false
---

There is a fact about the universe so basic that it rarely gets stated: most things have almost nothing to do with most other things. The temperature in this room does not meaningfully depend on the position of a rock on Europa. The voltage across a resistor is not influenced by the tidal dynamics of a distant galaxy. This seems obvious, but it is not logically necessary, and everything we do in science and engineering depends on it.

The question I want to sharpen here is: *what is the precise mathematical condition that makes it possible to isolate a system from the rest of the universe and model it with a finite number of variables?*

## The structure we need

Whenever an engineer draws a block diagram—a box labeled "engine" with a few arrows in and out—they are asserting something strong. They are claiming that the internal state of the engine is conditionally independent of the rest of the world, given the variables at the interface. Fuel flow, air intake, and throttle position go in. Torque and heat come out. Everything else—the weather in Jakarta, the spin state of an electron in Andromeda—is irrelevant, *once you know the interface variables*.

In the language of probabilistic graphical models, this claim has a name: the box's boundary is a **Markov blanket**. Formally, a set of variables $B$ is a Markov blanket for a variable (or set of variables) $X$ if

$$P(X \mid B, W) = P(X \mid B) \quad \forall \; W \notin B \cup X$$

That is, conditioning on $B$ renders $X$ independent of everything else. The blanket "screens off" the interior from the exterior. If you know $B$, the rest of the universe has nothing more to tell you about $X$.

This is the mathematical structure that makes block diagrams valid, experiments controllable, and subsystems identifiable. Without it, you cannot model anything in isolation.

## The problem: exact blankets don't exist

Strictly speaking, no finite set of variables satisfies this condition exactly. Gravity obeys an inverse-square law and extends to infinity. The gravitational field of every mass in the observable universe, however faintly, perturbs every other mass. Electromagnetic fluctuations propagate without bound. In quantum field theory, the Reeh-Schlieder theorem guarantees that spacelike-separated regions of space share nonzero entanglement, even in the vacuum.

So the conditional independence written above is always violated. There is always some residual dependence leaking through any finite boundary. If we take the definition literally, there are no Markov blankets in nature, and therefore—by the argument above—no modelable things.

This is clearly wrong. Things are modelable. We build engines and predict their behavior. So the definition needs amendment.

## The fix: ε-blankets and decay

The resolution is that the residual dependence, while nonzero, is negligible—and it is negligible because of a specific quantitative property of the physical interactions that generate it.

Define an **ε-Markov blanket** as a set $B$ such that

$$I(X ; W \mid B) < \varepsilon \quad \forall \; W \notin B \cup X$$

where $I(\cdot\,;\cdot \mid \cdot)$ is the conditional mutual information. This says: once you condition on $B$, any variable outside it carries less than $\varepsilon$ bits of additional information about $X$. The conditional independence is approximate, not exact, and $\varepsilon$ quantifies the approximation error.

Now the key empirical fact: in our universe, the mutual information between a subsystem and a distant variable, conditioned on an intervening boundary, **decays with distance**—and it decays fast. The rate depends on the interaction:

- **Short-range forces** (van der Waals, nuclear): the coupling itself decays exponentially beyond a characteristic length, so the conditional mutual information falls off as $\sim e^{-r/\lambda}$.
- **Screened long-range forces** (Coulomb in a plasma): Debye screening replaces $1/r$ with a Yukawa potential $e^{-r/\lambda_D}/r$, again giving exponential decay of mutual information.
- **Unscreened long-range forces** (gravity): the coupling decays as $1/r^2$, and the mutual information mediated by it falls at least as $\sim 1/r^4$. This is polynomial, not exponential, but the prefactor is already tiny—gravity is $\sim 10^{40}$ times weaker than electromagnetism—so the residual becomes unmeasurably small at modest distances.
- **Quantum entanglement**: despite the nonlocal correlations permitted by entanglement, the no-signaling theorem ensures that local measurement statistics—the quantities relevant to prediction—remain unaffected. Entanglement entropy between spatially separated regions decays exponentially for massive fields.

In every case, the conditional mutual information $I(X; W \mid B)$ can be made as small as desired by choosing a sufficiently large (but finite) boundary $B$. And because the decay is typically exponential, "sufficiently large" usually means "not much larger than the system itself." A boundary a few correlation lengths wide captures the vast majority of the total mutual information.

## What this buys us

The combination of these two ideas—ε-Markov blankets as the formal object, and fast decay of mutual information as the physical mechanism—is what makes it possible to model things.

The implications cascade:

1. **Factorization.** If the dependency graph is sparse (each variable has bounded degree), the Hammersley-Clifford theorem guarantees that the joint distribution factorizes as a product of local potentials over cliques. The global description decomposes into local pieces.

2. **Modularity.** Factorization means you can study the local pieces independently, up to the interface variables. This is what justifies the block diagram, the controlled experiment, and the notion of a "subsystem."

3. **Coarse-graining.** Because the internal degrees of freedom are screened by the blanket, you can replace them with effective variables (temperature, pressure, torque) without losing predictive power at the boundary. This is the basis of effective field theories, thermodynamics, and engineering lumped-parameter models.

4. **Hierarchy.** ε-blankets nest. A cell has a membrane. An organ is a collection of cells. An organism is a collection of organs. At each level, a new blanket screens off the internal details of the lower level. This recursive structure is possible only because the decay is fast enough that each successive blanket incurs only a small additional ε.

## The counterfactual

It is worth pausing on how contingent this all is. If the fundamental interactions of our universe were long-range and unscreenable—if mutual information decayed only as $1/r$ or slower—then ε-blankets would require boundaries so large that they'd encompass most of the universe before the error became acceptable. Factorization would fail. Subsystems wouldn't decompose. Every model would need to be a model of everything. Science, in the sense of isolating and studying parts of nature, would not be possible.

The fact that we can do science at all is a consequence of a quantitative property of the laws of physics: interactions are either short-range or, if long-range, weak and screenable. This property has no logical necessity. It is a feature of the specific universe we inhabit. And it is, in a precise sense, the deepest reason that "things"—engines, cells, planets, block diagrams—exist as coherent, modelable entities at all.
