#!/bin/bash

#changing directory
cd home/ubuntu/Pipeline

#updating build modules
# sudo rm -rf node_modules
# npm install
# npm start

#Running the app
npm install
npm start
npm fund
# npm install pm2 -g
# npm install serve -g
pm2 server build 8080 --spa
