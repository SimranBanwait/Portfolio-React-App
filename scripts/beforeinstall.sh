#!/bin/bash

cd home/ubuntu/Pipeline
sudo apt-get update
sudo apt-get upgrade

# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install --lts
# sudo apt install nodejs

sudo apt install curl 
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - | sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys xargs

# npm install
# npm start
npm install pm2 -g
npm install --global serve