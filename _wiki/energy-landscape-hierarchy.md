---
layout: post
title: "Energy Landscape Hierarchy"
date: 2026-05-11
last_updated: 2026-05-11
author:
- Blake Edwards
tags: [optimization, energy landscapes, agents, decision making]
permalink: /wiki/energy-landscape-hierarchy
show_on_wiki: true
show_on_secret_wiki: false
---

Optimization problems rarely have a single relevant scale. The landscape an agent navigates decomposes into nested basins: a few enormous strategic basins, finer tactical valleys conditioned on the strategic choice, and a thin operational roughness on top. Each level has its own barrier heights, its own equilibration timescale, and its own answer to the question "is gradient descent enough here?" The interactive below lets you toggle between the three levels of the same landscape and see what becomes visible at each grain.

<div style="position: relative; width: 100%; max-width: 900px; margin: 1.5em auto; aspect-ratio: 4 / 3; border: 1px solid rgba(168,159,138,0.15); border-radius: 8px; overflow: hidden;">
  <iframe
    src="/assets/energy_landscape_hierarchy/index.html"
    title="Interactive 3D visualization of a hierarchical energy landscape with strategic, tactical, and operational grain levels"
    style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
    loading="lazy"
    allowfullscreen></iframe>
</div>

The decomposition is

$$E(s, t, o) = E_{\text{strategic}}(s) + E_{\text{tactical}}(t \mid s) + E_{\text{operational}}(o \mid s, t).$$

Strategic terms set which basin you live in. Tactical terms shape the sub-basin given that choice. Operational terms are the local roughness. Conditioning matters: the tactical landscape is not a fixed object — it is reshaped by the strategic choice, and the operational landscape is reshaped again by the tactical one.

## Why the hierarchy matters

Local search has a different meaning at every level. Gradient descent on the operational scale is fine, even cheap — barriers are small, equilibration is fast, and the topology around you was already determined by the higher levels. The same gradient descent run at the strategic scale will sit forever in whatever basin it was initialized in, because the inter-basin barriers are huge and the landscape is essentially flat almost everywhere else.

This is the practical content of the "explore vs. exploit" dichotomy. Exploit means descend the operational gradient. Explore means commit budget to changing which strategic or tactical basin you're in — which, on this picture, is barrier-crossing, not gradient-following.

## How it connects to the uncomputable north star

A Bayes-optimal agent in principle treats the whole hypothesis space as one undifferentiated landscape and weighs every possibility. In practice no embodied agent can. [Approximation choices](/wiki/the-uncomputable-north-star) get organized along exactly this hierarchy — the prior coarsens at the strategic scale, the inference scheme gets refined at the tactical scale, and the planning budget is mostly burned at the operational scale. The shape of a working agent is the shape of how it allocates compute across these levels.

## Further reading

- [Wales, D. J. (2003). *Energy Landscapes*. Cambridge University Press.](https://www.cambridge.org/core/books/energy-landscapes/A4E1F6F1B4664F8C2F0B0B0E5E9B5B5C)
- [Frauenfelder, H., Sligar, S. G., &amp; Wolynes, P. G. (1991). The energy landscapes and motions of proteins. *Science* 254(5038), 1598–1603.](https://www.science.org/doi/10.1126/science.1749933)
