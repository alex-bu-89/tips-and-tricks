# Command line

### Find files
```js
find ./app/img/ -name '*some.svg'
```
### Open current dir from webstorm
```js
wstorm .
atom .
```
### Find text in files (git)
```
git grep 'string' -- '*.sass'
```

### Make symbolic links between files
```
ln -s -f /source/ /destination
```
`-f` remove existing destination files
`-s` make symbolic links

### Replace placeholders in file
```
sed \
    -e "s|foo|bar|g" \
    file.txt >> newfile.txt
```
