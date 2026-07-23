---
title: Arduino Embedded Audio System for Odyssey of the Mind
summary: An Arduino-based embedded audio system designed and built for an Odyssey of the Mind competition — Bluetooth Low Energy control, 10 GB of local audio storage, and playback that works with no internet connection.
category: robotics-and-embedded-systems
featured: true
year: "Early — first Arduino work at age 11 in Argentina"
role: Designer & Builder
technologies:
  - Arduino (C++)
  - Bluetooth Low Energy (BLE)
hardware:
  - Arduino microcontroller
  - BLE module
  - 10 GB local audio storage
  - Speaker system
problem: |
  A live Odyssey of the Mind performance needs a reliable audio system that works on stage, without internet, and without a laptop plugged into the speakers. Consumer Bluetooth speakers weren't enough — the team needed something they could control precisely and that couldn't drop mid-performance.
process: |
  Built around an Arduino microcontroller for control, a BLE module for wireless triggering during the performance, and 10 GB of local audio storage so every cue lived on the device itself. Wired the microcontroller to the speaker system so playback could be triggered live without depending on Wi-Fi or a phone hotspot.
solution: |
  A self-contained embedded audio system: BLE-triggered, locally stored, and integrated directly into the performance's speaker setup. Runs completely offline once loaded.
lessons: |
  This is where hardware + software integration stopped being a school topic and started being a real constraint. If the audio drops mid-performance, the team loses the round. That pressure is why I still trust hardware I've assembled myself over black-box consumer devices.
status: shipped
order: 7
---

## What it does

- **Arduino-based control** — a microcontroller running the playback logic.
- **Bluetooth Low Energy** — wireless triggering during the live performance.
- **10 GB of local audio storage** — every cue lives on the device.
- **Offline playback** — no internet, no phone hotspot, no laptop required.
- **Speaker-system integration** — wired directly to the performance's audio setup.

## Why it mattered

Odyssey of the Mind performances are live, timed, and unforgiving. A dropped cue costs the round. An embedded audio system whose only failure mode is "the microcontroller stops running" beats a consumer Bluetooth speaker whose failure modes include Wi-Fi, pairing, background updates, and dead phone batteries.

## Where I started

My first Arduino work was at **age 11, while living in Argentina**. This project is one of the direct descendants of that starting point — the same "build the thing yourself and trust the hardware" instinct, applied to a real live-performance constraint.
