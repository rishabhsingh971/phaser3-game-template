## Phaser3 Game Template
A Phaser 3 game template with ES6 support via Babel 7 and Webpack 4 that includes hot-reloading for development and production-ready builds.


## Requirement
- Node.js - Install from [here](https://nodejs.org/en/download/)


## Content
- [.babelrc](./.babelrc) - ) Babel 7 config. Babel converts/transpiles current code into backward compatible code. [Know more](https://babeljs.io/docs/en/).
- [.eslintrc](./.eslintrc) - ESLint config. ESLint is a javascript linting utility. [Know more](https://eslint.org/docs/about/)
- [webpack](./webpack/) - Webpack 4 configs (divided into common, dev and prod). Webpack is used to bundle and build source files. [Know more](https://webpack.js.org/concepts/)
- [package.json](./package.json) - Project config which contains project metadata(description, version, scripts, etc). [Know more](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)
- [.gitignore](./.gitignore) - contains a list of file/directories which should be ignored by git. [Know more](https://git-scm.com/docs/gitignore)
- [src](./src) - source folder which contains everything related to the game(source code, assets, etc). Here, it contains a sample game made using this [tutorial](https://phaser.io/tutorials/making-your-first-phaser-3-game) as base.[Try it](https://rishabhsingh971.github.io/phaser-sample-game/).
- [yarn.lock](./yarn.lock) - This file is generated when packages are installed using [yarn](https://yarnpkg.com/en/docs/getting-started) package manager. You can use any other package manager too ([npm](https://docs.npmjs.com/about-npm/), [pnpm](https://pnpm.js.org/en/motivation) etc.).

## How to Use this template
- Create a new repo by clicking on `Use this template` above or [here](https://github.com/rishabhsingh971/phaser-sample-game/generate).

## Available Commands
- `yarn`/`npm install` - Install project dependencies
- `yarn start`/`npm start`- Start dev server
- `yarn build`/`npm run build` - Bundle and builds source files into dist.
- `yarn start`/`npm start`- Start dev server
- `yarn deploy`/`npm run deploy` - Build and deploy game using [gh-pages](https://www.npmjs.com/package/gh-pages).


## Some more templates:
- https://github.com/photonstorm/phaser3-project-template
- https://github.com/rblopes/generator-phaser-plus
- https://github.com/oliverbenns/phaser-starter
- https://github.com/nkholski/phaser3-es6-webpack