# discordsc

discord status changer - a simple nodejs app to automatically cycle through predefined custom statuses

## instructions

clone this repo then install it's dependencies

```shell
cd discordsc
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

now run discordsc with
```shell
npm run app
```