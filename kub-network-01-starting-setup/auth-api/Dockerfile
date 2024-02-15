FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN ls -la

RUN npm install

COPY . .

EXPOSE 80

RUN ls -la


CMD [ "node", "auth-app.js" ]