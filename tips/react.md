# React

### Component life-cycle 
<details>
   <summary><b>constructor</b></summary>
   constructors are perfect for setting up our Component — create any fields (variables starting with this.) or initialize state based on props received.

   - set initial state
   - if not using class properties syntax — prepare all class fields and bind functions that will be passed as callbacks
   - don't cause any side effects (AJAX calls etc.)
</details>
 
<details>
   <summary><b>componentWillMount</b></summary>

   - does not differ much from constructor
   - fetched data can be no available before the initial render is ready
   - might being called multiple times before the initial render is called
   - is called when using server-side-rendering, `componentDidMount` will not
   - `setState` will not trigger a re-render.
</details>

<details>
   <summary><b>componentWillReceiveProps(nextProps)</b></summary>
  
  - will be called in each update life-cycle caused by changes to props
  - sync state to props
</details>

<details>
   <summary><b>shouldComponentUpdate(nextProps, nextState, nextContext)</b></summary>
  
  - use for increasing performance of poor performing Components
  - don't call this.setState
</details>

<details>
   <summary><b><b>componentWillUpdate(nextProps, nextState)</b></b></summary>
</details>

<details>
   <summary><b><b>componentDidUpdate(prevProps, prevState, prevContext)</b></b></summary>
</details>

<details>
   <summary><b><b>componentDidCatch(errorString, errorInfo)</b></b></summary>
</details>

<details>
   <summary><b><b>componentDidMount</b></b></summary>
</details>

<details>
   <summary><b><b>componentWillUnmount</b></b></summary>
</details>

### Spread attributes

Let us imagine that you have a component that accepts N number of properties. Passing these down can be tedious and unwieldy if the number grows.
```js
<Component x={} y={} z={} />
```

```js
var props = { x: 1, y: 1, z:1 };
<Component {...props} />
```
