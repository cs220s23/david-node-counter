# Node.js Web Counter
This project is a recreation of a web counter project used as an
example in previous class examples, recreated with Node.js, getting the count through a, ran with Docker containers, within a remote server (AWS EC2).
## Setup
TODO

(Through remote) Clone this repository.
``` bash
git clone https://github.com/cs220s23/david-node-counter && cd david-node-counter
```
Build this repository in a new Docker image, tagged `counter`
``` bash
docker build -t counter .
```
Then, run the container (assuming it has the tag `counter`), with port 80, in detached mode, giving the container the name `counter`.
```bash
docker run -d -p 80:80  --name counter counter
```
## Stop counter
Stop the container (with the name `counter`) by running
```bash
docker rm -f counter
```
## Automated scripts
If you want to save time, if Docker and Git are installed, run the `up` and `down` files to build and run the Docker container of the program, and to terminate it respectively.

## EC2 User Data
Take the contents of `userdata.sh`, and put in into the "User Data" option in "Advanced Settings" upon the creation of an EC2 instance.

This script should install git, Docker, as well as clone this repository, and change the directory into this repository.

From that point you should be able to run the up and down scripts to automate the launching of the container.
## Resources Used
- [Node.js](https://nodejs.org)
- [JSDOM](https://github.com/jsdom/jsdom)
- [Docker](https://docker.org)
- [Amazon ECS](https://aws.amazon.com/ecs/)
