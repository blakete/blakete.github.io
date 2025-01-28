---
layout: post
title: "DeepSeek-R1-Zero"
author:
- Blake Edwards
---
**Last Updated:** 2025-01-28T19:20:59+0000

**Please come back later this article is under construction!**

## Summary

In this article we will cover the key insights from and perspectives on the following recent research released by DeepSeek AI lab:
1. [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf)
2. [DeepSeek-V3 Technical Report](https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf)
3. [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/pdf/2402.03300)

## DeepSeek-R1
todo

## DeepSeek-V3
todo

## DeepSeekMath
todo

## Currently Misc Dumped

Here are some notable quotes from their accompanying paper (linked below):
- “The findings reveal that RL empower DeepSeek-R1-Zero to attain robust reasoning capabilities without the need for any supervised fine-tuning data. This is a noteworthy achievement, as it underscores the model’s ability to learn and generalize effectively through RL alone.”
- “The self-evolution process of DeepSeek-R1-Zero is a fascinating demonstration of how RL can drive a model to improve its reasoning capabilities autonomously.”
- “DeepSeek-R1-Zero naturally acquires the ability to solve increasingly complex reasoning tasks by leveraging extended test-time compu- tation. This computation ranges from generating hundreds to thousands of reasoning tokens, allowing the model to explore and refine its thought processes in greater depth.”
- “rather than explicitly teaching the model on how to solve a problem, we simply provide it with the right incentives, and it autonomously develops advanced problem-solving strategies.”

Feels like an AlphaGo like moment for LLMs!

Quotes source: https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf (edited) 

---

What didn't work for them:

Also, they explored using Monte Carlo Tree Search (MCTS) to enhance language model inference by breaking answers into stepwise components guided by a pre-trained value model. However, they found that scaling training faced key hurdles such as token generation’s exponentially larger search space (vs. chess) led to local optima when constraining node expansions and training a sufficiently precise value model to guide iterative improvement was difficult and didn’t yield great results. While MCTS boosts inference-time performance with a pre-trained value model, achieving self-improvement through iterative self-search with an MCTS approach remains a challenge.

They also tried Process Reward Modeling (PRM) and found it also wasn’t great because vague stepwise evaluation (ill-defined intermediate steps and unreliable automated/manual verification) and reward hacking/training instability outweighed its benefits in guided search or reranking.

Also they say “Through RL, DeepSeek-R1-Zero naturally emerges with numerous powerful and intriguing reasoning behaviors. However, it encounters challenges such as poor readability, and language mixing.” Which reminds me of a conversation I had with someone a while ago:
"Like AlphaGo branching through its game tree using Monte Carlo Tree Search (MCTS) guided by reinforcement learning (RL), my understanding is that o1 performs meta-prompting to iteratively query and refine its navigation through its own latent space via token feedback. In the limit, this process naturally converges on whichever token sequences—regardless of language—best help o1 steer, “reason”, and carry intermediate information to yield the most rewarded + probable answer. In line with “Embers of Auto-Regression,” which shows these models often perform better on problems that appear more frequently in their training corpus, o1 may learn to switch to another language if it’s more likely to correctly solve a sub-problem in that language, then steer itself back to the target language for the final output. Over time, it will probably increasingly blend words across languages or invent entirely new token patterns if they prove more effective for internal latent space trajectory steering/reasoning—so, yes, I believe it may very well “think” better in a different language!" - [X Post Source](https://x.com/humanity_dao/status/1877219387930796159)

---

"🚨The Bitter Lesson Proves Right—Again.🚨

Rich Sutton’s iconic essay The Bitter Lesson argued that AI breakthroughs come not from human-crafted rules, but from general methods that scale with computation. The latest paper on DeepSeek-R1-Zero is yet another validation of this truth.

DeepSeek-R1-Zero abandons supervised fine-tuning and RLHF for learning how to reason, and instead relies on reinforcement learning (RL) to autonomously drive iterative self-improvement. Like AlphaGo/AlphaZero, which rejected handcrafted heuristics in favor of massive iterative self-play, DeepSeek-R1-Zero leverages extensive test-time compute, speculative rollouts, and reward-driven optimization to explore solutions and refine policies based on environment feedback. Its reward system relies on rule-based verification, allowing it to bypass neural reward modeling, direct human feedback, and supervised training on human reasoning traces.

By embracing open-ended computation over trying to encode human intuition, DeepSeek-R1-Zero exemplifies Sutton’s thesis: general intelligence will arise from scaling compute to its fullest potential." - [X Post Source](https://x.com/humanity_dao/status/1884283455443181636)

TODO: add the token prediction training efficiency thing here.

You can run (distilled versions) of DeepSeek R1 locally using https://ollama.com/library/deepseek-r1

---

Other interesting theories:
- CCP PsyOp theory:
    - "deepseek is a ccp state psyop + economic warfare to make american ai unprofitable. they are faking the cost was low to justify setting price low and hoping everyone switches to it damage AI competitiveness in the us. dont take the bait" [source X Post](https://x.com/nealkhosla/status/1882859736737194183)

---

### Acknowledgements
This aggregated report on DeepSeek-R1 was made possible by the [MIT ACL](https://acl.mit.edu/) and Professor Jon How who employs me as a Graduate Research Assistant and asked me to put this together. Thank you!

### References
- 