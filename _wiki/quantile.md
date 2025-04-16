---
layout: page
title: "Quantile"
date: 2025-04-16
last_updated: 2025-04-16
tags: [wiki, dictionary]
permalink: /wiki/quantile/
hidden_from_wiki: true
---

## Quantile

Given a probability distribution $P$ over a real-valued random variable $\theta$, the **$(1 - \delta)$ quantile** of the distribution, denoted as:

$$
\text{Quantile}_{1 - \delta}(P)
$$

is the smallest value $q$ such that:

$$
\mathbb{P}(\theta \leq q) \geq 1 - \delta.
$$

In other words, $q$ is a threshold below which the random variable $\theta$ falls with probability at least $1 - \delta$.

For a Beta distribution $\theta \sim \text{Beta}(\alpha, \beta)$, this quantile can be computed as:

$$
\text{Quantile}_{1 - \delta}\left( \text{Beta}(\alpha, \beta) \right) = \texttt{beta.ppf}(1 - \delta, \alpha, \beta)
$$

where `beta.ppf` is the percent-point function (inverse CDF) from standard statistical libraries.[^1]


#### References

[^1]: [Quantile statistic and probability - Wikipedia](https://en.wikipedia.org/wiki/Quantile)

