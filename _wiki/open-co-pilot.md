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

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mBYH2uKsEzM?autoplay=1&mute=1&loop=1&playlist=mBYH2uKsEzM" title="Open Co-Pilot real-time object detection demo — iPhone XR windshield-mounted in a Honda Pilot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

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

## Future Work

A natural next step for Open Co-Pilot is closing the loop between detection and action — moving beyond passive identification of road conditions to actively controlling vehicle systems in response. Today, the app sees the world. Tomorrow, it could react to it.

### Phone-to-CAN Bus Bridge

The core enabler would be a small, open-hardware OBD-II dongle built around an ESP32 microcontroller and a CAN transceiver (e.g., MCP2551 or SN65HVD230). The dongle plugs into the car's standard 16-pin OBD-II port, tapping CAN High (pin 6) and CAN Low (pin 14) for bidirectional communication with the vehicle's CAN bus. The dongle powers itself directly from the OBD-II port's 12V battery pin (pin 16) through an onboard voltage regulator — no external wiring needed. It communicates with the phone over Bluetooth, so the entire system is just two pieces: a windshield-mounted phone and a small dongle tucked under the dash.

### Automated Comfort & Safety Responses

With this bridge in place, Open Co-Pilot's existing vision pipeline could drive real vehicle actions:

- **Vision-Activated Wipers** — The phone camera already watches the road. A lightweight rain or debris detection model running on-device could recognize when windshield visibility degrades and send a CAN command to activate or adjust wiper speed — useful for cars without rain-sensing wipers, or as a smarter alternative to the stock sensor.
- **Intelligent Air Recirculation** — Using a combination of GPS (tunnel detection via signal loss or map data), accelerometer patterns (stop-and-go traffic detection), and optionally the camera (proximity to diesel trucks or heavy exhaust sources), the app could automatically switch the HVAC to cabin recirculation mode to keep exhaust fumes out, then switch back to fresh air when conditions clear.

### CAN Message Discovery

The biggest practical hurdle is that CAN message IDs and payloads are manufacturer-specific and largely undocumented. Fortunately, the comma.ai [opendbc](https://github.com/commaai/opendbc) project provides decoded CAN databases for many popular vehicles. For unsupported cars, the same OBD-II dongle can double as a CAN sniffer — toggling a control manually while logging bus traffic to reverse-engineer the relevant messages using tools like SavvyCAN or Linux `can-utils`.

### Safety Boundaries

All proposed automations target non-safety-critical comfort systems (wipers, HVAC). The firmware should enforce a strict allowlist of CAN message IDs it is permitted to transmit, preventing accidental writes to powertrain, braking, or steering ECUs. Rate-limiting outgoing messages further protects against bus flooding.

## References

- [Open-CoPilot on GitHub](https://github.com/blakete/Open-CoPilot)
