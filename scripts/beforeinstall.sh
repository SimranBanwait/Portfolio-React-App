#!/bin/bash

cd home/ubuntu/Pipeline
sudo apt-get update
sudo apt-get upgrade

#Method 1
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install --lts
# sudo apt install nodejs

#Method 2
sudo apt install curl 
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - | sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys xargs
sudo apt-get install -y Node.js 

#Method 3
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
# nvm install node 



npm install
# npm start
npm install pm2 -g
npm install --global serve