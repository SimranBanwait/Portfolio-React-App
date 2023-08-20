FROM node:16-alpine as building
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

FROM nginx:alpine
COPY --from=building /app/build /usr/share/nginx/html
RUN chmod 777 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 
