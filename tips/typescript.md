
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
