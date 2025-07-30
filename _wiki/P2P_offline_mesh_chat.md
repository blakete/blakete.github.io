---
layout: post
title: "Why P2P Mesh Network Chats Like 'bitchat mesh' Have't Succeed... Yet"
date: 2025-07-08
last_updated: 2025-07-16
author:
- Blake Edwards
tags: [decentralization, mesh networking, P2P communication, digital sovereignty]
permalink: /wiki/bitmesh-hybrid-mesh-chat
hidden_from_wiki: false
hidden_from_secret_wiki: true
---

Ever since my white-hat hacking days back in 2012-2016, when I was tinkering with LAN traversal techniques for forming P2P [botnets](https://en.wikipedia.org/wiki/Botnet), the dream of a truly global, robust peer-to-peer (P2P) mesh network has been stuck in my head. That fire got reignited recently with [@jack](https://x.com/jack)'s [X post](https://x.com/jack/status/1941989435962212728) dropping [bitchat](https://github.com/permissionlesstech/bitchat), an open-source P2P Bluetooth Low Energy (BLE) chat app with a classic IRC feel, and [@callebtc](https://x.com/callebtc)'s quick follow-up [X post](https://x.com/callebtc/status/1942658144011714829) releasing an interoperable [Android port](https://github.com/callebtc/bitchat-android). 

I'm very excited about and strongly support the development of decentralized P2P mesh networks for general data exchange, of which chat applications like bitchat are a subset, as they could be a game-changer for digital sovereignty and maintaining communications during blackouts, protests, outright censorship, etc. If we look back at apps like [FireChat](https://en.wikipedia.org/wiki/FireChat) and [Bridgefy](https://bridgefy.me/), we can begin to identify why apps like this haven't achieved mainstream adoption and everyday tools yet. There are some gnarly hurdles in the way: adoption roadblocks, incentive gaps, platform pushback, scalability snags, usability headaches, and regulatory BS. The good news? These aren't deal-breakers; they're mostly engineering puzzles waiting for the open-source community to crack. If we want to move past "tech bro" experiments and hit mainstream, we've gotta face them head on. Let's build this thing! 😃

<div style="text-align: center;">
  <a href="https://x.com/jack/status/1941989435962212728">
    <img 
      src="/assets/images/P2P_offline_mesh_chat/IMG_7133.jpeg" 
      alt="Jack Dorsey's announcement of bitchat" 
      style="max-height: 800px; height: auto; width: 100%; max-width: 500px;">
  </a>
  <p style="margin-top: 10px; font-style: italic;">
    <a href="https://x.com/jack">@jack</a>'s original X post announcing the release of bitchat.
  </p>
</div>

<div style="text-align: center;">
  <a href="https://x.com/callebtc/status/1942658144011714829">
    <img 
      src="/assets/images/P2P_offline_mesh_chat/IMG_7134.png" 
      alt="callebtc's Android port of bitchat" 
      style="max-height: 800px; height: auto; width: 100%; max-width: 400px;">
  </a>
  <p style="margin-top: 10px; font-style: italic;">
    <a href="https://x.com/callebtc">@callebtc</a>'s follow-up X post announcing the Android port of bitchat, fully interoperable with <a href="https://x.com/jack">@jack</a>'s iOS version.
  </p>
</div>

---

## Historical Context: Past Attempts and Their Shortcomings

P2P mesh chat apps have popped off during crises, only to fizzle out once the dust settles—usually because of baked-in flaws that kill long-term vibes.

- **[FireChat](https://en.wikipedia.org/wiki/FireChat)**: Dropped in 2014 by [Open Garden](https://www.opengarden.com/), this bad boy used Bluetooth and Wi-Fi for offline messaging and lit up during the [2014 Hong Kong protests](https://www.theguardian.com/world/2014/sep/29/firechat-messaging-app-powering-hong-kong-protests), racking up over 100,000 downloads in a day. It worked okay for organizing when cell service got sketchy, but scalability tanked in massive crowds due to RF interference and network congestion, leading to slow messages and drops. Plus, battery drain was apparently brutal and it lacked real engagement outside emergencies like this. In fact, it shut down in 2019 after the hype died.

- **[Bridgefy](https://bridgefy.me/)**: This one blew up in the [2019 Hong Kong protests](https://news.ycombinator.com/item?id=20861948) with its Bluetooth mesh hopping messages between devices. Available on [Google Play](https://play.google.com/store/apps/details?id=me.bridgefy.main) and [App Store](https://apps.apple.com/us/app/bridgefy/id987837600), it sounded cool, but [security audits](https://www.usenix.org/system/files/sec22fall_albrecht.pdf) exposed major holes like weak encryption, easy user tracking, and spam vulnerabilities. Performance-wise, it degraded hard in dense spots. Messages lagged or failed entirely as the mesh overloaded, making it unreliable for big groups.

- **Other Efforts like [Briar](https://briarproject.org/) and [Serval Project](https://www.servalproject.org/)**: [Briar](https://code.briarproject.org/briar/briar/-/issues/445) is an open-source beast focused on Tor-like security and decentralization, but iOS restrictions on background ops kill reliable mesh on Apple devices—no official iOS app exists because of it. [Serval](https://en.wikipedia.org/wiki/Serval_Project) pushes Wi-Fi direct for phone-to-phone links, but similar [platform hurdles](https://servalpaul.blogspot.com/2020/) like varying Android OEM tweaks and background limits kept it and other apps like it at the time from scaling cross-platform.

These stories show that while P2P meshes can be useful in high-stakes moments, we need to fix some core problems for them to stick around for the long haul.

---

## Key Barriers Preventing Widespread Success

Drawing from those past flops and some deep dives into the tech, here are the big roadblocks that I see. They're interconnected, creating a vicious cycle: poor adoption kills network effects, which tanks incentives, and so on. But hey, we're builders so we can fix this!

### 1. User Adoption and Critical Mass

First off, these apps live or die on having enough users in the same spot. Without critical mass, the mesh is just... empty. bitchat's BLE range tops out at ~300m with relays, but if no one's around running it, your messages go nowhere. Early users bail because it's "useless" 90% of the time because there is no one to chat with!

A workaround could be to start with a hybrid model: Build a torrent-style P2P system over the existing internet—decentralized, E2E encrypted, no central servers, like how [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) shares files today. This gives immediate value for global chats, pulling in users without needing proximity. Then layer on the local mesh (BLE, Wi-Fi, etc.) for offline scenarios. At a concert or protest, the app auto-switches to mesh mode, relaying messages through the crowd. If someone's got internet, it percolates out to the wider network. Boom—useful from day one, building that critical mass organically.

### 2. Economic and Incentive Structures

Even with users, why relay messages for strangers? Relay nodes burn extra battery and data without perks, so folks turn it off or delete the app if they can't. In sparse areas, this kills connectivity; in dense ones, it unevenly loads a few devices.

We need built-in incentives. Crypto micropayments for relaying (e.g. via [Lightning Network](https://lightning.network/) or similar) could reward participants without centralizing things. Or reputation systems where good relays get priority routing. Tie it to the hybrid model: Over-internet P2P could use tokens for premium features, funding mesh development.

### 3. Pressures from Existing Players and OEMs

Big Tech and carriers aren't thrilled about apps bypassing their networks. iOS clamps down on background BLE scanning to "save battery" breaking continuous meshes ([Briar's issue tracker](https://code.briarproject.org/briar/briar/-/issues/445) details this). Android varies by manufacturer and some some cripple Wi-Fi Direct.

Additionally, big players like Big Tech and intel agencies will be incentivized to push back hard to keep control of their ability to surveil us.

### 4. Scalability and Performance Issues

Meshes shine small-scale but have choked in reality. In crowds, RF noise from tons of devices causes delays and lost packets. [FireChat lagged hard during Hong Kong peaks](https://www.networkworld.com/article/930350/mesh-networks-and-firechat-how-hong-kong-protestors-are-keeping-communications-alive.html), becoming near-unusable with 10s of seconds per message. [Bridgefy degraded similarly](https://news.ycombinator.com/item?id=20861948), with hops failing in dense urban spots. Mobility (walking, driving) disconnects neighboring links constantly.

Over-internet P2P has been seen to scale better (like torrents handling millions), but adds latency for real-time chat applications. We probably need a hybrid solution that falls somewhere in between.

### 5. Regulatory and Spectrum Considerations

Ad-hoc networks can bump into RF regulations; for example, some countries limit Wi-Fi power or ban unlicensed meshes altogether. It would be advantageous to utilize other frequency bands for better range, lower interference, and improved reliability, but these often require expensive licenses that are tightly controlled by governments, and incumbent telecom operators are likely to push back aggressively against any reforms or spectrum reallocations that could threaten their established monopolies and revenue streams.

<!-- 
---

## Future Directions: Paths to Overcoming the Barriers

I'm stoked—these are solvable with collab and smarts. Let's sketch some wins:

- **Hybrid Architectures:** Kick off with internet P2P for global reach and adoption, then seamless mesh overlays for offline resilience. Messages hop locally via BLE/Wi-Fi, bridging to net via connected nodes. Check [Meshtastic](https://meshtastic.org/) for LoRa inspo.

- **Incentive Mechanisms:** Crypto rewards for relaying, balanced by decentralized tokens. Reputation boosts for reliable nodes.

- **Platform Advocacy and Standardization:** Lobby Apple/Google for better APIs; push IETF standards for cross-platform P2P.

- **Privacy-Enhancing Tech:** Zero-knowledge for discovery, ephemeral keys—bitchat's [Noise Protocol](https://noiseprotocol.org/) is a solid base.

- **Real-World Testing and Iteration:** Field tests in protests, festivals; modular code for fast tweaks.

- **Bridging with Existing Networks:** Optional internet/LoRa ties, keeping offline core pure.

Tackling these, we can turn bitchat into a "BitMesh" powerhouse for everyone. -->

---

## Concluding Remarks

[@jack](https://x.com/jack) and [@callebtc](https://x.com/callebtc)'s bitchat is are great and have sparked some P2P mesh excitement again. But like FireChat, Bridgefy, and the rest, tech, adoption, incentives, and more have boxed these in as niche tools. I want this to win big and see a resilient, decentralized net that reshapes human freedom come to fruition. Therefore, we have to look at the past failured starts and acknowledge remaining barriers realistically. Let's build the unbreakable mesh we've been dreaming of!
