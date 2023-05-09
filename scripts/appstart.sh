#!/bin/bash


#updating build modules
# sudo rm -rf node_modules
# npm install
# npm start

#Running the app
# npm install
# npm install pm2 -g
# npm install --global serve

#changing directory
cd home/ubuntu/Pipeline
pm2 server build 8080 --spa
