#!/bin/bash
sudo yum in git docker -y 
git clone https://github.com/cs220s23/david-node-counter
cd david-node-counter || exit
sudo systemctl enable --now docker
