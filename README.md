# discordsc

discord status changer - a simple nodejs app to automatically cycle through predefined custom statuses

## instructions

clone this repo then install it's dependencies

```shell
git clone https://git.plsnobully.me/emileet/discordsc.git
cd discordsc && npm install
```

copy `example.env` to `.env` and specify your discord auth token
```shell
TOKEN=mfa.xxx
```

now run discordsc with
```shell
node index.js
```