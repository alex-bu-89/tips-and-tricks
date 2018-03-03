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
