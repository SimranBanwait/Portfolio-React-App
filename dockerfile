FROM node:alpine3.17 as ReactContainer
WORKDIR /Portfolio
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
CMD rm -r ./*
COPY --from=ReactContainer /Portfolio/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
