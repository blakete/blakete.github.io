---
layout: post
title: "(WIP) On Fundamentally Irreducible Uncertainty"
date: 2025-09-09
last_updated: 2025-09-09
author:
- Blake Edwards
tags: [quantum foundations, probability, epistemic uncertainty, aleatoric uncertainty, machine learning, decision theory]
permalink: /notes/irreducible-uncertainty
hidden_from_wiki: true
hidden_from_secret_wiki: false
---

Time-dependent Schrödinger equation:

$$
i\hbar\,\frac{\partial}{\partial t}\,|\psi(t)\rangle \;=\; \hat H\,|\psi(t)\rangle
$$

where:
- $i$ is the imaginary unit with $i^2=-1$.
- $h$ is Planck’s constant, defined exactly as $6.62607015\times 10^{-34}\ \mathrm{J\cdot s}$ (SI 2019).
- $\hbar$ (“h-bar”) is the reduced Planck constant, $\hbar \equiv h/(2\pi) \approx 1.054571817\times 10^{-34}\ \mathrm{J\cdot s}$.
- $\dfrac{\partial}{\partial t}$ is the time derivative.
- $\lvert \psi(t) \rangle$ is the (normalized) state vector in a Hilbert space; $\langle \psi(t) \mid \psi(t) \rangle = 1$. In position space, $\psi(\mathbf{x},t)=\langle \mathbf{x}\,\mid\,\psi(t)\rangle$.
- $\hat H$ is the (self-adjoint) Hamiltonian operator (the generator of time translations) representing total energy.
  - For a single nonrelativistic particle of mass $m$ in potential $V(\mathbf{x},t)$:
    $$
    \hat H \;=\; \frac{\hat{\mathbf p}^{\,2}}{2m} + V(\hat{\mathbf x},t), 
    \qquad \hat{\mathbf p} \equiv -\,i\hbar\nabla,\quad \hat{\mathbf x}\equiv \mathbf x.
    $$
- **Unitary evolution:** if $\hat H$ is time-independent,
  $$
  |\psi(t)\rangle \;=\; e^{-\,\tfrac{i}{\hbar}\hat H (t-t_0)}\,|\psi(t_0)\rangle .
  $$


**Position representation** (single particle):

$$
i\hbar\,\frac{\partial}{\partial t}\psi(\mathbf{x},t) \;=\; 
\left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{x},t)\right]\psi(\mathbf{x},t).
$$

**Probability conservation (continuity equation):**

$$
\frac{\partial}{\partial t}\,|\psi(\mathbf{x},t)|^2 + \nabla\!\cdot\!\mathbf j(\mathbf{x},t)=0,
\qquad 
\mathbf j(\mathbf{x},t)=\frac{\hbar}{m}\,\mathrm{Im}\!\big(\psi^*\nabla\psi\big).
$$

---

### Born rule (projective measurement)

For an observable $\hat A=\sum_a a\,\Pi_a$ with projectors $\{\Pi_a\}$,
$$
P(a)\;=\;\langle\psi|\Pi_a|\psi\rangle
\qquad\text{(or, for a mixed state $\rho$: $P(a)=\mathrm{Tr}[\rho\,\Pi_a]$).}
$$

where:
- $\Pi_a$ projects onto the eigenspace of outcome $a$; projectors satisfy $\Pi_a\Pi_b=\delta_{ab}\Pi_a$ and $\sum_a \Pi_a=\mathbb I$.
- $P(a)$ is the probability of obtaining eigenvalue $a$ if the measurement described by $\{\Pi_a\}$ is performed on the state $\lvert \psi \rangle$ (or $\rho$).
- **Continuous case (e.g., position):** the probability density is $p(\mathbf{x},t)=\lvert \psi(\mathbf{x},t) \rvert^2$ with normalization $\int \mathrm{d}^3x\,\lvert \psi(\mathbf{x},t) \rvert^2=1$; the probability to find the particle in $\mathrm{d}^3x$ around $\mathbf{x}$ is $p(\mathbf{x},t)\,\mathrm{d}^3x$.
- **Qubit $Z$ measurement:** if $|\psi\rangle=\cos(\tfrac{\theta}{2})|0\rangle+e^{i\phi}\sin(\tfrac{\theta}{2})|1\rangle$, then
  $$
  P(0)=\cos^2\!\left(\frac{\theta}{2}\right),\qquad 
  P(1)=\sin^2\!\left(\frac{\theta}{2}\right).
  $$

---

### Popular Interpretations (how to read those probabilities)

- **Copenhagen (collapse):** probabilities are **fundamental**; measurement induces **collapse** to an eigenstate with Born-rule weights.
- **Bohmian (pilot-wave):** dynamics is **deterministic** (guided trajectories); Born statistics arise from an **equilibrium distribution** and **epistemic** ignorance of initial conditions.
- **Everett (Many-Worlds):** evolution is **unitary**; probabilities are **branch credences** (operational, not ontic dice).
- **Objective collapse (GRW/CSL):** modify Schrödinger with **stochastic** terms; randomness is **ontic** and, in principle, experimentally testable.

TODO: continue and refine this note!