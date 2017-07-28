# Table of Contents
1. [Chrome Dev Tools](#chrome-dev-tools)
1. [Command line](#command-line)
1. [JavaScript](#javascript)
1. [TypeScript](#typescript)
1. [Git](#git)

# Chrome Dev Tools

[Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)

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
copy (someVariable)
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

# Command line

### Find files
```js
find ./app/img/ -name '*some.svg'
```
### Open current dir from webstorm
```js
wstorm .
```
### Find text in files (git)
```
git grep 'string' -- '*.sass'
```

# JavaScript

### Object.assign() [es6]
```js
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let settings = Object.assign( {}, defaults, options1, options2 );
```

### Console.table
```js
console.table(["one", "two", "three"]);
```

### Object Initializer [es6]
```js
// buildUser() returns first, last, fullName
let { first, last, fullName } = buildUser("Sam", "Williams");
```

### Template string [es6]
```js
let veryLongText = `Hi ${userName}, this is a very very long text, ${admin.FullName}`;
```

### Spread syntax
```js
// Better apply
// In cases where you want to use an array as arguments to a function.

// Old
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);

// New (spread syntax)
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```
### New Number
```js
var now = new Date();
console.log(+now) // console.log(new Number(now))
```
### Measuring perfomance
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

### Prototype extending
```js
// define the Person Class
function Person() {}

Person.prototype.walk = function(){
  alert ('I am walking!');
};

Person.prototype.sayHello = function(){
  alert ('hello');
};

// define the Student class
function Student() {
  // Call the parent constructor
  Person.call(this);
}

// inherit Person
Student.prototype = Object.create(Person.prototype);

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;
```
### Private method
```js
var Auto = (function () {
  var Auto = function () {
    this.doors = 4;
  }

  Auto.prototype.publicMethod = function () {
    privateMethod.call(this);
  }

  var privateMethod = function () {
    console.log(this.doors);
  }

  return Auto;
})();

// Error
new Auto().privateMethod();

// Will successfully call privateMethod internally.
new Auto().publicMethod();
```

### Parallelize Promises
```js
let urls = [
  '/api/commits',
  '/api/issues/opened',
  '/api/issues/assigned',
  '/api/issues/completed',
  '/api/issues/comments',
  '/api/pullrequests'
];

let promises = urls.map((url) => {
  return new Promise((resolve, reject) => {
    $.ajax({ url: url })
      .done((data) => {
        resolve(data);
      });
  });
});

Promise.all(promises)
  .then((results) => {
    // Do something with results of all our promises
 });
```

### Object.is()
```js
0 == ' ' // true
null == undefined // true
[1] == true // true
NaN === NaN // false

Object.is(0 , ' '); // false
Object.is(null, undefined); // false
Object.is([1], true); // false
Object.is(NaN, NaN); // true
```

### RxJS
```js
// Get all distinct key up events from the input and only fire if long enough and distinct
var keyup = Rx.Observable.fromEvent(input, 'keyup')
  .map(function (e) {
    return e.target.value; // Project the text from the input
  })
  .filter(function (text) {
    return text.length > 2; // Only if the text is longer than 2 characters
  })
  .debounce(750 /* Pause for 750ms */ )
  .distinctUntilChanged(); // Only if the value has changed
```

# TypeScript
### `this` in TypeScript

```js
class MyClass {
    private status = "blah";
    
    public foo {
        alert(this.status);
    }
}

var x = new MyClass();
x.foo(); // SAFE, method is invoked where it is referenced
var y = x.foo; // DANGER, invoking 'y()' may not have correct 'this'
window.addEventListener('click', x.foo, 10); // DANGER, method is not invoked where it is referenced
window.addEventListener('click', () => x.foo(), 10); // SAFE, method is invoked in the same expression
```

#### How to fix:

- Use Instance Functions
- Local Fat Arrow
- Function.bind

[source](https://github.com/Microsoft/TypeScript/wiki/%27this%27-in-TypeScript)

# Git
### Pretty git log
```
git log --format="%C(auto) %h %d %aI %an %s"
```

### Commit Message Conventions
```
- [feat] (feature)
- [fix] (bug fix)
- [docs] (documentation)
- [style] (formatting, missing semi colons, …)
- [refactor]
- [test] (when adding missing tests)
- [chore] (maintain)
```
