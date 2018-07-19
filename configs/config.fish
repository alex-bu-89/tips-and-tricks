# My fish config
# Config path = ~/.config/fish/config.fish

# nice light cyan color instead of dark blue
set -gx LSCOLORS gxfxcxdxbxegedabagacad

function ls --description 'List contents of directory'
  command ls -lFG $argv
end

function delmerged --description 'Delete all local branches that is already merged to current branch (exludes master)'
  command git branch --merged | grep -v "\*" | grep -v "master" | xargs -n 1 git branch -d
  command git remote prune origin
end

set -gx GOPATH $HOME/go
set -gx GOROOT (go env GOROOT)

# Allow 256 colors in iTerm2 for pretty vim colors
set -gx CLICOLOR 1
set -gx TERM xterm-256color
