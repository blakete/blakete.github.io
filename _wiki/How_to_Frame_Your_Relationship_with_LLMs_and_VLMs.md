---
layout: wiki_page
title: "How to Frame Your Relationship with LLMs and VLMs"
date: 2025-06-25
last_updated: 2025-06-25
author:
- Blake Edwards
tags: [LLMs, VLMs, mental models, AI best practices]
permalink: /secret-wiki/how-to-frame-your-relationship-with-llms-and-vlms
show_on_wiki: false
show_on_secret_wiki: true
---

It is really important to frame your relationship with AI in a way that allows you to get the most utility from it while avoiding as much downside as possible. Below is a synthesis of frameworks and mental models drawn from my day-to-day work at MIT and conversations with industry experts, as of 06/25/2025.

<img src="/assets/images/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs/94587a2c-3dc9-45e6-92ef-5705eaa64638_1600x1326.jpg" alt="Pragmatic Engineer's useful diagram" style="width: 650px">

<img src="/assets/images/How_to_Frame_Your_Relationship_with_LLMs_and_VLMs/Andrej Karpathy Software Is Changing Again.png" alt="Andrej Karpathy: Software Is Changing (Again)" style="width: 650px">

<!-- ## Section 1: LLMs as “Thought Partners,” Not Autopilots

- **Prompt with purpose**  
  Think of every prompt as a mini research brief. Specify your scope, constraints, and desired tone up front. This prevents the model from wandering into irrelevant or harmful territory.

- **Iterative refinement**  
  Expect to dial in your question over multiple rounds. Use each response to sharpen your next prompt—this “prompt-refine” loop yields more precise and useful outputs.

- **Confidence calibration**  
  Treat LLM suggestions like insights from a junior teammate: helpful but unvetted. Always fact-check, especially on technical or sensitive topics.

_Mental models borrowed from experts:_  
1. **Rubber-Duck Prompting** (Google Research) – Explain your problem step by step as if to a rubber duck; the act of externalizing your assumptions often clarifies your true needs.  
2. **Chain-of-Thought Scaffolding** (OpenAI) – Encourage the model to break its reasoning into explicit steps, then audit each step for logical consistency.

## Section 2: VLMs as “Perception Enhancers,” Not Oracles

- **Rich context provision**  
  Supply clear, well-lit images with minimal clutter and, when possible, annotations. The clearer your input, the fewer misinterpretations the model makes.

- **Hybrid validation workflows**  
  Combine VLM outputs with human review or traditional vision tools (e.g., OpenCV filters) to verify detections and classifications.

- **Error logging and analysis**  
  When the model mislabels or overlooks details, log these instances to build a “failure corpus.” Reviewing this data quarterly reveals blind spots and guides retraining or prompt tweaks.

_Mental models borrowed from experts:_

1. **Active Vision Loops** (MIT CSAIL) – Use initial model feedback to inform subsequent image captures or preprocessing steps, creating a dynamic data-collection process.

2. **Saliency Auditing** (Apple AI) – Generate and inspect attention maps to see where the model focused; discrepancies highlight areas needing better framing or training.

## Section 3: Cultivating a Sustainable AI Partnership

1. **Define clear guardrails**  
   Establish boundaries for automated vs. human-reviewed tasks. Document these in a shared playbook so teams know when to trust the model and when to intervene.

2. **Implement continuous learning loops**  
   Track performance metrics (accuracy, response time, error rates) and update prompt templates, preprocessing pipelines, and model versions on a quarterly cadence.

3. **Engage in community exchange**  
   Share your mental models and lessons learned in expert forums (e.g., AI Alignment Slack, ArXiv Sanity Discord). Crowdsourcing best practices helps everyone evolve faster. -->

## References

1. [Andrej Karpathy @ Y-Combinator – Software Is Changing (Again)](https://youtu.be/LCEmiRjPEtQ?si=f0JSJLAgDk0xa58E)

