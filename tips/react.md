# React

### Component life-cycle 
<details>
   <summary>constructor</summary>
   constructors are perfect for setting up our Component — create any fields (variables starting with this.) or initialize state based on props received.

   - set initial state
   - if not using class properties syntax — prepare all class fields and bind functions that will be passed as callbacks
   - don't cause any side effects (AJAX calls etc.)
</details>

<details>
   <summary>componentWillMount</summary>

   - does not differ much from constructor
   - fetched data can be no available before the initial render is ready
   - might being called multiple times before the initial render is called
   - is called when using server-side-rendering, `componentDidMount` will not
   - `setState` will not trigger a re-render.
</details>

<details>
   <summary>componentWillReceiveProps(nextProps)</summary>
  
  - will be called in each update life-cycle caused by changes to props
  - sync state to props
</details>

<details>
   <summary>shouldComponentUpdate(nextProps, nextState, nextContext)</summary>
  
  - use for increasing performance of poor performing Components
  - don't call this.setState
</details>

<details>
   <summary>componentWillUpdate(nextProps, nextState)</summary>
   
   This function is commonly used to perform state and props synchronization for when parts of your state are based on props.
   
   - synchronize state to props
</details>

<details>
   <summary>componentDidUpdate(prevProps, prevState, prevContext)</summary>
   
   - is executed when the new updated component has been updated in the DOM. This method is used to re trigger the third party libraries used to make sure these libraries also update and reload themselves.
</details>

<details>
   <summary>componentDidCatch(errorString, errorInfo)</summary>
   
   - is triggered if the render() function throws an error.
</details>

<details>
   <summary>componentDidMount</summary>
   
   - is executed after the component did mount on the dom. 
   - The API calls should be made in componentDidMount method always.
</details>

<details>
   <summary>componentWillUnmount</summary>
   
   - is executed just before the component gets removed from the DOM.
   - In this method, we do all the cleanups related to the component. 
For example, on logout, the user details and all the auth tokens can be cleared before unmounting the main component.
</details>

### Spread attributes

Let us imagine that you have a component that accepts N number of properties. Passing these down can be tedious and unwieldy if the number grows.
```js
<Component x={} y={} z={} />
```

```js
const props = { x: 1, y: 1, z:1 };
<Component {...props} />
```
