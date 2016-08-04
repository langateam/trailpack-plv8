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
      logger: new smokesignals.Logger('silly')
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
            host: process.env.PG_HOST || 'localhost',
            database: process.env.PG_DB || 'postgres',
            user: process.env.PG_USER || 'postgres',
            password: process.env.PG_PASSWORD
          }
        }
      },
      defaultStore: 'plv8',
      migrate: 'none'
    },
    plv8: {
      store: 'plv8',
      dependencies: [
        'lodash'
      ]
    }
  }
}, smokesignals.FailsafeConfig)


