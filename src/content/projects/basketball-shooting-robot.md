---
title: Basketball-Shooting Robot
summary: A VEXcode competition robot programmed to sink shots on demand — my first real closed-loop feedback problem.
category: robotics-and-embedded-systems
featured: true
year: "TODO — competition year"
role: Designer & programmer
technologies:
  - VEXcode
hardware:
  - VEX motors
  - VEX sensors
  - Custom launcher mechanism
problem: |
  Design and program a robot that can launch a ball into a target reliably during a VEX competition round.
process: |
  Iterative mechanical tuning of the launcher — angle, spring tension, wheel speed — paired with VEXcode logic to sequence pickup, aim, and release. Every trial run generated data that fed back into the next revision of the arm.
challenges: |
  Getting the launch angle to _repeat_. Small mechanical differences between runs (battery voltage, motor warm-up, ball wear) meant open-loop timing wasn't enough. Building around that variance is what turned this into a real feedback-control problem.
solution: |
  A closed-loop shot: sensor-informed timing on the launcher, mechanical tuning to reduce variance at the source, and defensive coding for the cases mechanical tuning couldn't fix.
results: |
  Competed with the robot at VEX tournaments. Not a tournament win — the value was in the closed-loop tuning practice, not the placement.
lessons: |
  Mechanical iteration teaches feedback loops the way software rarely does — the physical world doesn't let you copy-paste around your bugs.
status: shipped
order: 2
---

## The build

A ball-launching robot for VEX competition play. Chassis + tower + articulated launcher arm, programmed in VEXcode. The interesting engineering wasn't in any one part — it was in getting the same shot twice in a row.

## What it actually taught

The mechanical iteration was the point. Every session at the practice field generated data — where the ball landed, why it fell short, whether the motor was warm or cold. That's the tightest feedback loop I'd been part of at the time. It's why I know I want to do this professionally.

_TODO — competition year, team name / number, exact tournament(s) attended. Fill in when you have the record in front of you._
