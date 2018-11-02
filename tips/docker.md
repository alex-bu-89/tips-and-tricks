# Docker
### Remove all images and containers
```
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```

### COPY vs ADD

- COPY copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>
- ADD allows <src> to be a URL
- If the <src> parameter of ADD is an archive in a recognised compression format, it will be unpacked

```
Best practices for writing Dockerfiles suggests using COPY where the magic of ADD
```
