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

### Remove all local branches but keep master
```
git branch | grep -v "master" | xargs git branch -D
```

### Change the commit author for one specific commit
1. Rebase to commit from which the autor should be changed 
```
git rebase -i `commit`
```
2. Change the lines for commits which should be changed from `pick` to `edit`
3. Change the autor
```
git commit --amend --author="Joe Doe <some@email.com>"
```
4. Then continue rebasing
```
git rebase --continue
```
5. If all good, push to branch and may the force be with you
```
git push origin branch -f
```
