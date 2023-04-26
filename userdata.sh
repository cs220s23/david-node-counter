#!/bin/bash
yum in git docker -y
git clone https://github.com/cs220s23/david-node-counter
cd david-node-counter || exit
systemctl enable --now docker
