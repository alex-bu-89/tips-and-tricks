# Command line

### Search files
```js
find ./app/img/ -name '*some.svg'
```
### Search in files with git
```
git grep 'string' -- '*.sass'
```

### Open current dir from webstorm / atom
```js
wstorm .
atom .
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
