---
layout: post
title: "The Bellman Principle"
date: 2025-05-28
last_updated: 2025-05-28
author:
- Blake Edwards
tags: [dynamic programming, artificial intelligence]
permalink: /wiki/bellman-principle
hidden_from_wiki: true
hidden_from_secret_wiki: false
---

The **Bellman Principle** says:

> _The optimal cost-to-go from state $x$ is equal to the minimum of the immediate cost plus the optimal cost-to-go from the next state._

In discrete time, with action $ a $ and transition $ x' = f(x,a) $, this gives us the **Bellman equation**:

$$
\boxed{
V(x) = \min_a \left[ c(x,a) + V(f(x,a)) \right]
}
$$

This is a recursive version of minimizing $ \mathcal{F}[P] $ from the <a href="/wiki/minimum-free-energy-principle">Minimum Free-Energy Principle</a> in which we compute the total cost step-by-step.

