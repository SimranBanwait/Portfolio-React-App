#!/bin/bash

cd home/ubuntu/Pipeline
sudo apt-get update
sudo apt-get upgrade

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

sudo apt install npm

npm install
npm install pm2 -g
npm install serve -g