# Chrome Dev Tools

[Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)

### Filter chrome extension from dev tools

```
-scheme:chrome-extension
```

### Monitor DOM events and functions in Chrome
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

### Design mode
```js
document.designMode = 'on'
```

### Copy obj / var to buffer
```JavaScript
copy(someVariable)
```

### Link to selected DOM element
```js
// link to selected DOM node
$0

// get JavaScript obj
console.dir($0)

// using JQuery
$($0).data()
```

### Arrow functions in console
```js
// use arrow functions in console
performance.getEntries().filter(entry => entry.name)
```

### Pause JavaScript execution
```
- press fn + F8 (osx)
- inspect elements
```

### Filter chrome-extension resources in network tab

In the network tab filter box, enter the string
```
-scheme:chrome-extension
```
