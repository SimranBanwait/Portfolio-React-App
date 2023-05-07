#!/bin/bash

#changing directory
cd home/ubuntu/Pipeline

#updating build modules
sudo rm -rf node_modules
npm install

#Running the app
pm2 server build 8080 --spa
