# Browser perfomance

## Performance Baseline

Define custom metrics: how fast can we render important
pixels and provide input responsiveness for them.

- Test devices: Moto G4, mid-range Samsung, Nexus 5X
- Throttle: 300ms RTT, 1.5/0.7Mbps up with 5× CPU slowdown
- Budget: SpeedIndex < 1250, TTI < 5s, Critical budget < 170Kb
- Critical payload: first 14–16Kb (with 400ms RTT in 1s)
- JavaScript has the heaviest cost of the experience
- Parse/exec times can be 2–5x times higher on low-end devices.
- CPU hogs/memory are becoming a new bottleneck
- Optimize with tree-shaking, scope hoisting, code-splitting etc
- Goal: keep the time-to-interactive close to first meaningful paint.
