# React

### Component life-cycle
#### constructor
* set initial state
* if not using class properties syntax — prepare all class fields and bind functions that will be passed as callbacks
```
don't cause any side effects (AJAX calls etc.)
```

### Spread attributes

Let us imagine that you have a component that accepts N number of properties. Passing these down can be tedious and unwieldy if the number grows.
```js
<Component x={} y={} z={} />
```

```js
var props = { x: 1, y: 1, z:1 };
<Component {...props} />
```
