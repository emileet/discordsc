#!/bin/sh
# docker deployment of discordsc in alpine

# install required packages
apk add --no-cache npm nodejs

cd /app

# reinstall modules and run
rm -rf node_modules && npm i
npm run app
