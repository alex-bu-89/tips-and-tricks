# CSS

## Is not a first child
```css
.spacing > * + * {
    margin-top: var(--spacer, 2rem);
}
```

## @supports

Allows us to test if the browser supports a particular property or property:value combination before applying a block of styles

A classic use case:

```css
.photo-layout {
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 200px;
    margin: 1rem;
  }
}

@supports (display: grid) {
  .photo-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    > div {
      margin: 0;
    }
  }
}
```