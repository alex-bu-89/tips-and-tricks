# Table of Contents
1. [Chrome Dev Tools](#chrome-dev-tools)
1. [Command line](#command-line)
1. [JavaScript](#javascript)

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

#### Pause JavaScript execution
```
- press fn + F8 (osx)
- inspect elements
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
#### Find text in files (git)
```
git grep 'string' -- '*.sass'
```

# JavaScript

#### Object.assign() [es6]
```js
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let settings = Object.assign( {}, defaults, options1, options2 );
```

#### Console.table
```js
console.table(["one", "two", "three"]);
```

#### Object Initializer [es6]
```js
// buildUser() returns first, last, fullName
let { first, last, fullName } = buildUser("Sam", "Williams");
```

#### Template string [es6]
```js
let veryLongText = `Hi ${userName}, this is a very very long text, ${admin.FullName}`;
```

#### Spread syntax
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
#### New Number
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

#### Prototype extending 
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
#### Private method 
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

#### Parallelize Promises 
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
#### Remove dublicates from array
```js
let removeDublicates = (array) => {
  let result = array.filter((item, index) => {
    return array.indexOf(item) == index
  })
  
  return result;
}

removeDublicates([1,3,2,4]);
removeDublicates([1,3,3]);
removeDublicates([1,4,1,4]);
removeDublicates([1,1,1,1,1,1]);
```

#### Unscramble words
```js
// unscramble word
var wordsList = ['love', 'foo', 'blab', 'blay', 'vole', 'evol', 'lovy', 'fdsfdsfdsf'];

var unscramble = (word) => {
  let possibleMatch = wordsList
  // match words with the same length
  .filter((w) => {
    return word.length === w.length;
  })
  // check letters
  .filter((w) => { 
    let wordToCheck = word.split(''); 
    
    // remove matched lattes from wordToCheck array
    w.split('').map((letter) => {           
      let letterIndex = wordToCheck.indexOf(letter);
      
      if(letterIndex > -1) {
        wordToCheck.splice(letterIndex, 1);
      }             
    })
    
    // if wordToCheck is empty it's a match
    if(wordToCheck.length === 0){ 
      wordToCheck = ''
      return true
    } 
    
    // otherwise not
    wordToCheck = ''
    return false;
  })
  
  console.log(possibleMatch)
}

unscramble('ovel');

```
