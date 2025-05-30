---
layout: post
title: "Principle of Minimum Free-Energy ⚡"
date: 2025-05-28
last_updated: 2025-05-28
author:
- Blake Edwards
tags: [physics, artificial intelligence]
permalink: /wiki/minimum-free-energy-principle
hidden_from_wiki: true
hidden_from_secret_wiki: false
---

Let $P $ be a distribution over trajectories $x:[0,T] \to \mathbb{R}^n $, $P_0 $ be a reference distribution (e.g., Brownian motion), and $S[x] = \int_0^T L(x(t), \dot{x}(t))\,dt $ be the action functional.  

The **free-energy functional** is defined as:

$$
\boxed{
\mathcal{F}[P] = \mathbb{E}_P[S[x]] + \sigma \cdot \mathrm{KL}(P \,\|\, P_0)
}
$$

where interpet $\mathbb{E}_P[S[x]]$  as the expected cost and $\mathrm{KL}$ as the Kullback–Leibler divergence penalty.

The Kullback–Leibler divergence ($\mathrm{KL}$) is given by:

$$
\mathrm{KL}(P \,\|\, P_0) = \mathbb{E}_P\left[ \ln\left( \frac{P}{P_0} \right) \right]
$$

Therefore, the free-energy functional can also be written as:

$$
\boxed{
\mathcal{F}[P] = \mathbb{E}_P[S[x]] + \sigma \cdot \mathbb{E}_P\left[ \ln\left( \frac{P}{P_0} \right) \right]
}
$$

---

Now, let’s define the **value function** (cost-to-go) as the **minimum free-energy** from state $x$:

$$
V(x) = \min_{P_x} \left\{ \mathbb{E}_P[S[x]] + \sigma \cdot \mathrm{KL}(P \,\|\, P_0) \right\}
$$

This formulation reflects a global optimization over all possible future trajectory distributions $P_x$ that start from state $x$. 

More intuitively, this function can be interpreted by the statement: "Find the optimal distribution over trajectories starting from state $x$, i.e., the one that minimizes expected cost while staying close to a prior, in order to define the value function $V(x)$ as this minimum trade-off."

To compute this in practice, we often **recursively decompose** the optimization step-by-step, which leads us to the <a href="/wiki/bellman-principle"><b>Bellman Principle</b></a>:

> _The optimal cost-to-go from state \( x \) is equal to the minimum of the immediate cost plus the optimal cost-to-go from the next state._

If the problem is assumed to be **deterministic** and **discrete-time**, we recover a special case of the Minimum Free-Energy Principle in the form of the classic **Bellman equation**:

$$
V(x) = \min_a \left[ c(x, a) + V(f(x, a)) \right]
$$

where $a \in \mathcal{A}$ are actions and transitions $x' = f(x, a)$

Therefore, this reveals that the classic Bellman equation is a special case of minimizing a free-energy functional, particularly when we restrict the dynamics and costs to certain assumptions.

---
























**Claim:** Each algorithm above arises as a numerical or conceptual *projection* of the master principle:

> **Minimize the expected path cost plus entropy-regularized divergence from a prior,**
> $$
> \boxed{\mathcal{F}[P] = \mathbb{E}_P[S[x]] + \sigma \cdot \mathrm{KL}(P \| P_0)}
> $$

This principle unifies deterministic optimization, probabilistic planning, PDE-based solvers, and sampling-based motion planners under a single formalism—just with different assumptions or approximations on $S[x]$, $P_0$, and $\sigma$.

---

Each of the following examples can be viewed a numerical or conceptual *projection* of the minimum free-energy principle.

* The path of a lightening strike
* The curvature of a hanging chain
* The total area of a soap film's surface between two horizontal rings
* Least-Action Mechanics
* Hamilton–Jacobi PDEs
* Path-Integral Control
* Feynman–Kac
* RRT / RRT
* A* search algorithm
* Entropy-Regularized Planning
* Maximum Entropy IRL

---

<!-- Now, bear with me for a barrage of examples that, to the keen observer, appear intuitively connected in some way but in a way in which most casual observers cannot precisely put their finger on: -->


<!-- <img src="/assets/images/plasma_channels/lightening_strike.png">
<img src="/assets/images/plasma_channels/soap_film.png">
<img src="/assets/images/plasma_channels/caternary_chain_curve.png"> -->

**A unifying free-energy principle**: minimization of the free-energy functional.



---

---

**Examples: Projections of the Free-Energy Principle**

| Algorithm / Method               | Limit or Approximation                  | Interpretation via $\mathcal{F}[P]$ |
|----------------------------------|-----------------------------------------|-------------------------------------|
| **Least-Action Mechanics**       | $\sigma \to 0$                          | Minimizes $S[x]$ over deterministic paths; $P \to \delta_{x^*}$ |
| **Hamilton–Jacobi PDE**         | $V(x) = \inf_x S[x]$                    | Value function is $\min_P \mathcal{F}[P]$ in deterministic setting |
| **Fast Marching / Eikonal**     | $L(x,\dot{x}) = w(x)\,|\dot{x}|$       | $V(x)$ solves $|\nabla V| = w(x)$, geodesic under cost $w$ |
| **DBM / Laplace Growth**        | $L(x,\dot{x}) \propto |\dot{x}|^2 / w(x)$ | Gradient flows follow potential solving $\nabla \cdot (w \nabla \phi) = 0$ |
| **Path-Integral Control**       | Finite $\sigma$, continuous time        | Minimizes $\mathcal{F}[P]$ with $P[x] \propto P_0[x] \exp(-S[x]/\sigma)$ |
| **Feynman–Kac**                 | Linear PDE for expected cost            | Solution to PDE corresponds to expected $\exp(-S/\sigma)$ over paths |
| **RRT / RRT\***                 | Monte Carlo approximation               | Samples from path space to approximate $\arg\min S[x]$; no entropy regularization |
| **Entropy-Regularized Planning**| Finite $\sigma$, finite state space     | Solves soft Bellman equation: adds $\sigma \log$ partition terms |
| **Maximum Entropy IRL**         | Inverse problem on $\mathcal{F}[P]$     | Recovers $L$ from expert demonstrations minimizing $\mathcal{F}$ |

---

**Claim:** Each algorithm above arises as a numerical or conceptual *projection* of the master principle:

---

Cool, now consider the following examples and claim

TODO: examples

Claim: Each algorithm is a projection of this master principle into a different numerical or conceptual framework.

---


















Algorithms for solving (or approximating) a constrained variational problem in path‐space, whether by direct optimization, by sampling, or by solving a PDE.

All of these are connected.

variational, stochastic‐control, and path‐integral formulations

PDEs, stochastic expectations, and classical mechanics all arise as different faces of the same underlying principle.

---

At the heart of all these formulations is a single variational principle on path‐space: one seeks the most “likely” or “optimal” trajectories by extremizing an action functional (sometimes called the Onsager–Machlup or stochastic effective action). In the zero‐noise limit this reduces to the classical principle of least action (yielding Hamilton’s or Euler–Lagrange equations), while at finite noise it gives rise to stochastic control (the Hamilton–Jacobi–Bellman PDE) and to path‐integral representations via the Laplace (saddle‐point) method .

---

All of the methods we’ve discussed can be seen as different discretizations or limits of one single, master variational principle on path-space. All arise from the single free-energy functional

$$
\mathcal{F}[P] = \mathbb{E}_P[S] + \sigma \, \mathbb{E}_P[\ln P / P_0]
$$

whose extrema yield exact planning, approximate planners, or exploration–exploitation trade-offs.

---

#### **Plasma Channels**

<img src="/assets/images/plasma_channels/IMG_6485.png"/>

---

#### **The Variational Principle**

The “best” trajectory $x(t)$ extremizes an action functional

$$
S(x(t)) = \int_{0}^{T}{L(x(t), \dot{x}(t)) \, dt}
$$

subject to boundary conditions. In each case, the Euler–Lagrange equation or its Hamiltonian equivalent gives you either a two‐point boundary‐value ODE (shooting methods) or, after a Legendre transform, a PDE (Hamilton–Jacobi).

Solving this gives us the **deterministic least-action path**.

---

#### **The Maximum (Path‐)Entropy / Free‐Energy Principle**

If you allow stochasticity (thermal noise, exploration), you replace

$$
\underset{x}{\min}S(x) \rightarrow
$$

i.e. you trade off expected action against the entropy $H[p]$

* In a zero noise limit, i.e. $\sigma \rightarrow 0$, we recover the **deterministic least-action path**.
* At a finite $\sigma$ we get the path-integral weighting $e^{-S / \sigma}$ and Feynman-Kac formulas.
* Numerically, sampling planners (RRT, MCMC) or linearly‐solvable stochastic control methods solve exactly this free-energy minimization.

---

#### **The Dynamic Programming / Bellman Principle**

---

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

* Diffusion Limited Aggregation (DLA)
* Brownian trees
* Dielectric-breakdown model (DBM)
* Eikonal equation
* Weighted Laplace growth
* Noether’s Theorem
* Hamiltonian flow
* Hamilton-Jacobi PDE for the value-function --> static HJ (Eikonal) PDE
* Feynman–Kac stochastic representation --> the essence of path-integral control and lets you sample paths with importance weights that automatically cancel out suboptimal excursions—very much like destructive interference in quantum mechanics.
* weighted Laplace
* multiple shooting
* diffusion‐map reduction

---

#### Onsager–Machlup function


---

#### Euler–Lagrange Equation

----

#### Feynman-Kac Formula

---

#### Backward Kolmogorov PDE

---

#### Fokker–Planck (Forward Kolmogorov) PDE

---

#### Diffusion process

---

#### Wiener process

---

#### Ornstein–Uhlenbeck process

---

#### Stochastic calculus

---

#### Itô calculus

Generalization of the Riemann–Stieltjes integral, which is a generalization of the Riemann integral.

---

## References
1. https://profoundphysics.com/noethers-theorem-a-complete-guide/
2. [](https://arxiv.org/pdf/1205.3997)
3. [](https://royalsocietypublishing.org/doi/full/10.1098/rspa.2012.0683?casa_token=g64BtB6CQDkAAAAA%3AkfUaFnBtiyRL8kmAskzrgTjYIdCJiTgGvTZ4FbHTf7mPUxNXj5ryeh5YNNgHwj12sQsFVcr8syx4LT0)
