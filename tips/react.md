# React

### Spread attributes

Let us imagine that you have a component that accepts N number of properties. Passing these down can be tedious and unwieldy if the number grows.
```
<Component x={} y={} z={} />
```

```
var props = { x: 1, y: 1, z:1 };
<Component {...props} />
```
