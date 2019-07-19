# Docker
### Remove all unused containers, volumes, networks and images
```
docker system prune -a --volumes
```

### COPY vs ADD

- COPY copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>
- ADD allows <src> to be a URL; If the <src> parameter of ADD is an archive in a recognised compression format, it will be unpacked

```
Best practices for writing Dockerfiles suggests using COPY where the magic of ADD
```

### Rebuild node-sass in container to avoid bindings problem 

```
CMD ["npm", "rebuild", "node-sass"]
```
