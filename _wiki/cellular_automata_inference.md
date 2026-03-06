---
layout: post
title: "Can a Computer Learn Patterns Like a Human?"
date: 2026-03-06
last_updated: 2026-03-06
author:
- Blake Edwards
tags: [cognitive science, Bayesian inference, cellular automata, MIT]
permalink: /wiki/cellular-automata-inference
show_on_wiki: true
show_on_secret_wiki: false
---

<div style="text-align: center;">
  <img src="/assets/images/cellular_automata_inference/ca_inference.gif" alt="Bayesian inference narrowing in on the correct cellular automata rule" style="width: 100%; max-width: 700px;">
</div>

You're staring at a grid of black and white cells. Each new row follows some hidden rule based on the row above it. After watching a few rows appear, you start to get a feel for the pattern -- maybe it's simple and repetitive, maybe it's chaotic and unpredictable. Either way, your brain is doing something remarkable: inferring an invisible rule from a handful of examples.

This project asks whether a computational model can do the same thing, and how its performance compares to actual human reasoning. I built it as a solo final project for [MIT 9.660 (Computational Cognitive Science)](https://ocw.mit.edu/courses/9-660j-computational-cognitive-science-fall-2004/). The model uses Bayesian program induction -- essentially searching over a space of possible rules and updating its beliefs as new evidence comes in -- implemented in [Gen.jl](https://www.gen.dev/), a probabilistic programming language built on Julia.

---

## What Are Cellular Automata?

<div style="text-align: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="/assets/images/cellular_automata_inference/class_I_rule_32.png" alt="Class I: Rule 32 -- Fixed point" style="width: 220px;">
  <img src="/assets/images/cellular_automata_inference/class_II_rule_5.png" alt="Class II: Rule 5 -- Periodic" style="width: 220px;">
  <img src="/assets/images/cellular_automata_inference/class_III_rule_30.png" alt="Class III: Rule 30 -- Chaotic" style="width: 220px;">
  <img src="/assets/images/cellular_automata_inference/class_IV_rule_110.png" alt="Class IV: Rule 110 -- Complex" style="width: 220px;">
</div>
<p style="text-align: center; font-style: italic; margin-top: 10px;">
  Four types of cellular automata. From left to right: Fixed (dies out), Periodic (repeating), Chaotic (random-looking), and Complex (structured but unpredictable). All from the same simple idea -- each row depends on the row above it.
</p>

A [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) is one of the simplest systems that can produce complex behavior. The idea: you have a row of cells, each either black or white. To generate the next row, each cell looks at itself and its two neighbors, and a rule tells it what color to be. That's it -- one rule, applied over and over. Depending on which rule you pick (there are 256 possible ones), you get everything from boring static patterns to total chaos. The mathematician [Stephen Wolfram](https://en.wikipedia.org/wiki/Stephen_Wolfram) categorized them into four classes, shown above.

---

## The Experiment

<div style="text-align: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img src="/assets/images/cellular_automata_inference/start_page.png" alt="Experiment start page" style="width: 280px;">
  <img src="/assets/images/cellular_automata_inference/q1_t1.png" alt="Early trial at t=1" style="width: 280px;">
  <img src="/assets/images/cellular_automata_inference/q4_t6.png" alt="Late trial at t=6 with chaotic rule" style="width: 280px;">
</div>
<p style="text-align: center; font-style: italic; margin-top: 10px;">
  The web experiment. Left: start page. Center: an early trial with one row of evidence. Right: a later trial with six rows -- this one's a chaotic rule.
</p>

I built a browser-based experiment and ran five participants through it. They saw partial CA patterns evolving one row at a time across 7 different rules. At each step, they were given four candidate continuations and asked to rate how likely each one was on a 1-7 scale. The cool part: you can [try it yourself](https://blakesnotes.io/9-660_CA_experiment/index.html).

The questions I wanted to answer: Do people get better as they see more evidence? Do they struggle more with chaotic rules than simple ones? And does the computational model show the same trends?

---

## Human vs. Model

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/cellular_automata_inference/accuracy_by_time.png" alt="Accuracy over time for humans vs model" style="display: block; margin: auto; width: 100%; max-width: 700px;">
  <figcaption>Both humans and the model improve with more evidence. Humans climb from ~20% to ~70% accuracy; the model hits near-perfect after just one observation.</figcaption>
</figure>

Both humans and the model get better as they see more rows -- consistent with Bayesian updating, where more data means sharper beliefs. The model is faster (it has perfect memory and no distractions), but the overall shape of the learning curve is strikingly similar.

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/cellular_automata_inference/human_vs_model_by_class.png" alt="Accuracy comparison by Wolfram complexity class" style="display: block; margin: auto; width: 100%; max-width: 700px;">
  <figcaption>Simple rules are easy for everyone. Chaotic and complex rules are where humans fall behind.</figcaption>
</figure>

Breaking it down by rule complexity tells an interesting story. Both humans and the model crush the simple Class I (Fixed) rules at around 80% accuracy. But as the patterns get more complex, the gap widens: humans drop to 42% on the hardest Class IV (Complex) rules, while the model stays at 100%. The takeaway? Human pattern recognition is genuinely powerful for structured patterns, but our cognitive bandwidth caps out when things get chaotic -- exactly what you'd expect from a resource-bounded Bayesian reasoner.

---

## Links

- [GitHub Repository](https://github.com/blakete/mit-9-660-final-project)
- [Full Paper (PDF)](https://github.com/blakete/mit-9-660-final-project/blob/main/paper/Edwards_MIT_9_660_Final_Project_Report.pdf)
- [Try the Experiment](https://blakesnotes.io/9-660_CA_experiment/index.html)
