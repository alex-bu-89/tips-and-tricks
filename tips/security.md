## Possible XSS in templates

```js
// bad code
document.querySelector(".status_timer").textContent = `{{ name }}: ${result}`; 
```

```js
// user input
`;js-code-goes-here;//
```

## Scan network
```sh
nmap 10.219.13.0/24
```
