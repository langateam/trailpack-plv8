'use strict'

const Trailpack = require('trailpack')
const PLV8 = require('plv8')

module.exports = class PLV8Trailpack extends Trailpack {

  /**
   * Validate plv8 store setting
   */
  validate () {
    if (!this.app.config.plv8.store) {
      return new Error('config.plv8.store must be set')
    }
  }

  configure () {
    this.log.debug('app.config.main.paths', this.app.config.main.paths)
  }

  /**
   * Instantiate PLV8 with knex connection
   */
  initialize () {
    const plconfig = this.app.config.plv8

    this.log.debug('plv8: using store', plconfig.store)

    this.plv8 = new PLV8(this.app.packs.knex.stores[plconfig.store].knex)

    return this.plv8.init()
      .then(() => {
        return Promise.all(plconfig.dependencies.map(mod => {
          return this.plv8.install(mod, this.app.config.main.paths.root)
        }))
      })
      .catch(err => {
        this.log.warn('trailpack-plv8:', err)
      })
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

