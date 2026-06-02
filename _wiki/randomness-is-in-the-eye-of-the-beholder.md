---
layout: post
title: "Randomness Is in the Eye of the Beholder"
date: 2026-06-02
last_updated: 2026-06-02
author:
- Blake Edwards
tags: [probability, algorithmic information theory, complexity, epistemics]
permalink: /wiki/randomness-is-in-the-eye-of-the-beholder
show_on_wiki: false
show_on_secret_wiki: true
draft: true
---

> 🚧 **Work in progress** — this is an unfinished draft and may change.

We talk about randomness as if it were a property of things — a *random* sequence, a *random* event, a *random* variable. I want to argue that this is a category error. Randomness is not a property of an object. It is a property of the *relationship* between an object and an observer: specifically, the gap between the object and the best model the observer can bring to bear on it. Move the observer, and the randomness moves with them.

The same sequence of bits can be perfectly random to one observer and perfectly predictable to another, with no change to the bits. Once you see this clearly in one domain, you start seeing it everywhere — in algorithmic information theory, in cryptography, in chaos, in Bayesian probability, in thermodynamics. They are all telling the same story.

## Algorithmic information theory

The cleanest place to start is Kolmogorov complexity. The complexity $K(x)$ of a string $x$ is the length of the shortest program that outputs $x$:

$$
K(x) = \min_{p} \{\, |p| : U(p) = x \,\}
$$

A string is called *algorithmically random* if it is incompressible — if $K(x) \approx \|x\|$, so there is no description of $x$ shorter than just writing it out. Randomness, on this view, is the absence of exploitable structure.

But notice the hidden parameter: $U$, the universal machine. Complexity is only defined relative to a description language. The invariance theorem softens this — any two universal machines agree on $K$ up to an additive constant — but that constant can be enormous, and for any finite string you can rig a machine that compresses it to a single bit. More importantly, *finding* the short program is uncomputable. So whether a string looks random to **you** depends on which patterns your particular model class can recognize. The digits of $\pi$ are incompressible to a pattern-matcher that has never heard of $\pi$, and trivially compressible to one that has. Same digits. Different beholder.

## Pseudorandomness: randomness relative to compute

Cryptography makes the observer-relativity quantitative and unavoidable. A pseudorandom generator stretches a short seed into a long output that *no efficient algorithm can distinguish* from true randomness. The formal definition of randomness here is **computational indistinguishability**: a distribution is random if every polynomial-time observer fails to tell it apart from uniform with non-negligible advantage.

This is the punchline made explicit. The output of a good PRNG is, to a computationally bounded observer, indistinguishable from a fair coin. To an observer who holds the seed, it is a constant. Nothing about the bit-stream changed; the only thing that changed is the resources and information the observer brings. Randomness is being defined *as* a fact about the observer — their computational budget — rather than the sequence.

## Determinism that looks like noise

A logistic map $x_{n+1} = r x_n (1 - x_n)$ at $r = 4$ is fully deterministic. Given the seed, every future value is fixed. Yet its trajectory passes essentially every statistical test for randomness, and because it is chaotic — sensitive to initial conditions — any observer with finite precision on $x_0$ loses all predictive power after a handful of steps. The randomness an observer sees is exactly their uncertainty about the initial condition, amplified by the dynamics. The system isn't random; the *observer's grip on it* is finite, and chaos magnifies that finitude into apparent noise.

This is the general shape: a deterministic generator plus a bounded observer manufactures something operationally indistinguishable from chance.

## Probability as a state of knowledge

The Bayesian tradition says this outright. To a subjectivist, probability is not a property of the world but a description of an agent's information. De Finetti's slogan — "probability does not exist" — means there is no objective chance out there to be measured; there is only the betting structure of someone reasoning under uncertainty. A coin already flipped and covered by my hand is, to me, a $50/50$ event; to a camera that saw it land, it is settled. The coin has one state. The probability lives in the observer.

Jaynes pushed this furthest: probabilities are the unique consistent extension of logic to incomplete information. Randomness, on this account, is just the name we give to the part of a system our model does not pin down. Enlarge the model — condition on more — and the randomness shrinks.

## Even entropy is observer-relative

The thermodynamic version is the most surprising, because entropy feels like it should be objective. But entropy is defined relative to a choice of *macrovariables* — the coarse-grained quantities (pressure, temperature, volume) an observer chooses to track. The microstate is what it is; the entropy is a function of which distinctions the observer declines to make. Maxwell's demon and the Gibbs mixing paradox both dissolve once you accept this: the "disorder" of a system is the information the observer has chosen, or been forced, to discard. Two observers with different macrovariables assign different entropies to the identical physical state.

## The one possible exception, and a caveat

The honest place to stop is quantum mechanics, which is the leading candidate for randomness that is *not* in the eye of the beholder — irreducible, observer-independent chance baked into the world. Bell's theorem rules out the easy escape of local hidden variables, so the quantum dice may be genuinely fair all the way down.

But even here the beholder refuses to fully leave the stage. The outcome is random only relative to a *choice of measurement basis*; decoherence and the measurement problem make the boundary between system and observer the very thing in question; and interpretations like Everett relocate the apparent randomness back into self-locating uncertainty — which observer-branch am I? — rather than objective chance. I don't claim to settle this. I only note that the one domain where randomness might be intrinsic is also the one where the role of the observer is most contested.

## So what

If randomness is the gap between a system and your model of it, then "this is random" is never the end of an inquiry — it is a statement about *you*. It says: my current model class, with my current information and my current compute, cannot compress this further. That is a fact worth knowing, but it is a fact about the modeler, not a verdict on the world.

The practical upshot is an attitude. When something looks random — market noise, a stubborn residual in a fit, the failures of a system you don't understand — the question is not "is this really random?" but "*for whom, and with what resources, would this stop being random?*" Often the structure is there, waiting for a better beholder. Sometimes the cheapest move is to become one.
