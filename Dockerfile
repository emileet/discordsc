FROM node:alpine
MAINTAINER Emily Maré (emileet) <emileet@plsnobully.me>

WORKDIR /app

COPY data/presence.json /app/data/
COPY index.js package.json /app/

RUN npm install

ENV TOKEN=VALUE

VOLUME ["/app/data"]
CMD ["index.js"]