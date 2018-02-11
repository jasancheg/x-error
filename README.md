# x-error

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Version: 0.1.0.
>
> Status: completed

Create custom error objects for the Application.

## Features

* Strict and readable code enforced with [xo](https://github.com/sindresorhus/xo).
* Unit tested with `mocha`.

## Installation

``` bash
$ npm install https://github.com/jasancheg/x-error.git
```

## Usage

```js
const MyError = require('x-error')('MyError', { code: 'ENOENT' });
// or
const MyError = require('x-error')('MyError', 501);
```

Create new errors with the resulting object. The first argument is the error
message. The second is an object containing keys that will decorate the error,
overriding any keys set by the factory.

## Run Test

```bash
$ make test
```

## License

© 2018 MIT License.  Made with ♥️  -  🇨🇷 - [Inidea](http://inideaweb.com) - [Tonisan](http://tonisan.com).
