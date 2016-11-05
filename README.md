# Monitor DOM events and functions in Chrome
```JavaScript
// subscribe to event
monitorEvents(document.body, "click");

// unsubscribe to event
unmonitorEvents(document.body, "click")

// subscribe to functions
monitor(someFunction);
```
