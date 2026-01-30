---
layout: post
title: "Planning & Control = Inference"
date: 2025-05-28
last_updated: 2025-05-28
author:
- Blake Edwards
tags: [control theory, artificial intelligence, robotics, computer science]
permalink: /wiki/control_as_inference
show_on_wiki: false
show_on_secret_wiki: false
---

---

### 🧠 **TL;DR**

Planning and control can be framed as Bayesian inference: by treating costs as (unnormalized) likelihoods and dynamics as priors, decision-making reduces to inferring a posterior over optimal trajectories.

---

Nearly all planning, optimal control, and reinforcement learning algorithms can be derived as **variational inference problems** of the form:

$$
\min_Q\;\mathbb{E}_Q[C(\tau)] + \mathrm{KL}(Q(\tau) \,\|\, P(\tau))
$$

by varying:

* the form of the **prior** $P(\tau)$ — e.g. passive dynamics, old policy, or expert behavior;
* the expressivity of the **variational family** $Q(\tau)$ — e.g. deterministic plans, stochastic policies, hierarchical structures;
* the **approximation scheme** — e.g. sampling, linearization, or taking a low-temperature limit.

This objective comes from the free energy functional:

$$
\mathcal{F}[Q] = \mathbb{E}_Q[C(\tau)] + \mathrm{KL}(Q(\tau) \,\|\, P(\tau))
$$

and serves as a **master equation** that unifies an entire zoo of methods and algorithms.

This conceptual model can be especially helpful in research and theory development, since many disparate algorithms become special cases of the same principle!

---

| **Category**                        | **Prior** $P(\tau)$                          | **Variational Family** $Q(\tau)$                         | **Limit / Scaling / Approximation**                             |
|-------------------------------------|----------------------------------------------|----------------------------------------------------------|-----------------------------------------------------------------|
| **Discrete Planning**               | Random walk or heuristic biases              | Dirac (single best path) or rollout policy               | $\beta \to \infty$ (zero-temperature), beam cutoff, sampling    |
| **Continuous Control**              | Passive (uncontrolled) dynamics              | Gaussian around nominal trajectory                       | Linearized dynamics & quadratic cost → iLQR / DDP               |
| **Stochastic Optimal Control**      | Uncontrolled diffusion                       | Reweighted trajectory samples                            | Path-integral importance sampling (exponential reweighting)     |
| **Modern RL**                       | Uniform or previous policy                   | Parameterized stochastic policy                          | Entropy regularization (SAC), KL trust region (PPO, REPS)       |
| **Imitation & IRL**                 | Expert demonstrations                        | Soft policy matching expert moments                      | MaxEnt moment matching (MaxEnt IRL), adversarial cost (GAIL)    |
| **Hierarchical / Meta Learning**    | Priors over skills or tasks $P(z)$           | Latent-augmented policies $Q(z,\tau)$                    | Amortized inference, nested KL penalties (options, PEARL)       |
| **Risk-Sensitive & Robust Control** | Adversarial or perturbed dynamics            | Risk-averse or worst-case policy                         | Generalized divergences (Rényi, CVaR), distributional robustness |
| **Multi-Agent & Game Solving**      | Factorized priors over agent behaviors       | Joint or factored multi-agent distributions $Q(\tau_1…)$ | Decentralized variational updates → Nash / mean-field equilibria |
| **Generative Flow Networks**        | Unnormalized reward over end states          | Policy over construction trajectories                    | Flow-matching via variational objectives                        |

---

To make this master objective practical, we must always consider the **underlying approximations**: linearizations, sampling methods, limited expressivity in $Q$, or surrogate optimization schemes.

Overall, I have found the Free-Energy Principle to serve as a very useful heuristic and unifying principle.
