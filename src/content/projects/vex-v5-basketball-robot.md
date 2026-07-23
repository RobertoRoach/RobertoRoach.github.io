---
title: VEX V5 Basketball-Shooting Robot
summary: Designed, constructed, and programmed a VEX V5 basketball-shooting robot for a classroom engineering competition. Placed 1st in the class competition.
category: robotics-and-embedded-systems
featured: false
year: 2024
role: Designer, Builder & Programmer
technologies:
  - VEXcode
hardware:
  - VEX V5 platform
  - VEX motors
  - Optical sensor
  - Distance sensor
  - Inertial sensor
  - Custom shooting mechanism
  - Custom ball intake
problem: |
  Design and program a VEX V5 robot capable of picking up balls, aiming, and shooting them into a target reliably during a classroom engineering competition.
process: |
  Mechanical design of the intake and shooter, followed by sensor integration and control code in VEXcode. The optical sensor handled object detection, the distance sensor measured range to the target, and the inertial sensor tracked orientation for consistent aim. Iterative testing to tune motor speed, launch angle, and timing until the shot repeated.
challenges: |
  Making the shot repeatable. The tolerances of a classroom robot — battery voltage drop, mechanical wear on the launcher, motor warm-up — mean open-loop timing isn't enough on its own. Closing the loop with the sensors on board was where the interesting engineering happened.
solution: |
  A combined mechanical + sensor + software approach: mechanical tuning to reduce the launcher's variance at the source, plus sensor-informed positioning and timing to compensate for what mechanical tuning couldn't fix.
results: |
  1st place in the classroom engineering competition. Note — this was an internal class competition, not an external VEX Robotics Competition tournament.
lessons: |
  Building a repeatable shot is where I first felt what a closed-loop feedback problem is actually like. Every trial run generated data that shaped the next revision of the arm.
status: shipped
order: 6
---

## The build

A VEX V5 basketball-shooting robot, built for a classroom engineering competition. The interesting engineering wasn't in any single part — it was in getting the same shot twice in a row across a full match.

## Sensors

- **Optical sensor** — object detection during pickup and aim.
- **Distance sensor** — range to the target for shot calibration.
- **Inertial sensor** — orientation tracking for consistent robot heading.

## Scope

This was an internal classroom engineering competition, not an external VEX Robotics Competition tournament. The 1st-place result refers specifically to that class competition.
