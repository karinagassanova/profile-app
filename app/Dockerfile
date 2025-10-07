FROM node:20-alpine

ENV MONGO_USER='admin' \
    MONGO_PASS='pass' \
    MONGO_HOST='mongoDB' \
    MONGO_PORT=27017 \
    PORT=8080

EXPOSE 8080

RUN mkdir -p /home/app
WORKDIR /home/app

# Copy current folder contents
COPY . .

RUN npm install

CMD ["node", "server.js"]
