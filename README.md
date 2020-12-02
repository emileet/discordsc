# discordsc

discord status changer - a simple nodejs app to automatically cycle through predefined custom statuses

## instructions

clone this repo and then install it's dependencies

```shell
npm install
```

copy `example.env` to `.env` and specify your discord auth token
```shell
TOKEN=mfa.emi1337
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
            "emoji_name": "purpleheart"
        },
        {
            "emoji_id": "670569765034655774",
            "emoji_name": "purpleheart"
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

alternatively, pull the image from the pod.plsnobully.me container registry

```shell
docker pull pod.plsnobully.me/emileet/discordsc:latest
```

now spin up a container
```shell
docker run --detach \
  -e TOKEN=mfa.emi1337 \
  -v /host/data:/app/data \
  --name discordsc \
  emileet/discordsc:latest
```

## notes

- one way to retrieve a discord token is to open the developer console (ctrl+shift+i) in the discord client, go to the network tab, navigate to a discord server and under the **Name** pane look for something like `messages?limit=50`; where you'll find under the **Headers** tab the token in the **Request Headers** as `authorization: mfa.emi1337`