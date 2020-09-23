FROM alpine:latest
MAINTAINER Emily Maré (emileet) <emileet@plsnobully.me>

RUN apk add --no-cache npm nodejs && \
    mkdir -p /app/data

COPY alpine.sh index.js package.json /app
COPY data/presence.json /app/data

ENV TOKEN=VALUE

VOLUME ["/app/data"]
CMD ["/bin/sh", "/app/alpine.sh"]