## Chrome Dev Tools

#### Monitor DOM events and functions in Chrome
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

#### Design mode
```JavaScript
document.designMode = 'on'
```

#### Copy obj / var to buffer
```JavaScript
copy (someVariable)
```

#### Link to selected DOM element
```JavaScript
// link to DOM node
$0

// get JavaScript obj
console.dir($0)

// using JQuery
$($0).data()
```

#### Arrow functions in console
```JavaScript
// you can use arrow functions in console
performance.getEntries().filter(entry => entry.name)
```
