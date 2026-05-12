---
layout: post
title: "Elon's 5-Step Algorithm"
date: 2021-09-01
last_updated: 2021-09-01
author:
- Blake Edwards
tags: [engineering, design, process, first principles]
permalink: /wiki/elons-algorithm
show_on_wiki: true
show_on_secret_wiki: false
---

Elon Musk's 5-step "algorithm," from the Starbase tour with Tim Dodd. The order matters.

1. **Make requirements less dumb.** Every requirement should be tied to a name, not a department. "The specs were too dumb," and they always are, no matter how smart the source.
2. **Delete the part or process.** If you're not adding back at least 10% of what you delete, you're not deleting enough. Bias toward removal.
3. **Simplify or optimize.** Only *after* deleting. The most common error is optimizing something that shouldn't exist.
4. **Accelerate cycle time.** Speed up what's left, but *only* what's left. Don't speed up a process you should have deleted in step 2.
5. **Automate.** Last, because if you automate before steps 1 through 4, you're just automating waste.

His core point is that engineers (himself included) instinctively start at step 5 and work backwards, which is why he made the order explicit. He also adds two corollaries: all design choices should be questioned (including your own), and the person responsible for a requirement should sometimes be the one to delete it.

## Source

[Starbase Tour with Elon Musk, Part 1 (Everyday Astronaut, filmed July 30, 2021)](https://youtu.be/t705r8ICkRw?t=809), at roughly the 13:30 mark, during the walk through the high bay when the conversation shifts from manufacturing into broader engineering philosophy. Musk had publicly referenced parts of the same idea before (notably a 2020 internal Tesla/SpaceX note about "the best part is no part"), but this tour is where he first articulated all five steps in order as a single named "algorithm," which is why that clip became the canonical reference for it.
