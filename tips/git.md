# Git
### Commit message conventions
```
- [feat] (feature)
- [fix] (bug fix)
- [docs] (documentation)
- [style] (formatting, missing semi colons, …)
- [refactor]
- [test] (when adding missing tests)
- [chore] (maintain)
```
### Pretty git log
```
git log --format="%C(auto) %h %d %aI %an %s"
```
### Multiple SSH Keys
list of saved keys
```
ssh-add -l
```
add key
```
ssh-add ~/.ssh/id_rsa_blabla
```


### Get current branch name
```
git rev-parse --abbrev-ref HEAD
```

### Remove all local branches but keep `master`
```
git branch | grep -v "master" | xargs git branch -D
```
