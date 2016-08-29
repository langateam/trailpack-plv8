'use strict'

const Service = require('trails-service')

/**
 * @module Plv8Service
 * @description Interact with PLV8 modules from Trails
 */
module.exports = class Plv8Service extends Service {
  /**
   * Returns promise of the evaluation
   */
  eval (fn) {
    const plv8 = this.app.packs.plv8.plv8

    return plv8.eval(fn)
  }
}

