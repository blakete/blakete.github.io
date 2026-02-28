---
layout: post
title: "The OSI Model"
date: 2026-02-28
last_updated: 2026-02-28
author:
- Blake Edwards
tags: [networking, fundamentals, systems]
permalink: /wiki/osi-model
show_on_wiki: true
show_on_secret_wiki: false
---

The Open Systems Interconnection (OSI) model is a conceptual framework that describes how data moves through a network in seven layers. Each layer has a specific job and communicates with the layers directly above and below it.

## The Seven Layers

### Layer 7 — Application

The layer users interact with. HTTP, FTP, SMTP, DNS — these are all application-layer protocols. This layer provides network services directly to end-user applications.

### Layer 6 — Presentation

Handles data translation, encryption, and compression. Converts data between the format the application uses and the format the network requires. SSL/TLS encryption lives here conceptually, as does character encoding (ASCII, UTF-8) and data serialization.

### Layer 5 — Session

Manages sessions between applications — establishing, maintaining, and terminating connections. Think of it as the layer that keeps track of whose turn it is to talk. NetBIOS and RPC operate here.

### Layer 4 — Transport

Ensures reliable (or intentionally unreliable) end-to-end data delivery. TCP provides ordered, error-checked delivery with flow control. UDP trades reliability for speed. This layer segments data and handles port numbers.

### Layer 3 — Network

Routing and logical addressing. IP addresses live here. Routers operate at this layer, making forwarding decisions based on destination IP. Protocols: IP, ICMP, OSPF, BGP.

### Layer 2 — Data Link

Handles node-to-node data transfer and MAC addressing. Switches operate here. This layer frames packets from Layer 3 and manages access to the physical medium. Split into two sublayers:
- **LLC** (Logical Link Control) — flow control and error detection
- **MAC** (Media Access Control) — physical addressing and channel access

### Layer 1 — Physical

Raw bits on the wire (or air). Cables, voltages, pin layouts, radio frequencies, fiber optics. Hubs and repeaters operate here.

## The Mental Model

When data is sent, it travels **down** the stack — each layer wraps the data with its own header (encapsulation). When received, it travels **up** — each layer strips its header and passes the payload upward (decapsulation).

| Sending | Receiving |
|---------|-----------|
| Application → adds data | Physical → receives bits |
| Transport → adds port info (segment) | Data Link → strips frame header |
| Network → adds IP info (packet) | Network → strips IP header |
| Data Link → adds MAC info (frame) | Transport → strips segment header |
| Physical → transmits bits | Application → delivers data |

## Common Mnemonic

**Please Do Not Throw Sausage Pizza Away** (Physical → Application)

Or top-down: **All People Seem To Need Data Processing**

## Why It Matters

The OSI model is a *reference model* — real-world protocols don't map to it perfectly (TCP/IP collapses several layers). But it gives you a shared vocabulary for debugging: "Is this a Layer 2 problem or a Layer 3 problem?" is a question every network engineer asks.
