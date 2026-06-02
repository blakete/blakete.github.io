---
layout: post
title: "Hypothesis Testing"
date: 2026-03-12
last_updated: 2026-03-12
author:
- Blake Edwards
tags: [statistics, hypothesis testing, inference]
permalink: /wiki/hypothesis-testing
show_on_wiki: true
show_on_secret_wiki: false
---

Brief introduction to hypothesis testing.

#### **Hypothesis**

$
\hspace{3mm} H_0 : \theta = \theta_0
$

$
\hspace{3mm} H_1: \theta \neq \**theta_0**
$

#### **Test Statistic**

$
\hspace{3mm} T = g(X_1, X_2, \dots, X_n)
$

$\hspace{3mm} \text{where} \; 333X_1, X_2, \dots, X_n$

#### **P-Value**

$
\hspace{3mm} p = P(T \geq t_{\text{obs}} \, \vert \, H_0)
$

#### **Decision Rule**

<!-- TODO: define alpha -->

$
\hspace{3mm} H_0 \iff p \leq \alpha
$

<!-- TODO: define C_alpha -->

$
\hspace{3mm} H_0 \iff T \in C_{\alpha}
$

#### **Significance Level**

$$
\hspace{3mm} 
$$

#### **Error Types**

$$
\hspace{3mm} 
$$

#### **Power**

$$
\hspace{3mm} 
$$

#### **Z-Test Example**

$$
\hspace{3mm} 
$$


---

#### **E-Processes**

---

#### **Optimal Power**

It is desireable to maximize power.

#### Controlling Type-I Error Rate



<!-- 
## Section 1

Content for section 1.

## Section 2

Content for section 2.

## References

1. Reference 1
2. Reference 2 -->



<!-- ---

Your results show really different separation dynamics across domains — MATH rejects mostly at step 1 while chess takes dozens of moves.
Have you thought about adapting the verification compute itself based on how confident Mₜ is at a given step?
For instance, if the density ratio is ambiguous after several steps, switching to a more expensive verifier or allocating more samples at that specific step — essentially treating the verification budget as adaptive rather than fixed, since some trajectory states are inherently harder to predict than others.

And as a follow-up — in those ambiguous states where Mₜ hasn't separated yet, would you gain anything by augmenting the score sequence with simulated rollouts from a learned world model?
Essentially giving the classifier lookahead rather than just hindsight. My concern is whether injecting simulated futures into the input breaks the martingale property your guarantees depend on, since the filtration is no longer just observed data. -->
