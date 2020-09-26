# discordsc

discord status changer - a simple nodejs app to automatically cycle through predefined custom statuses

## instructions

clone this repo and then install it's dependencies

```shell
npm install
```

copy `example.env` to `.env` and specify your discord auth token
```shell
TOKEN=mfa.xxx
```

copy `example.json` to `presence.json` and configure it with your desired statuses
```json
{
    "statuses": [
        "emiyeet",
        "arch btw"
    ],
    "emojis": [
        {
            "emoji_id": "670569765034655774",
            "emoji_name": "purple-heart"
        },
        {
            "emoji_id": "670569765034655774",
            "emoji_name": "purple-heart"
        }
    ]
}
```

now run the application
```shell
npm run app
```

## docker

clone this repo and then build an image (ensure `data/presence.json` exists)

```shell
docker build -t emileet/discordsc .
```

now spin up a container
```shell
docker run --detach \
  -e TOKEN=mfa.xxx \
  -v /host/data:/app/data \
  --name discordsc \
  emileet/discordsc:latest
```