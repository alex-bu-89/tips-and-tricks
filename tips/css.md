# CSS

## Is not a first child
```css
.spacing > * + * {
    margin-top: var(--spacer, 2rem);
}
```