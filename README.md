# Node.js Web Counter
This project is a recreation of a web counter  used as an
example in previous assignment for running through gunicorn, or on AWS, recreated with Node.js, displaying the counter as HTML code, through an DOM implementation for Node, JSDOM, running in a Docker container, getting, and incrementing the count through a Docker Volume, within a remote server (AWS EC2).
## Setup

### EC2 Instance Setup
Make sure that the instance has HTTP access in Network Settings (port 80), so that way a web browser can access it.
![alt text](http.png "Title")

### Dependencies
(Through the remote) Make sure that Git and Docker are installed.

Amazon Linux has Docker in its repos, [Ubuntu](https://docs.docker.com/engine/install/ubuntu/) and [Red Hat](https://docs.docker.com/engine/install/rhel/) do not, use the Docker-CE repo for those, and replace `docker` with `docker-ce` in their respective installations.

RPM-based distros (Amazon, RHEL):
```bash
sudo dnf in git docker -y
```

DEB-based distros (Ubuntu, Debian), through Docker CE:
```bash
sudo apt install git docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Enable and start the Docker systemd service.

```bash
sudo systemctl enable --now docker.service
```

### Getting the Application
Clone this repository.
``` bash
git clone https://github.com/cs220s23/david-node-counter && cd david-node-counter
```
Build this repository in a new Docker image, tagged `counter`
``` bash
sudo docker build -t counter .
```
Then, run the container (assuming it has the tag `counter`), with port 80, in detached mode, giving the container the name `counter`.
```bash
sudo docker run -d -p 80:80  --name counter counter
```
## Stop counter
Stop the container (with the name `counter`) by running
```bash
sudo docker rm -f counter
```
## Automated scripts
Alternatively, if typing (or copy-pasting) numerous commands is too cumbersome, if Docker is already installed in the instance, run the `up` and `down` files to build and run the Docker container of the program, and to terminate it respectively.

Make sure both the `up` and `down` scripts have executable permissions
```bash
chmod +x up down
```

Run the script (replace with down to remove the containers)
```bash
sudo ./up
```

## EC2 User Data
**This script is for Amazon Linux only!!**

Take the contents of `userdata.sh`, and put in into the "User Data" option in "Advanced Settings" upon the creation of an EC2 instance.

This script should install git, Docker, as well as clone this repository, and change the directory into this repository.

From that point you should be able to run the up and down scripts to automate the launching of the container.
## Resources Used
- [Node.js](https://nodejs.org)
- [JSDOM](https://github.com/jsdom/jsdom)
- [Docker](https://docker.org)
- [Amazon ECS](https://aws.amazon.com/ecs/)
