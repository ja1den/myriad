# Myriad

![License](https://img.shields.io/github/license/ja1den/myriad)

> Do you like to count?

## Introduction

[Myriad][myriad] is a Discord bot for managing counting channels. It removes incorrect counts and tracks each user's contribution.

This project was formerly known as CountBot.

## Development

Run Myriad with [nodemon](https://nodemon.io/).

```sh
npm start
```

Lint the source.

```sh
npm run lint
```

Generate your commit message with [Commitizen](http://commitizen.github.io/cz-cli/).

```sh
npm run commit
```

# Deployment

Build the [Docker](https://www.docker.com/) image.

```sh
docker build . -t myriad
```

Deploy the bot with the image.

```sh
docker run --name myriad \
	--env TOKEN=1234 \
	--env DB_HOST=example.com \
	--env DB_PORT=25565
	myriad
```

## License

[MIT](LICENSE)

[myriad]: https://discord.com/oauth2/authorize?client_id=548814470600720384&permissions=268790848&scope=bot
