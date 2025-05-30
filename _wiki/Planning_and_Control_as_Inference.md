---
layout: post
title: "Planning & Control = Inference"
date: 2025-05-28
last_updated: 2025-05-28
author:
- Blake Edwards
tags: [control theory, artificial intelligence, robotics, computer science]
permalink: /wiki/planning_and_control_as_inference
hidden_from_wiki: true
hidden_from_secret_wiki: false
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

---

### References
[^1] [Kappen, H. J., Gómez, V., & Opper, M. (2012). Optimal control as a graphical model inference problem. Machine learning, 87, 159-182.](https://roudi.folk.ntnu.no/Mariehamn/Bert_Kappen.pdf)
[^2] [Kappen, H. J. (2005). Path integrals and symmetry breaking for optimal control theory. Journal of statistical mechanics: theory and experiment, 2005(11), P11011.](https://arxiv.org/pdf/physics/0505066)
[^3] [Ortega, P. A., & Braun, D. A. (2013). Thermodynamics as a theory of decision-making with information-processing costs. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 469(2153), 20120683.](https://arxiv.org/pdf/1204.6481)]
[^4] [Levine, S. (2018). Reinforcement learning and control as probabilistic inference: Tutorial and review. arXiv preprint arXiv:1805.00909.](https://arxiv.org/pdf/1805.00909)
[^5] [Solway, A., & Botvinick, M. M. (2012). Goal-directed decision making as probabilistic inference: a computational framework and potential neural correlates. Psychological review, 119(1), 120.](https://sites.socsci.uci.edu/~lpearl/courses/readings/SolwayBotvinick2012.pdf)
[^5] [Friston, K. (2010). The free-energy principle: a unified brain theory?. Nature reviews neuroscience, 11(2), 127-138.](https://www.uab.edu/medicine/cinl/images/KFriston_FreeEnergy_BrainTheory.pdf)
[^6] [Rawlik, K., Toussaint, M., & Vijayakumar, S. (2012). On stochastic optimal control and reinforcement learning by approximate inference. Proceedings of Robotics: Science and Systems VIII.](https://ieeexplore.ieee.org/xpl/ebooks/bookPdfWithBanner.jsp?fileName=6577934.pdf&bkn=6574627&pdfType=chapter)
[^7] [Todorov, E. (2006). Linearly-solvable Markov decision problems. Advances in neural information processing systems, 19.](https://proceedings.neurips.cc/paper_files/paper/2006/file/d806ca13ca3449af72a1ea5aedbed26a-Paper.pdf)
[^8] [Todorov, E. (2008, December). General duality between optimal control and estimation. In 2008 47th IEEE conference on decision and control (pp. 4286-4292). IEEE.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4739438)
[^9] [Todorov, E. (2010). Policy gradients in linearly-solvable MDPs. Advances in Neural Information Processing Systems, 23.](https://papers.nips.cc/paper_files/paper/2010/file/69421f032498c97020180038fddb8e24-Paper.pdf)
[^10] [Botvinick, M., & Toussaint, M. (2012). Planning as inference. Trends in cognitive sciences, 16(10), 485-488.](https://www.sciencedirect.com/science/article/pii/S1364661312001957)
[^11] [Ziebart, B. D., Bagnell, J. A., & Dey, A. K. (2010). Modeling interaction via the principle of maximum causal entropy.](https://www.cs.cmu.edu/~bziebart/publications/maximum-causal-entropy.pdf)
[^12] [Waugh, K., Ziebart, B. D., & Bagnell, J. A. (2013). Computational rationalization: The inverse equilibrium problem. arXiv preprint arXiv:1308.3506.](https://arxiv.org/pdf/1103.5254)
[^12] [Jaynes, E. T. (1957). Information theory and statistical mechanics. Physical review, 106(4), 620.](https://journals.aps.org/pr/pdf/10.1103/PhysRev.106.620)
[^13] [Parr, T., Pezzulo, G., & Friston, K. J. (2022). Active inference: the free energy principle in mind, brain, and behavior. MIT Press.](https://watermark.silverchair.com/book_9780262369978.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAzQwggMwBgkqhkiG9w0BBwagggMhMIIDHQIBADCCAxYGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMEKM55lBHLBlhYav9AgEQgIIC57t4gKemWPkF-ODVg0CdmOJCO0mZq1rYRM3AWohB0H97HpkTun4KpXLMsneEZv3UNlnSUkxfzkK7sXT9fJ1a58RqsRwpMBcFhBiR_Ls1zAMf8HKgX50owMjiO6pshv7KU7iq0YxBeJXqi98tjBcAmMzp-wvMRAjtxc50QU7HWoP54ULIGDJwnkugWXzCLR3nYkgBOvkQ7LC3TRcWsLPy2FWDCES706SpBqXig--v41-dBUO7y1T1atRPkVat5fabty96o-anxs32CTZbZRE2hOfJ46WcyrLyMRTie4DcmlQzSRfEd9yC03qDPqO-XGp0QJhqjE8xInqvvtWp1Rie4FpwdhDV4tK2fxHp18prMXBfcxbI8ZMHGJsU6oqPtn-ryZTBGAsIcoRCY07Zfz2Xym34STC2oDlSdZqJTFwAJxzT5szDCNO1DXFTpZ4S3w0JRYuQoWhhoGdVg9JItViqhXKGc8z2f7J8zdtryIKNCDtIbVHRMmpTHGizBhio8yWPowUjVXLcyDJ9KeerRt-ERISAiMjEuCE7JmN6rarW-yIrA9aVgA9VPd2fdLWzZS5j_xzDNgTDMX9bDdZs6t-EgvzcQUOSiHWDNGW0V3RVQj3ojCgXN0NlOvg5ZFPxDBJ-rhNSLJn_XhVsDQoD_PiOXWSVwqDcjoqNIttAV1626JW6dVfoJSpQw6C3ELUAFGyeofZI7zN8iPbmrx3kJwi_YSsYdiBRWyZ7Y-tI6F1_pV6IAbwIuONcRUfqpcq3J8zg_GBo0Fkf-8mf7akj9hEIg7HaR0NTIYoyD56gfRR9w1WEwgowyvrQRRhhZjRYL8HCJOfTfkT4ggZQ-QuXdf9oJenE5hpVQH2grGPAa3gcA08AYhpucTYdZclqhKQMnQ8HVL3hIFYsEyeeUbzPIWYOK16fcP1hnmiaVnBHfgNUNT-I_Oct7BWX9ms2fW_EbhAyMtCQwZRKyb2rCyHRYkU33XFxNlm2lvzj)