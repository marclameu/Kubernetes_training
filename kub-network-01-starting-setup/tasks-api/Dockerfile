FROM arm32v7/node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "tasks-app.js" ]