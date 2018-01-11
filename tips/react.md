# React

### Component life-cycle
* #### constructor
   constructors are perfect for setting up our Component — create any fields (variables starting with this.) or initialize state based on props received.
   
  - set initial state
  - if not using class properties syntax — prepare all class fields and bind functions that will be passed as callbacks
  - don't cause any side effects (AJAX calls etc.)
  
* #### componentWillMount
  - does not differ much from constructor
  - fetched data can be no available before the initial render is ready
  - might being called multiple times before the initial render is called
  - is called when using server-side-rendering, `componentDidMount` will not
  - `setState` will not trigger a re-render.

* #### componentWillReceiveProps(nextProps)
  - will be called in each update life-cycle caused by changes to props
  - sync state to props

* #### shouldComponentUpdate(nextProps, nextState, nextContext)
  - use for increasing performance of poor performing Components
  - don't call this.setState
  
* #### componentWillUpdate(nextProps, nextState)

* #### componentDidUpdate(prevProps, prevState, prevContext)

* #### componentDidCatch(errorString, errorInfo)

### Spread attributes

Let us imagine that you have a component that accepts N number of properties. Passing these down can be tedious and unwieldy if the number grows.
```js
<Component x={} y={} z={} />
```

```js
var props = { x: 1, y: 1, z:1 };
<Component {...props} />
```
