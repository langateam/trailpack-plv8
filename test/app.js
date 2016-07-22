'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: { },
    services: { }
  },
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('trailpack-knex'),
        require('../')
      ]
    },
    database: {
      models: {
        migrate: 'none'
      },
      stores: {
        plv8: {

        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


