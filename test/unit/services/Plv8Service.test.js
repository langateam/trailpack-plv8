'use strict'
/* global describe, it */

const assert = require('assert')

describe('Plv8Service', () => {
  it('should exist', () => {
    assert(global.app.api.services['Plv8Service'])
  })
})
