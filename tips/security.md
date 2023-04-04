## Possible XSS in templates

```js
// bad code
document.querySelector(".status_timer").textContent = `{{ name }}: ${result}`; 
```

```js
// user input
`;js-code-goes-here;//
```
