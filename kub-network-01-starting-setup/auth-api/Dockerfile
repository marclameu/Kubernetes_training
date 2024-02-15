FROM node:14-alpine

WORKDIR /app

COPY kub-network-01-starting-setup/auth-api/package.json .

RUN npm install

COPY kub-network-01-starting-setup/auth-api/ .

EXPOSE 80

CMD [ "node", "auth-app.js" ]