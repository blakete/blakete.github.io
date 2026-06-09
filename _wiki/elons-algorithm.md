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
pinned: true
---

Elon Musk's 5-step "algorithm," from the Starbase tour with Tim Dodd. The order matters.

1. **Make requirements less dumb.** Every requirement should be tied to a name, not a department. Don't accept "safety requires it" or "legal requires it"; find the specific person who wrote it and question them directly, even if that person is Musk himself. Smart people hand down dumb requirements all the time, and this step keeps you from building the perfect answer to the wrong problem.
2. **Delete the part or process.** Cut aggressively. If you're not eventually forced to add back at least 10% of what you delete, you didn't delete enough. Resist "in case" logic: don't keep a part or step around just because you might want it later.
3. **Simplify or optimize.** Only *after* deleting, and only on the things that survived. The most common mistake a smart engineer makes is lovingly optimizing a part or process that shouldn't exist in the first place.
4. **Accelerate cycle time.** Speed up what's left, but *only* what's left. Whatever pace you think a task can run at, it can usually go faster, but you only earn the right to push speed after steps 1 through 3. Don't accelerate a process you should have deleted in step 2.
5. **Automate.** Last, because if you automate before steps 1 through 4 you're just automating waste. Musk has admitted to running this in reverse, automating and speeding up a process before realizing the whole step was unnecessary and had to be deleted.

His core point is that engineers (himself included) instinctively start at step 5 and work backwards, which is why he made the order explicit. He also adds two corollaries: all design choices should be questioned (including your own), and the person responsible for a requirement should sometimes be the one to delete it.

## Source

[Starbase Tour with Elon Musk, Part 1 (Everyday Astronaut, filmed July 30, 2021)](https://youtu.be/t705r8ICkRw?t=809), at roughly the 13:30 mark, during the walk through the high bay when the conversation shifts from manufacturing into broader engineering philosophy. Musk had publicly referenced parts of the same idea before (notably a 2020 internal Tesla/SpaceX note about "the best part is no part"), but this tour is where he first articulated all five steps in order as a single named "algorithm," which is why that clip became the canonical reference for it.
