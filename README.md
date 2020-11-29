# Node Template

![License](https://img.shields.io/github/license/ja1den/node-template)

> A template for [Node.js](https://nodejs.org/en/) projects.

## Introduction

This is a template for [Node.js](https://nodejs.org/en/) projects written in [TypeScript](https://www.typescriptlang.org/).

It includes [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configuration, as well as [husky](https://typicode.github.io/husky/#/) for managing git hooks.

It enforces [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [commitlint](https://commitlint.js.org/#/).

Finally, the template includes a [Dockerfile](Dockerfile) for building a container.

## Usage

Run the app with [nodemon](https://nodemon.io/).

```sh
npm start
```

Start the app in production mode.

```sh
npm run prod
```

Lint the project.

```sh
npm run lint
```

Use [Commitizen](http://commitizen.github.io/cz-cli/) to generate your commit message.

```sh
npm run commit
```

Build the [Docker](https://www.docker.com/) image.

```sh
docker build . -t ja1den/node-template
```

## License

[MIT](LICENSE)
