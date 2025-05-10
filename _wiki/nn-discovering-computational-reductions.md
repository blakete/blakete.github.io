---
layout: post
title: "Using Neural Networks to Uncover Computational Structure and Reducibility"
date: 2025-05-09
last_updated: 2025-05-09
author:
- Blake Edwards
tags: [artificial intelligence, neural networks, computational complexity, epistemology]
permalink: /wiki/neural-networks-discovering-new-computational-reducibility
hidden_from_wiki: false
---

When a neural network (NN) achieves drastic runtime improvements (sometimes 1000x!) or more, while maintaining or exceeding traditional algorithmic performance across a representative domain (e.g., 5000x speedup with 100% accuracy across all test cases), it raises a compelling set of questions:

1. Has the NN discovered a more efficient algorithm?
2. Is it simply better at utilizing modern compute (e.g., parallelism, GPUs)?
3. Or is it a bit of both?

If the reality leans toward the first possibility, it suggests something intriguing: that **neural networks might be implicitly exploiting latent computational structures or shortcuts that classical, human-designed algorithms have overlooked.**

Recent examples suggest that neural networks are capable of uncovering parsimonious, structured representations from data, particularly in physics and symbolic domains:

* AI Feynman [^1] [^2] demonstrated neural-assisted symbolic regression, recovering compact, interpretable physical laws.
* AlphaTensor [^3] discovered novel matrix multiplication algorithms faster than previously known human-designed ones, revealing entirely new computational approaches.
* Research by Desai & Strachanand [^4] and by Cranmer, Lemos et al. [^5] showed neural networks rediscovering known physical principles (including orbital mechanics) purely from data, again hinting at hidden structural patterns.

While this doesn't directly confirm that NNs are discovering fundamentally more efficient algorithms (as posed in question 1 above), it does strongly suggest that such a capability may exist under the right conditions. Building on this, I believe that **neural networks may ultimately reveal genuinely novel computational shortcuts, indicating forms of hidden reducibility that traditional algorithmic approaches have not yet formalized.**

**If we develop methods to successfully extract or synthesize formalized algorithms from neural networks, then we could potentially combine the best aspects of both approaches: interpretable algorithms that we can formally reason about (e.g., providing rigorous safety guarantees), while potentially achieving even better performance by avoiding reliance on over-parameterized, overfit neural approximations.** I have not properly surveyed published research in this domain, but I suspect that using neural networks as tools for discovering latent algorithmic structure and synthesizing new algorithms is under-explored and rich with potential.

Outstanding key questions I have:

1. What criteria distinguish algorithmic behavior from data interpolation or memorization?
2. How to convert NN weights into symbolic and/or procedural logic?
    * NNs knowledge is highly distributed and entangled across its many weights and activations. Tools to reverse engineer (like mechanistic interpretability) or distill these learned computational procedures into symbolic or procedural forms.
3. How should we train NNs to make them amenable to this type of program extraction / synthesis?

I look forward to seeing more researchers explore this promising intersection between neural network discovery and formal algorithm synthesis, as it may hold significant potential for advancing both theory and practice.

---

### UPDATE (05-10-2025)

Further investigation confirms that researchers have recently made meaningful strides toward the goal of extracting interpretable algorithms from trained neural networks:

* Decision Trees from Neural Policies: SymbolicPCC [^7] distilled a deep RL congestion control policy into a symbolic decision tree that retains and even exceeds the original NN performance, providing a white-box, verifiable algorithm that can replace the "black-box" NN policy.
* Finite-State Machines from Transformers: this work [^8] showed how to extract Moore machines (a type of deterministic finite automata) from transformer models by abstracting attention dynamics into structured automaton transitions, revealing formal grammar-like behavior in learned models.
* Pseudocode from Recurrent Networks: Mechanistic Interpretable Program Synthesis (MIPS) [^9] [^10] directly reverse-engineered trained RNNs into human-readable Python code for dozens of algorithmic tasks. MIPS is one of the clearest example to date of converting raw neural weights into symbolic, procedural logic.

### References

[^1]: [Udrescu & Tegmark (2020). AI Feynman: A physics-inspired method for symbolic regression. *Science Advances*, 6(16), eaay2631.](https://arxiv.org/abs/1905.11481)  
[^2]: [Udrescu et al. (2020). AI Feynman 2.0: Pareto-optimal symbolic regression exploiting graph modularity. *NeurIPS*.](https://arxiv.org/pdf/2006.10782)  
[^3]: [Fawzi et al. (2022). Discovering faster matrix multiplication algorithms with reinforcement learning. *Nature*, 610(7930), 47–53.](https://www.nature.com/articles/s41586-022-05172-4)  
[^4]: [Desai & Strachan (2021). Parsimonious neural networks learn interpretable physical laws. *Scientific Reports*, 11, 12761.](https://www.nature.com/articles/s41598-021-92278-w)  
[^5]: [Lemos et al. (2023). Rediscovering orbital mechanics with machine learning. *MLST*, 4(4), 045002.](https://iopscience.iop.org/article/10.1088/2632-2153/acfa63/meta)
[^6]: [Kant, N. (2018). Recent advances in neural program synthesis. arXiv preprint arXiv:1802.02353.]()
[^7]: [Sharan, S. P., Zheng, W., Hsu, K. F., Xing, J., Chen, A., & Wang, Z. (2022). Symbolic distillation for learned TCP congestion control. Advances in Neural Information Processing Systems, 35, 10684-10695.](https://openreview.net/pdf?id=rDT-n9xysO)
[^8]: [Adriaensen, R., & Maene, J. (2024). Extracting Finite State Machines from Transformers. arXiv preprint arXiv:2410.06045.](https://arxiv.org/abs/2410.06045)
[^9]: [Tegmark, M., & Omohundro, S. (2023). Provably safe systems: the only path to controllable AGI. arXiv preprint arXiv:2309.01933.](https://arxiv.org/abs/2309.01933)
[^10]: [Michaud, E. J., Liao, I., Lad, V., Liu, Z., Mudide, A., Loughridge, C., ... & Tegmark, M. (2024). Opening the ai black box: program synthesis via mechanistic interpretability. arXiv preprint arXiv:2402.05110.](https://arxiv.org/abs/2402.05110)
