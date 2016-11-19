# Chrome Dev Tools

[Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)

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

#### Design mode
```js
document.designMode = 'on'
```

#### Copy obj / var to buffer
```JavaScript
copy (someVariable)
```

#### Link to selected DOM element
```js
// link to selected DOM node
$0

// get JavaScript obj
console.dir($0)

// using JQuery
$($0).data()
```

#### Arrow functions in console
```js
// use arrow functions in console
performance.getEntries().filter(entry => entry.name)
```

# Command line

#### Find files
```js
find ./app/img/ -name '*some.svg'
```
#### Open current dir from webstorm
```js
wstorm .
```


# JavaScript

#### Object.assign()
```js
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let settings = Object.assign( {}, defaults, options1, options2 );
```

#### Object Initializer
```js
// buildUser() returns first, last, fullName
let { first, last, fullName } = buildUser("Sam", "Williams");
```

#### Template string
```js
let veryLongText = `Hi ${userName}, this is a very very long text, ${admin.FullName}`;
```

#### new Number
```js
var now = new Date();
console.log(+now) // console.log(new Number(now))
```
#### Measuring perfomance
```js
// Constructor.
function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
}

// Add the methods to prototype
SpeedTest.prototype = {
  startTest: function(){
    var beginTime, endTime, sumTimes = 0;
    
    for (var i = 0, x = this.repetitions.length; x < i; i++) {
      beginTime = +newDate();
      this.testImplement( this.testParams );
      endTime = +newDate();
      sumTimes += endTime - beginTime;
    }
    
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                        this.repetitions + ": " +
                        this.average);
  }
};
```
