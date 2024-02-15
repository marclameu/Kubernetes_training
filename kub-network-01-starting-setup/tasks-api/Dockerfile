FROM node:14-alpine

WORKDIR /app

COPY kub-network-01-starting-setup/tasks-api/package.json .

RUN npm install

COPY kub-network-01-starting-setup/tasks-api/ .

EXPOSE 8000

CMD [ "node", "tasks-app.js" ]