# NPM

## Get peer dependencies
```
npm info "eslint-config-airbnb@latest" peerDependencies
```

## Install peer dependencies
```
(
  export PKG=eslint-config-airbnb-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev   "$PKG@latest"
)
```

## Update npm packeges
```
npm i -G npm-check-updates
npm-check-updates -u
npm-check-updates -a
```
