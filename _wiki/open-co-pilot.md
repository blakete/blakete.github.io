---
layout: post
title: "Open Co-Pilot"
date: 2026-03-23
last_updated: 2026-03-23
author:
- Blake Edwards
tags: [computer vision, artificial intelligence, robotics]
permalink: /wiki/open-co-pilot
show_on_wiki: true
show_on_secret_wiki: false
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/mBYH2uKsEzM?autoplay=1&mute=1&loop=1&playlist=mBYH2uKsEzM" title="Open Co-Pilot real-time object detection demo — iPhone XR windshield-mounted in a Honda Pilot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Waze community reporting interface — report accidents, construction, and more for other drivers](/assets/images/open-co-pilot/1.jpeg)

![Open Co-Pilot concept — real-time object detection alongside Waze navigation, without taking your eyes off the road](/assets/images/open-co-pilot/2.jpeg)

Open Co-Pilot is an idea I started experimenting with around 6 years ago — a hands-free driving assistant that uses real-time computer vision to automatically detect and identify road hazards. No screen taps, no looking away from the road. Just mount your phone on the windshield and drive. It's also fully open source, built as a free alternative to the manual reporting workflows in apps like Waze.

To date, no one has really fully executed and capitalized on this idea. Some day in the near future I may pick it back up, finish it, and publish it on the App Store for fun.

## What It Does

The idea is to combine Waze-style navigation with automated visual awareness. The system runs two core capabilities simultaneously:

**Object Detection & Localization** — Using YOLOv4, the system identifies and localizes objects on the roadway in real time during actual driving scenarios.

**Monocular Depth Perception** — Rather than requiring stereo cameras or LiDAR, Open Co-Pilot estimates depth and spatial relationships from a single camera using self-supervised monocular depth prediction. This means any modern smartphone can serve as the sensor.

## Hardware

The project is designed to run on consumer Apple devices with an A12 chip or newer (iPhone XR and later). All you need is a stable windshield mount and the app.

## Why It Matters

Apps like Waze showed that crowdsourced road data is incredibly valuable, but reporting still requires manual interaction — tapping buttons while driving. Open Co-Pilot automates the detection entirely so drivers never have to take their hands off the wheel or their eyes off the road. And because it's open source, anyone can run it, improve it, or adapt it — no expensive ADAS package required, just the phone in your pocket.

## References

- [Open-CoPilot on GitHub](https://github.com/blakete/Open-CoPilot)
