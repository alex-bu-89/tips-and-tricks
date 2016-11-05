# Monitor DOM events and functions in Chrome
```JavaScript
// subscribe to events
monitorEvents(document.body, "click");

// unsubscribe from events
unmonitorEvents(document.body, "click")

// view event listeners registered on objects
getEventListeners(document);

// subscribe to functions
monitor(someFunction);
```

[Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)
