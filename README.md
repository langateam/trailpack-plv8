# trailpack-plv8

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

require() and execute nodejs code in Postgres with PLV8 and Trails

## Install

```sh
$ npm install --save trailpack-plv8
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-plv8')
  ]
}
```

## License
MIT

## Maintained By
[<img src='http://i.imgur.com/Y03Jgmf.png' height='64px'>](http://langa.io)

[npm-image]: https://img.shields.io/npm/v/trailpack-plv8.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-plv8
[ci-image]: https://img.shields.io/travis//trailpack-plv8/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-plv8
[daviddm-image]: http://img.shields.io/david//trailpack-plv8.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-plv8
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-plv8.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-plv8

