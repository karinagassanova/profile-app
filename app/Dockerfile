FROM node:20-alpine

ENV MONGO_USER='admin' \
    MONGO_PASS='pass' \
    MONGO_HOST='mongoDB' \
    MONGO_PORT=27017 \
    PORT=3000

EXPOSE 3000

RUN mkdir -p /home/app
WORKDIR /home/app

# Copy current folder contents
COPY . .

RUN npm install

CMD ["node", "server.js"]
