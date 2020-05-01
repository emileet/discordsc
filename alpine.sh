#!/bin/sh
# docker deployment of discordsc in alpine

# install required packages
apk add --no-cache npm nodejs

cd /discordsc

# reinstall modules and run
rm -r node_modules && npm i
npm run app
