FROM node:14-alpine

WORKDIR /app

COPY kub-network-01-starting-setup/users-api/package.json .

RUN npm install

COPY kub-network-01-starting-setup/ .

EXPOSE 8080

CMD [ "node", "users-app.js" ]