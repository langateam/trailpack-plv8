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
    log: {
      logger: new smokesignals.Logger('debug')
    },
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
          client: 'pg',
          connection: {
            host: 'localhost',
            database: 'plv8_test'
          }
        }
      }
    },
    plv8: {
      store: 'plv8',
      dependencies: [
        require.resolve('lodash')
      ]
    }
  }
}, smokesignals.FailsafeConfig)


