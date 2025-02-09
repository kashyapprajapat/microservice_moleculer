FROM node:18

WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


CMD ["sh", "-c", "node index.js & sleep 5 && node api/server.js"]
