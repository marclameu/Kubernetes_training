FROM node:14-alpine

WORKDIR /app

COPY kub-network-01-starting-setup/auth-api/package.json .

RUN ls -la

RUN npm install

COPY kub-network-01-starting-setup/auth-api/ .

EXPOSE 80

#should write the current directory content
RUN ls -la


CMD [ "node", "auth-app.js" ]