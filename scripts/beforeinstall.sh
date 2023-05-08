#!/bin/bash

cd home/ubuntu/Pipeline
sudo apt-get update
sudo apt-get upgrade


#Method 3
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
nvm install node


npm install
npm start
# npm install pm2 -g
# npm install --global serve