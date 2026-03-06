---
layout: post
title: "Teaching a Robot to Look Before It Grabs"
date: 2026-03-05
last_updated: 2026-03-05
author:
- Blake Edwards
tags: [robotics, manipulation, motion planning, MIT]
permalink: /wiki/belief-space-rrt
show_on_wiki: true
show_on_secret_wiki: false
---

<div style="text-align: center;">
  <img src="/assets/images/belief_space_rrt/RRBT_demo_of_success.gif" alt="Robot arm successfully picking and placing an object after resolving uncertainty" style="width: 100%; max-width: 800px;">
</div>

Here's a [Kuka iiwa](https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/lbr-iiwa) robot arm that figures out *where* an object is before trying to grab it. Sounds obvious, right? But most motion planners skip that step entirely -- they assume they already know the exact location of everything. In the real world, sensors are noisy, cameras lie, and depth data is messy. This project builds a planner that actually deals with that uncertainty head-on.

This was a final project for [MIT 6.4212 (Robotic Manipulation)](https://manipulation.csail.mit.edu/Fall2024/) that I built with [Thiago Veloso](https://github.com/thiago-jvds). We called it "Search-Then-Commit" because that's exactly what the robot does: search for information first, then commit to the grasp only when it's confident enough.

---

## The Setup

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/belief_space_rrt/figure_1.png" alt="Experiment setup with Kuka arm, two bins, cameras, and sensing regions" style="display: block; margin: auto; width: 100%; max-width: 600px;">
  <figcaption>The simulation environment: a Kuka iiwa arm, two candidate bins, six depth cameras, and color-coded sensing regions.</figcaption>
</figure>

The scenario: a mustard bottle is hiding in one of two bins, and the robot doesn't know which one. Six depth cameras are watching the scene, but they're noisy -- outside of certain "sweet spot" zones (the green and orange boxes in the image), the sensor data is basically useless. The robot's job is to pick up the bottle and place it in the goal bin on the right.

A naive planner would just guess a bin, plan a path, and go for the grasp. If it guesses wrong -- which happens about half the time -- that's a failed pick. Our planner is smarter than that.

---

## How It Works

The robot's strategy has two phases, both driven by uncertainty reduction:

**Phase 1 -- "Which bin is it in?"** The robot moves its end-effector into the green sensing zone, where the cameras give reliable readings. By collecting a few good observations, it runs a filter to figure out which bin actually contains the object. No more coin-flip guessing.

**Phase 2 -- "Where exactly is it?"** Once the robot knows the right bin, it still doesn't know the precise XY position of the bottle (sensor noise, remember). So it moves to the orange sensing zone to collect high-fidelity position data and shrink its uncertainty down to a tight estimate. Only then does it commit to a grasp trajectory.

The key insight: the planner treats uncertainty as a first-class citizen. It doesn't just plan paths through physical space -- it plans paths through *belief space*, choosing motions that actively reduce what the robot doesn't know.

---

## Step by Step

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/belief_space_rrt/figure_3.png" alt="Five stages of a successful execution: start, bin sensing, position sensing, grasp, and goal placement" style="display: block; margin: auto; width: 100%; max-width: 800px;">
  <figcaption>A successful run from start to finish: the robot senses which bin, refines the object's position, grasps, and places.</figcaption>
</figure>

The progression above shows the full pipeline in action. The robot starts at home with a 50/50 belief about which bin the object is in, actively gathers information in two phases, and only commits to a grasp once its uncertainty is low enough. Clean and deliberate.

---

## Results

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/belief_space_rrt/figure_2.png" alt="Success rate comparison: 90% for our planner vs 10% for baseline" style="display: block; margin: auto; width: 100%; max-width: 500px;">
  <figcaption>Our uncertainty-aware planner succeeds 90% of the time. The baseline that ignores uncertainty? 10%.</figcaption>
</figure>

The numbers speak for themselves. Our planner completed the pick-and-place task 9 out of 10 times. The baseline planner that doesn't account for uncertainty? 1 out of 10. The baseline's main failure mode was picking the wrong bin entirely -- something our planner completely eliminates by actively sensing first.

<figure style="margin: auto; text-align: center;">
  <img src="/assets/images/belief_space_rrt/figure_4.png" alt="Failure mode breakdown showing baseline fails mostly from wrong bin prediction" style="display: block; margin: auto; width: 100%; max-width: 500px;">
  <figcaption>Why the baseline fails: half the time it picks the wrong bin. Our planner never makes that mistake.</figcaption>
</figure>

---

## Full Presentation

<div style="text-align: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/j6uy53jciCc" title="MIT 6.4212 Final Project - Search-Then-Commit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%;"></iframe>
</div>

---

## Links

- [GitHub Repository](https://github.com/thiago-jvds/mit-6.4212-belief-space-rrt)
- [Full Paper (PDF)](https://github.com/thiago-jvds/mit-6.4212-belief-space-rrt/blob/main/results/6_4212_RRBT_final_report.pdf)
- [Full Demo Video (MP4)](https://github.com/thiago-jvds/mit-6.4212-belief-space-rrt/blob/main/results/RRBT_demo_of_success.mp4)
