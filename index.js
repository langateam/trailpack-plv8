'use strict'

const Trailpack = require('trailpack')

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
   * TODO document method
   */
  initialize () {

  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

