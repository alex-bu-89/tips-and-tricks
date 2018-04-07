```js
console.log([...[...'...']].length); // 3
```

```js
console.log(~-(2 + '2')); // 21
```

```js
// it should return [9, 5, 5]
function(a, f = () => a) {
  // some code here
  var b = a;
  a = 9;
  // return [...]
})(5)
```

```js
function* myFunc() {
  console.log(this)
}

new myFunc();
```

```js
function foo() {}

function myPromise(delay) {
  return new Promise (function (resolve, reject) {
    setTimeout(function(){
    reject();
    }, delay );
  });
}

Promise.race([foo(), myPromise(1000)])
  .then(
    function() {
      console.log('foo'); // <--
    },
    function(err) {
      console.log('baz');	
    }
  );
```
