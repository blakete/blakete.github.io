---
layout: wiki_page
title: "Conjugate Prior"
date: 2025-04-16
last_updated: 2025-04-16
tags: [wiki, dictionary]
hidden_from_wiki: true
hidden_from_secret_wiki: false
---

## Conjugate Prior

A **conjugate prior** is a prior distribution that, when combined with a particular likelihood function via Bayes' Rule, yields a **posterior distribution in the same family** as the prior. [^1]

More formally, if the prior $p(\theta)$ and the likelihood $p(\mathcal{D} \mid \theta)$ combine to give a posterior $p(\theta \mid \mathcal{D})$ such that $p(\theta \mid \mathcal{D})$ belongs to the same distributional family as $p(\theta)$, then $p(\theta)$ is called a **conjugate prior** for that likelihood.

This is especially useful in Bayesian inference because it allows for **closed-form posterior updates**, making analysis and computation much simpler.

---

### Example 1: Beta Prior for Bernoulli Likelihood

Suppose we want to estimate the probability $\theta$ of success in a Bernoulli trial (i.e., a coin flip). That is:

$$
y_i \sim \text{Bernoulli}(\theta), \quad y_i \in \{0,1\}
$$

We place a **Beta prior** on $\theta$:

$$
\theta \sim \text{Beta}(\alpha_0, \beta_0)
$$

Suppose we observe $N$ trials $y_1, \dots, y_N$, and let $k = \sum_{i=1}^N y_i$ be the number of observations where $y_i = 1$.

The **likelihood** of the data is:

$$
p(y_{1:N} \mid \theta) = \theta^k (1 - \theta)^{N - k}
$$

The **prior** is:

$$
p(\theta) = \frac{1}{B(\alpha_0, \beta_0)} \theta^{\alpha_0 - 1}(1 - \theta)^{\beta_0 - 1}
$$

Multiplying the prior and likelihood, we get the **unnormalized posterior**:

$$
p(\theta \mid y_{1:N}) \propto \theta^{\alpha_0 + k - 1} (1 - \theta)^{\beta_0 + N - k - 1}
$$

This is the kernel of a **Beta distribution**, so the **posterior is also Beta**:

$$
\theta \mid y_{1:N} \sim \text{Beta}(\alpha_0 + k, \beta_0 + N - k)
$$

✅ The prior and posterior are both Beta distributions → **Beta is conjugate to the Bernoulli likelihood.**

---

### FAQ

* Why do we want a conjugate prior?
    * It makes the math clean, interpretable, and analytically tractable. Posterior updates are often just algebraic adjustments to the prior parameters, avoiding numerical integration.

---

#### References

[^1]: [Conjugate Prior - Wikipedia](https://en.wikipedia.org/wiki/Conjugate_prior)
