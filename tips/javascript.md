# JavaScript

## Make monday the first day of the week

```js
const date = new Date('2020-03-23'); // Mon Mar 23 2020
date.getDay() // 1
(date.getDay() + 6) % 7 // 0
```

## Object.assign()

Pros:
* Functions can be copied from source to destination object.
* Object.assign can be used to copy multiple object properties.

Cons:
* Cannot copy through non-enumerable properties.
* Does not copy prototype properties and methods.
* Does not create a deep copy of the source object

```js
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
const settings = Object.assign( {}, defaults, options1, options2 );
```

source: https://medium.com/better-programming/deep-and-shallow-copy-in-javascript-110f395330c5

## Console.table

```js
console.table(["one", "two", "three"]);
```

## Object destructuring

```js
function buildUser(first, last, fullName) {
  return {
    first,
    last,
    fullName 
  };
}

const { first, last, fullName } = buildUser("Sam", "Williams");
```

## Template string

```js
const veryLongText = `Hi ${userName}, this is a very very long text, ${admin.FullName}`;
```

## Spread syntax

```js
// Better apply
// In cases where you want to use an array as arguments to a function.

// Old
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction.apply(null, args);

// New (spread syntax)
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction(...args);
```

### New number

```js
const now = new Date();
console.log(+now) // same as new Number(now)
```
### Measuring perfomance

```js
// Constructor
function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
}

// Add the methods to prototype
SpeedTest.prototype = {
  startTest: function() {
    let beginTime, endTime, sumTimes = 0;

    for (let i = 0, x = this.repetitions.length; x < i; i++) {
      beginTime = +newDate();
      this.testImplement( this.testParams );
      endTime = +newDate();
      sumTimes += endTime - beginTime;
    }

    this.average = sumTimes / this.repetitions;

    console.log('Average execution across ' +
                        this.repetitions + ': ' +
                        this.average);
                      
    return this.average;
  }
};
```

## Prototype extending
```js
// define the Person Class
function Person() {}

Person.prototype.walk = function(){
  alert ('I am walking!');
};

Person.prototype.sayHello = function(){
  alert ('hello');
};

// define the student class
function Student() {
  // Call the parent constructor
  Person.call(this);
}

// inherit Person
Student.prototype = Object.create(Person.prototype);

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;
```

## Private method

```js
const Auto = (function () {
  const Auto = function () {
    this.doors = 4;
  }

  Auto.prototype.publicMethod = function () {
    privateMethod.call(this);
  }

  const privateMethod = function () {
    console.log(this.doors);
  }

  return Auto;
})();

// Error
new Auto().privateMethod();

// Will successfully call privateMethod internally.
new Auto().publicMethod();
```

## Parallelize Promises

```js
const urls = [
  '/api/commits',
  '/api/issues/opened',
  '/api/issues/assigned',
  '/api/issues/completed',
  '/api/issues/comments',
  '/api/pullrequests'
];

const promises = urls.map((url) => {
  return window.fetch(url)
});

Promise.all(promises)
  .then((results) => {
    // Do something with results of all our promises
 });
```

## Object.is()

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

## RxJS
```js
// Get all distinct key up events from the input and only fire if long enough and distinct
const keyup = Rx.Observable.fromEvent(input, 'keyup')
  .map(function (e) {
    return e.target.value; // project the text from the input
  })
  .filter(function (text) {
    return text.length > 2; // only if the text is longer than 2 characters
  })
  .debounce(750) // pause for 750ms
  .distinctUntilChanged(); // only if the value has changed
```
