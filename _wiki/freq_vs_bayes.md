---
layout: page
title: "Frequentist vs. Bayesian Approaches to SMC"
date: 2025-05-02
last_updated: 2025-05-02
tags: [formal verification, model checking, statistical model checking]
permalink: /wiki/frequentist-vs-bayesian-smc
hidden_from_wiki: false
---

### **Introduction**

Statistical Model Checking (SMC) seeks to estimate or bound the probability $p$ that a stochastic system violates (or satisfies) a formally specified logical property (e.g., temporal logic, PCTL) by sampling executions of the system through simulation. In high‐assurance domains, where certification and safety are paramount, engineers must balance **frequentist guarantees**, which provide hard, long‐run coverage properties, against **Bayesian interpretability**, which offers direct probability statements about model parameters given the observed data. This page explores how each approach frames risk and uncertainty in SMC and when to favor one over the other.

### **TLDR**

**Frequentist methods have a key guaranteed coverage property**: "Over repeated experiments, the interval covers the true parameter at least $(1-\alpha)$ of the time, regardless of the true value of $p$."

**Bayesian credible intervals** don't naturally have this guarantee because they **interpret probability as belief about parameters given the observed data**, not repeated sampling behavior.

Even if you design a Bayesian credible interval to be wider (more conservative) than Clopper–Pearson, unless you prove or calibrate its frequentist coverage, you don’t have any formally guaranteed coverage, just a reasonable expectation!

This is why in critical fields (e.g., aerospace, nuclear, medical), regulators often prefer Clopper–Pearson or other frequentist methods, where the coverage guarantees are mathematically provable.

### **Why frequentist SMC dominates in practice**
1. No priors required  
2. Repeatability & guaranteed coverage  
3. Conservatism for safety/regulation  
4. Tooling & ecosystem adoption

---

### **Comparison of Approaches**

#### **Frequentist Interpretation**

- **Interpretation**: Given your observed $k$ failures in $N$ trials and confidence level $1-\alpha$, the CP method yields an interval $[L,U]$ such that, if you repeated the same $N$-trial experiment infinitely often, then a fraction $(1-\alpha)$ of those intervals would contain the true failure probability $p$.
<!-- - **Example 1**: "With 95% confidence, the true failure probability is at most $U\approx0.0707$, so the maximum expected loss is $0.0707 \times \\$50 \text{M} \approx \\$3.54 \text{M}$." -->
- **Example 1**: "Based on the observed failure rate $\hat p = \frac{k}{N} = \frac{2}{100} = 0.02,$ the point-estimate expected loss is $\hat p \times \\$50\text{M} = \\$1\text{M}.$ Furthermore, with 95% confidence, the true failure probability is at most $U \approx 0.0707$, so the maximum expected loss is $0.0707 \times \\$50\text{M} \;\approx\; \\$3.54\text{M}.$”
- **Example 2**: “With 95% confidence, the true catastrophic-failure rate is no more than $5\times10^{-10}$ failures per flight-hour, i.e., we can bound the risk at at most one failure in 2 billion flight-hours in 95% of identical test programs.”
- **Key Takeaway**: You get a worst-case bound on risk that holds in at least 95% of repeated experiments, but you do not get a probability statement about $p$ in this single experiment.

#### **Bayesian Interpretation**

- **Interpretation**: Given your observed $k$ failures in $N$ trials, a prior distribution on $p$ (e.g. $\mathrm{Beta}(1,1)$), and confidence level $1-\alpha$, the Bayesian method yields a posterior $\mathrm{Beta}(1+k,\,1+N-k)$ and constructs an interval $[L,U]$ such that  
  $$\Pr\bigl(p\in[L,U]\mid\text{data}\bigr)=1-\alpha.$$
- **Example 1**: "Based on the posterior mean $\mathbb{E}[p \mid \text{data}] = \frac{3}{102} \approx 0.0294,$ the point-estimate expected loss is $0.0294 \times \\$50\text{M} = \\$1.47\text{M}.$ Furthermore, with 95% probability (given the data and a uniform prior), the true failure probability lies in the interval $[0.0034, 0.0617],$ so the expected loss lies between $0.0034 \times \\$50\text{M} = \\$0.17\text{M}$ and $0.0617 \times \\$50\text{M} = \\$3.085\text{M}.$"
- **Example 2**: "Given the test data and a uniform prior, there’s a 95% probability that the catastrophic-failure rate is below $4\times10^{-10}$ per flight-hour,  equivalent to fewer than one failure in about 2.5 billion flight-hours."
- **Key Takeaway**: You obtain a direct probability statement about $p$ (and hence about risk) *given* the data, plus both a “best‐estimate” (the posterior mean) and a 95% credible range on the expected loss.


---

### **Deep Dive**

#### **Frequentist SMC**

– **Core procedures**  
  * Clopper–Pearson intervals for fixed-sample inference  
  * Sequential Probability Ratio Test (SPRT) for early stopping  
  * Wald’s approximations (normal, Wilson) for large-sample bounds  

– **Guarantees**
  * Controls Type I error at level $\alpha$
  * Coverage ≥ $(1−\alpha)$ across repeated experiments  
  * Worst-case risk bounds with no reliance on priors  

– **When & why to apply**  
  * Certification or regulatory scenarios requiring provable error rates  
  * Quick violation detection via SPRT when failures are rare  
  * Use in toolchains (PRISM, UPPAAL SMC) that default to frequentist tests  

#### **Bayesian SMC**

– **Choosing priors**  
  * Uniform $\mathrm{Beta}(1,1)$ for non-informative baseline  
  * Jeffreys $\mathrm{Beta}(\frac{1}{2},\frac{1}{2})$ for objective, near-frequentist coverage  
  * Robust priors (e.g. $\mathrm{Beta}(\alpha,\alpha)$ with $\alpha<1$) to widen intervals conservatively

– **Computing posteriors & credible intervals**
  * Closed-form Beta–Binomial update for simple counts
  * Numerical inversion or Monte Carlo for complex properties
  * Posterior predictive checks for model validation

– **Hybrid/robust approaches to restore coverage**
  * Calibrated priors that match Clopper–Pearson bounds
  * Worst-case credible intervals over a class of priors
  * Mixture or hierarchical priors for sensitivity analysis

– **When & why to apply**  
  * Incorporating expert or historical data into SMC  
  * Sequential updating as new simulation results arrive  
  * Generating direct probability statements for risk-based decisions  

---

### **Which to Use When?**
A short decision table:

| Requirement                           | Frequentist SMC | Bayesian SMC |
|---------------------------------------|:---------------:|:------------:|
| Hard coverage guarantees              |      ✅          |      ⚠️      |
| Direct probability statements on $p$  |      ❌          |      ✅      |
| Incorporate prior knowledge           |      ❌          |      ✅      |
| Tool support in PRISM / UPPAAL SMC    |      ✅          |      ⚠️      |

---

### **References & Further Reading**

* See papers on Clopper-Pearson vs. Jeffreys intervals, confidence posteriors, and robust Bayesian SMC.
