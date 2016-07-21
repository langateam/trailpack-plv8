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

  /**
   * TODO document method
   */
  configure () {

  }

  /**
   * Instantiate PLV8 with knex connection
   */
  initialize () {
    this.plv8 = new PLV8(this.app.packs.knex.stores[this.app.config.plv8.store])
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

