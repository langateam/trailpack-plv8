'use strict'

const path = require('path')
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
      ],
      paths: {
        root: path.resolve(__dirname, '..')
      }
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
            database: 'postgres'
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


