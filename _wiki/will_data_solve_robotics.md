---
layout: post
title: “will data solving robotics and automation?”
date: 2025-06-25
last_updated: 2025-06-25
author:
- Blake Edwards
tags: [opinion piece, artificial intelligence]
permalink: /wiki/will-data-solve-robotics-and-automation
show_on_wiki: false
show_on_secret_wiki: false
---

This is my takeaway and opinion after watching the video linked below.

This was a great discussion. I think the key insight is that data alone doesn’t “solve” robotics, but it is a crucial ingredient in a new paradigm of combining data with general-purpose algorithms and large-scale compute. Humans guide the process by shaping the right inductive biases, using knowledge from physics, control theory, and human intuition, and then we allow learning algorithms to do the heavy lifting.

Of course a very loose set of biases makes it extremely unlikely that data plus weak priors will discover robust, generalizable control policies. For example, simply training a multilayer perceptron on internet-scale data would not have produced ChatGPT; intelligence-like behavior emerged only after transformer architectures introduced the right structural inductive biases into the hypothesis space. At the same time, too much hand-crafted structure limits adaptability and reliability outside narrow scenarios. The sweet spot lies in defining a hypothesis space guided by first principles—physical laws, optimal control, information theory—and then flooding it with interaction data and compute.

Humans excel at recognizing and repeating useful contours and patterns but struggle to systematically compose them in complex, abstract ways. Our reasoning tends to overfit to familiar structures and breaks down in high-dimensional, non-obvious problem spaces. Learning fills in those gaps, yielding the synthesis of human insight and machine-driven discovery that could finally unlock truly adaptable, capable robots.

## References and Further Reading

- [Data Will Solve Robotics and Automation: True or False? - Debate](https://youtu.be/PfvctjoMPk8?si=Ix45KGrpBnnRhLBJ)
- [Andrej Karpathy: Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ&ab_channel=YCombinator)
- [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
 