FROM node:alpine3.17 as ReactContainer
ENV NODE_VERSION 16.20.2
WORKDIR /Portfolio
COPY package.json /Portfolio
RUN npm install
COPY . /Portfolio/ 
CMD npm run build

#nginx block
FROM nginx:alpine3.17
ENV NODE_VERSION 16.20.2
WORKDIR /usr/share/nginx/html
RUN rm /usr/share/nginx/html/index.html
RUN rm /usr/share/nginx/html/50x.html
RUN chmod -R 755 /usr/share/nginx/html
COPY --from=ReactContainer /Portfolio/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
