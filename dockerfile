FROM node:alpine3.17 as ReactContainer
WORKDIR /Portfolio
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

