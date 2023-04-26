# Node.js Web Counter

This project is a recreation of a web counter project used as an
example in previous class examples, recreated with Node.js, using Redis as a database, ran with Docker containers, within a remote server (AWS EC2).

## Setup
TODO

(Through remote) Clone this repository.
``` bash
git clone https://github.com/cs220s23/david-node-counter && cd david-node-counter
```
Launch a Redis server through Docker in detached mode.
``` bash
docker run --name redis -d -p 6379:6379 redis
```

### Resources Used
- Node.js
- Redis
- node_redis
- JSDOM
- Docker
- Amazon ECS

