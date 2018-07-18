# Patterns

## Brute Force

```
Enumerate all possible solutions, and check them for correctness.
```

Want to get the highest product of 3 numbers in an array? Grab every set of 3 numbers ("all possible solutions"), multiply them, and keep track of the max ("check them for correctness").

This idea can be applied to most questions, and it's a great way to get from "I have no idea how to even get started" to "I have a way to break down this problem."

The brute force solution is usually not the most efficient ("big O time cost."), but it can still be a helpful way to start.

## Greedy

```
Keep track of the best answer 'so far,' in one pass through the input."
```

The tricky part is answering the question, "what values will I need to keep updated at each step in order to have the final answer when I reach the end of the input?"
